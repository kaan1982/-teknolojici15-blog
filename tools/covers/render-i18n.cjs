// Localised covers.
//   Extract Turkish strings:  node tools/covers/render-i18n.cjs --extract            → tools/covers/strings.tr.json
//   Render one language:      node tools/covers/render-i18n.cjs --lang en [src...]   → public/img/kapak/en/<name>.webp
//   Preview Turkish source:   node tools/covers/render-i18n.cjs --lang tr <src>      → /tmp/cover-tr-<src>.png only
// Translations live in i18n/<code>/covers.json: { "<src>": { "<turkish innerHTML>": "<translated innerHTML>" } }
// <src> is the file name in tools/covers/src without .html. Output name: hookNN-* stays, everything else gets "gen-".
const { chromium } = require('playwright');
const fs = require('fs'); const path = require('path'); const { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '../..'); const SRC = path.join(__dirname, 'src');
const args = process.argv.slice(2);
const extract = args.includes('--extract');
const li = args.indexOf('--lang'); const lang = li >= 0 ? args[li + 1] : null;
let list = args.filter((a, i) => !a.startsWith('--') && !(li >= 0 && i === li + 1));
if (!list.length) list = fs.readdirSync(SRC).filter((f) => f.endsWith('.html') && !f.startsWith('_')).map((f) => f.replace(/\.html$/, '')).sort();
const outName = (s) => (/^hook\d+-/.test(s) ? s : 'gen-' + s);

// Extra faces are added to the cover's own families (A = Archivo, V = VT323) with unicode-range,
// so every script gets a glyph without changing the Latin look.
const FONT_PKGS = { 'noto-sans': ['cyrillic', 'cyrillic-ext', 'greek', 'vietnamese'], 'noto-sans-arabic': ['arabic'], 'noto-sans-hebrew': ['hebrew'], 'noto-sans-thai': ['thai'], 'noto-sans-devanagari': ['devanagari'], 'noto-sans-bengali': ['bengali'], 'noto-sans-tamil': ['tamil'], 'noto-sans-georgian': ['georgian'] };
const CJK = { ja: 'JP', 'zh-cn': 'SC', 'zh-tw': 'TC', ko: 'KR' };
function fontCSS(code) {
  const faces = [];
  for (const [pkg, subs] of Object.entries(FONT_PKGS)) {
    const dir = path.join(ROOT, 'node_modules/@fontsource-variable', pkg);
    const css = fs.readFileSync(path.join(dir, 'wght.css'), 'utf8');
    for (const block of css.split('/* ').slice(1)) {
      const name = block.slice(0, block.indexOf(' */'));
      if (!subs.some((sb) => name === `${pkg}-${sb}-wght-normal`)) continue;
      const file = block.match(/url\(\.\/(files\/[^)]+)\)/)[1]; const range = block.match(/unicode-range:([^;]+);/)[1];
      faces.push(`src:url(file://${path.join(dir, file)});font-weight:100 900;unicode-range:${range}`);
    }
  }
  const c = CJK[code] || 'JP';
  faces.push(`src:local("Noto Sans CJK ${c} Black"),local("NotoSansCJK${c.toLowerCase()}-Black");unicode-range:U+1100-11FF,U+2E80-9FFF,U+AC00-D7AF,U+F900-FAFF,U+FF00-FFEF`);
  return ['A', 'V'].map((f) => faces.map((x) => `@font-face{font-family:${f};${x}}`).join('\n')).join('\n');
}

// In-page: collect translatable units (HTML leaf blocks and SVG <text>), outside the brand block.
function collect() {
  const INLINE = new Set(['BR', 'EM', 'B', 'I', 'STRONG', 'SMALL', 'SPAN', 'U', 'S', 'MARK', 'SUP', 'SUB']);
  const root = document.querySelector('.cv'); const units = [];
  const hasText = (el) => /\p{L}/u.test(el.textContent || '');
  root.querySelectorAll('*').forEach((el) => {
    if (el.closest('.cv__brand')) return;
    if (el.closest('svg')) { if ((el.tagName === 'text' || el.tagName === 'tspan') && !el.querySelector('tspan') && hasText(el)) units.push({ el, svg: true, key: el.textContent.trim() }); return; }
    if (el.tagName === 'svg' || el.tagName === 'IMG' || INLINE.has(el.tagName)) return;
    if (![...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) {
      // a block whose text sits only inside inline children still counts
      if (![...el.children].length || ![...el.children].every((c) => INLINE.has(c.tagName))) return;
    }
    if ([...el.children].some((c) => !INLINE.has(c.tagName))) return;
    if (!hasText(el)) return;
    units.push({ el, svg: false, key: el.innerHTML.trim() });
  });
  return units;
}

(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  const tr = lang && lang !== 'tr' ? JSON.parse(fs.readFileSync(path.join(ROOT, 'i18n', lang, 'covers.json'), 'utf8')) : {};
  const strings = {}; const outDir = path.join(ROOT, 'public/img/kapak', lang || 'x');
  if (lang && lang !== 'tr') fs.mkdirSync(outDir, { recursive: true });
  const L = { rtl: ['ar', 'fa', 'ur', 'he'].includes(lang) };
  let n = 0;
  for (const src of list) {
    await p.goto('file://' + path.join(SRC, src + '.html'));
    if (lang && lang !== 'tr') await p.addStyleTag({ content: fontCSS(lang) });
    await p.evaluate(() => document.fonts.ready);
    if (extract) {
      strings[src] = await p.evaluate(`(${collect})().map(u=>u.key)`);
      strings[src] = [...new Set(strings[src])];
      continue;
    }
    const map = tr[src] || {};
    const report = await p.evaluate(({ fn, map, rtl, code }) => {
      const units = eval('(' + fn + ')')(); const miss = []; const changed = [];
      document.documentElement.lang = code;
      const before = units.map((u) => { const r = u.el.getBoundingClientRect(); return { w: r.width, h: r.height, len: u.svg ? u.el.getComputedTextLength() : 0 }; });
      units.forEach((u, i) => {
        const t = map[u.key];
        if (t == null) { if (code !== 'tr') miss.push(u.key); return; }
        if (t === u.key) return;
        if (u.svg) u.el.textContent = t; else u.el.innerHTML = t;
        if (rtl) u.el.setAttribute('dir', 'rtl');
        changed.push(i);
      });
      return { miss, before, changed };
    }, { fn: collect.toString(), map, rtl: !!(L && L.rtl), code: lang || 'tr' });
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(150);
    // fit: shrink anything that grew past its old box or the frame
    await p.evaluate(({ fn, before, changed }) => {
      const units = eval('(' + fn + ')')();
      units.forEach((u, i) => {
        const b0 = before[i]; if (!b0 || !changed.includes(i)) return;
        if (u.svg) {
          const len = u.el.getComputedTextLength(); const max = Math.max(b0.len * 1.12, 1);
          if (len > max) { const fs0 = parseFloat(getComputedStyle(u.el).fontSize); u.el.style.fontSize = (fs0 * max / len) + 'px'; }
          return;
        }
        const fits = () => { const r = u.el.getBoundingClientRect(); return r.left >= 14 && r.right <= 1066 && r.height <= b0.h * 1.1 + 6 && u.el.scrollWidth <= u.el.clientWidth + 3; };
        let k = 0;
        while (!fits() && k < 40) {
          const all = [u.el, ...u.el.querySelectorAll('*')];
          all.forEach((e) => { const f = parseFloat(getComputedStyle(e).fontSize); e.style.fontSize = (f * 0.95) + 'px'; });
          k++;
        }
      });
    }, { fn: collect.toString(), before: report.before, changed: report.changed });
    const png = `/tmp/cover-${lang || 'tr'}-${src}.png`;
    await p.screenshot({ path: png });
    if (lang && lang !== 'tr') {
      const out = path.join(outDir, outName(src) + '.webp');
      execFileSync('python3', ['-c', `from PIL import Image; im=Image.open('${png}').convert('RGB').resize((720,1280), Image.LANCZOS); im.save('${out}','WEBP',quality=78,method=5)`]);
      fs.unlinkSync(png);
    }
    if (report.miss.length) console.log('MISSING', lang, src, JSON.stringify(report.miss));
    n++;
  }
  if (extract) { fs.writeFileSync(path.join(__dirname, 'strings.tr.json'), JSON.stringify(strings, null, 1)); console.log('extracted', Object.keys(strings).length, Object.values(strings).flat().length); }
  else console.log('rendered', lang, n);
  await b.close();
})();
