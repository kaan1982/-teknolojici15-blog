// Teknolojici15 blog: static site generator. `node build.mjs` → dist/
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const OUT = path.join(ROOT, 'dist');
const SITE = process.env.SITE_URL || 'https://teknolojici15-blog.vercel.app'; // canonical origin; set SITE_URL when a custom domain is added
const IG = 'https://www.instagram.com/teknolojici15/';
const ENGINE = path.join(ROOT, 'engine');

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const read = (p) => fs.readFileSync(p, 'utf8');
const write = (p, s) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); };
const copyDir = (a, b) => { if (!fs.existsSync(a)) return; fs.mkdirSync(b, { recursive: true }); for (const f of fs.readdirSync(a)) { const s = path.join(a, f), d = path.join(b, f); fs.statSync(s).isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d); } };
const trMonths = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
const fmtDate = (d) => { const [y, m, dd] = String(d).split('-').map(Number); return `${dd} ${trMonths[m - 1]} ${y}`; };
const noDash = (s) => String(s).replace(/\s?[—–]\s?/g, ', ');

/* ---------- content ---------- */
function load(dir, kind) {
  const d = path.join(ROOT, 'content', dir);
  if (!fs.existsSync(d)) return [];
  return fs.readdirSync(d).filter((f) => f.endsWith('.md') && !f.startsWith('_')).map((f) => {
    const { data, content } = matter(read(path.join(d, f)));
    const slug = data.slug || f.replace(/\.md$/, '');
    return {
      ...data, slug, kind,
      title: noDash(data.title), excerpt: noDash(data.excerpt || ''), hook: noDash(data.hook || data.title),
      year: Number(data.year) || 2026, yearLabel: String(data.yearLabel || data.year || ''),
      date: String(data.date || '2026-10-30'), readMin: Number(data.readMin) || Math.max(2, Math.round(content.split(/\s+/).length / 200)),
      sources: Array.isArray(data.sources) ? data.sources : [],
      cover: data.cover ? String(data.cover).replace(/\.jpg$/, '.webp') : '',
      body: content,
      url: kind === 'ai' ? `/yapay-zeka/${slug}/` : kind === 'news' ? `/haber/${slug}/` : `/yazi/${slug}/`,
      rank: Number(data.rank) || 9,
    };
  });
}
const posts = load('posts', 'post').sort((a, b) => a.year - b.year || a.title.localeCompare(b.title, 'tr'));
const AI_ORDER = ['skill-nedir', 'kendi-skillini-yaz', 'belge-skilleri-docx-xlsx-pptx-pdf', 'tasarim-ve-web-skilleri', 'gelistirici-skilleri-skill-creator-mcp-builder', 'pazarlama-video-icerik-skilleri', 'skill-guvenligi'];
const aiRank = (p) => { const i = AI_ORDER.indexOf(p.slug); return i < 0 ? 99 : i; };
const ai = load('ai', 'ai').sort((a, b) => aiRank(a) - aiRank(b) || a.title.localeCompare(b.title, 'tr'));
const hubFile = path.join(ROOT, 'content', 'ai', '_hub.md');
const hub = fs.existsSync(hubFile) ? matter(read(hubFile)) : { data: { title: 'Yapay Zekâ Skill Rehberi', excerpt: '' }, content: '' };
const news = load('haber', 'news').sort((a, b) => b.date.localeCompare(a.date) || a.rank - b.rank);
const todayNews = news.filter((n) => n.date === (news[0] && news[0].date)).slice(0, 2);
const all = [...posts, ...ai, ...news];
const newest = [...posts].sort((a, b) => b.date.localeCompare(a.date) || b.year - a.year);

/* ---------- markdown ---------- */
marked.use({
  renderer: {
    blockquote({ tokens }) {
      const inner = this.parser.parse(tokens);
      const isTip = /Biliyor muydun\?/i.test(inner);
      return isTip ? `<aside class="note-box" role="note"><span class="note-box__tag" aria-hidden="true">NOT</span>${inner.replace(/<strong>Biliyor muydun\?<\/strong>\s*/i, '<strong class="note-box__h">Biliyor muydun?</strong> ')}</aside>` : `<blockquote>${inner}</blockquote>`;
    },
    table(t) { return `<div class="tbl-wrap">${marked.Renderer.prototype.table.call(this, t)}</div>`; },
    link({ href, title, tokens }) { const text = this.parser.parseInline(tokens); const ext = /^https?:/.test(href); return `<a href="${esc(href)}"${title ? ` title="${esc(title)}"` : ''}${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>${text}</a>`; },
  },
});
const md = (s) => marked.parse(noDash(s));

/* ---------- languages: Google Translate proxy (45+ dil) ---------- */
const LANGS = [['en','English'],['de','Deutsch'],['fr','Français'],['es','Español'],['it','Italiano'],['pt','Português'],['nl','Nederlands'],['ru','Русский'],['uk','Українська'],['pl','Polski'],['cs','Čeština'],['sk','Slovenčina'],['ro','Română'],['hu','Magyar'],['bg','Български'],['el','Ελληνικά'],['sr','Српски'],['hr','Hrvatski'],['sl','Slovenščina'],['bs','Bosanski'],['sq','Shqip'],['mk','Македонски'],['sv','Svenska'],['no','Norsk'],['da','Dansk'],['fi','Suomi'],['et','Eesti'],['lv','Latviešu'],['lt','Lietuvių'],['is','Íslenska'],['ga','Gaeilge'],['az','Azərbaycanca'],['kk','Қазақша'],['uz',"O'zbekcha"],['ky','Кыргызча'],['tk','Türkmençe'],['ka','ქართული'],['hy','Հայերեն'],['ku','Kurdî'],['ar','العربية'],['fa','فارسی'],['ur','اردو'],['iw','עברית'],['hi','हिन्दी'],['bn','বাংলা'],['pa','ਪੰਜਾਬੀ'],['ta','தமிழ்'],['te','తెలుగు'],['mr','मराठी'],['gu','ગુજરાતી'],['ja','日本語'],['ko','한국어'],['zh-CN','简体中文'],['zh-TW','繁體中文'],['th','ไทย'],['vi','Tiếng Việt'],['id','Bahasa Indonesia'],['ms','Bahasa Melayu'],['tl','Filipino'],['sw','Kiswahili'],['af','Afrikaans'],['am','አማርኛ'],['ha','Hausa'],['yo','Yorùbá'],['zu','isiZulu']];
const TR_HOST = new URL(SITE).hostname.replace(/-/g, '--').replace(/\./g, '-') + '.translate.goog';
const trUrl = (url, l) => `https://${TR_HOST}${url}?_x_tr_sl=tr&_x_tr_tl=${l}&_x_tr_hl=${l}&_x_tr_pto=wapp`;
function langPicker(url) {
  return `<details class="lang notranslate" translate="no">
    <summary aria-label="Dil seçin (${LANGS.length + 1} dil)"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/></svg><span>TR</span></summary>
    <div class="lang__panel">
      <p class="lang__k">DİL · LANGUAGE · ${LANGS.length + 1}</p>
      <a class="lang__tr" href="${SITE}${url}" lang="tr" data-l="tr">Türkçe <small>orijinal</small></a>
      <ul class="lang__list">${LANGS.map(([c, n]) => `<li><a href="${esc(trUrl(url, c))}" lang="${c}" hreflang="${c}" data-l="${c}" rel="nofollow">${esc(n)}</a></li>`).join('')}</ul>
      <p class="lang__note">Çeviri: Google Translate. Özgün metin Türkçedir.</p>
    </div>
  </details>`;
}

/* ---------- shared bits ---------- */
const mark = `<img src="/img/brand/mark.png" width="36" height="40" alt="">`;
function sleeve(p, opts = {}) {
  const cls = `sleeve${p.cover ? ' sleeve--img' : ' sleeve--gen'}${opts.big ? ' sleeve--big' : ''}`;
  if (p.cover) return `<div class="${cls}"><img src="${esc(p.cover)}" width="720" height="1280" alt="${esc(p.title)}: @teknolojici15 video kapağı" ${opts.eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"><span class="sleeve__spine" aria-hidden="true">${esc(p.yearLabel)}</span></div>`;
  return `<div class="${cls}" data-cat="${esc(p.category)}"><span class="sleeve__in"><span class="sleeve__brand notranslate" translate="no" aria-hidden="true">${mark}<b>TEKNOLOJİCİ15</b></span><span class="sleeve__year" aria-hidden="true">${esc(p.yearLabel)}</span><span class="sleeve__fact">${esc(p.fact || '')}</span><span class="sleeve__hook">${esc(p.hook)}</span></span><span class="sleeve__stripe" aria-hidden="true"></span><span class="sleeve__spine" aria-hidden="true">${esc(p.yearLabel)}</span></div>`;
}
const label = (p) => `<p class="label"><span>${esc(p.yearLabel)}</span><span>${esc(p.category)}</span>${p.fact && !String(p.fact).includes(p.yearLabel) ? `<span>${esc(p.fact)}</span>` : ''}<span>${p.readMin} dk</span></p>`;

function head({ title, desc, url, image, type = 'website', jsonld = [], extra = '' }) {
  const canon = SITE + url;
  const img = image ? SITE + image : SITE + '/img/og.jpg';
  return `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canon}">
<meta name="theme-color" content="#0D0B20">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta property="og:type" content="${type}"><meta property="og:site_name" content="Teknolojici15"><meta property="og:locale" content="tr_TR">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${canon}"><meta property="og:image" content="${img}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${img}">
<link rel="icon" type="image/png" href="/img/brand/icon-192.png"><link rel="apple-touch-icon" href="/img/brand/icon-192.png">
<link rel="alternate" type="application/rss+xml" title="Teknolojici15" href="/feed.xml">
<link rel="preload" href="/fonts/archivo-wdth.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/sc/scrollcraft.css"><link rel="stylesheet" href="/css/site.css">
${jsonld.map((j) => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`).join('\n')}
${extra}
</head>`;
}
const ORG = { '@type': 'Organization', '@id': SITE + '/#org', name: 'Teknolojici15', url: SITE + '/', logo: SITE + '/img/brand/icon-512.png', sameAs: [IG] };

function chrome(active, url = '/') {
  const a = (k) => (active === k ? ' aria-current="page"' : '');
  return `<a class="skip" href="#icerik">İçeriğe geç</a>
<span data-sc-progress></span><div class="sc-grain" aria-hidden="true"></div><div class="scan" aria-hidden="true"></div>
<header class="bar">
  <a class="bar__mark notranslate" translate="no" href="/" aria-label="Teknolojici15 ana sayfa">${mark}<span>TEKNOLOJİCİ<b>15</b></span></a>
  <nav class="bar__nav" aria-label="Ana menü">
    <a href="/#raf"${a('raf')}>Bant rafı</a>
    <a class="bar__news" href="/haber/"${a('haber')}>Haberler</a>
    <a href="/yapay-zeka/"${a('ai')}>Yapay Zekâ</a>
    <a href="/#dizin"${a('dizin')}>Tüm yazılar</a>
    <a class="bar__ig" href="${IG}" target="_blank" rel="noopener noreferrer">Instagram</a>
    ${langPicker(url)}
  </nav>
</header>`;
}
// The VCR deck: the signature move. Year LED + reels + jump buttons.
function deck({ year = '2026', title = 'Teknolojici15', prev = null, next = null, mode = 'page' }) {
  const btn = (p, dir, glyph, lab) => p ? `<a class="deck__btn" href="${p.url}" data-deck="${dir}" aria-label="${lab}: ${esc(p.title)}">${glyph}</a>` : `<button class="deck__btn" type="button" data-deck="${dir}" aria-label="${lab}"${mode === 'page' ? ' disabled' : ''}>${glyph}</button>`;
  return `<div class="deck" data-mode="${mode}" role="region" aria-label="Bant sayacı">
  <span class="deck__reels" aria-hidden="true"><i></i><i></i></span>
  <span class="deck__led"><small>YIL</small><output class="deck__year" aria-live="polite">${esc(year)}</output></span>
  <span class="deck__title" aria-hidden="true"><span>${esc(title)}</span></span>
  <span class="deck__btns">${btn(prev, 'prev', '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 6 3 12l8 6zM21 6l-8 6 8 6z"/></svg>', 'Önceki bant')}${btn(next, 'next', '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13 6 8 6-8 6zM3 6l8 6-8 6z"/></svg>', 'Sonraki bant')}</span>
</div>`;
}
const foot = `<footer class="foot">
  <p class="foot__mark notranslate" translate="no">${mark}<span>TEKNOLOJİCİ<b>15</b></span></p>
  <p>Teknoloji tarihinin "bunu bilmiyordun" anları. Her yazı kaynaklarıyla.</p>
  <p class="foot__links"><a href="/">Ana sayfa</a><a href="/yapay-zeka/">Yapay Zekâ Skill Rehberi</a><a href="/#dizin">Tüm yazılar</a><a href="/feed.xml">RSS</a><a href="${IG}" target="_blank" rel="noopener noreferrer">@teknolojici15</a></p>
</footer>`;
const scripts = (home) => `<script src="/sc/scrollcraft.js" defer></script><script src="/js/site.js" defer></script>${home ? '' : ''}`;

/* ---------- the CRT: TEKNO-TEKST teletext, today's top 2 ---------- */
const shortMonths = ['OCA', 'ŞUB', 'MAR', 'NİS', 'MAY', 'HAZ', 'TEM', 'AĞU', 'EYL', 'EKİ', 'KAS', 'ARA'];
function tv() {
  const d = todayNews[0] ? todayNews[0].date : new Date().toISOString().slice(0, 10);
  const [, m, dd] = d.split('-').map(Number);
  const items = todayNews.length ? todayNews.map((n, i) => `<li><a href="${n.url}"><span class="tt__n" aria-hidden="true">${i + 1}</span><span class="tt__c">${esc(n.category === 'Haber' && n.tag ? n.tag : n.category)}</span><strong>${esc(n.title)}</strong>${n.fact ? `<span class="tt__f">${esc(n.fact)}${n.factLabel ? ` <small>${esc(n.factLabel)}</small>` : ''}</span>` : ''}</a></li>`).join('')
    : `<li class="tt__empty">Bugünün haberleri hazırlanıyor. Kanal 15'te kalın.</li>`;
  return `<section class="tv" aria-labelledby="tv-h" data-sc-in>
    <span class="tv__ears" aria-hidden="true"><i></i><i></i></span>
    <div class="tv__box">
      <div class="tv__screen">
        <div class="tt">
          <p class="tt__top" aria-hidden="true"><span>P100</span><b class="notranslate" translate="no">TEKNO-TEKST</b><span>${dd} ${shortMonths[m - 1]}</span><span class="tt__clock">--:--:--</span></p>
          <h2 id="tv-h" class="tt__h"><span>GÜNÜN 2 HABERİ</span><time datetime="${d}">${fmtDate(d)}</time></h2>
          <ol class="tt__list">${items}</ol>
          <nav class="tt__bar" aria-label="Teletekst sayfaları"><a class="r" href="/#raf">101 Raf</a><a class="g" href="/yapay-zeka/">200 YZ</a><a class="y" href="/haber/">300 Haber</a><a class="c" href="/#dizin">400 Dizin</a></nav>
        </div>
      </div>
      <div class="tv__side" aria-hidden="true"><i class="tv__knob"></i><i class="tv__knob tv__knob--s"></i><span class="tv__grille"></span><b>CH 15</b><span class="tv__led"></span></div>
    </div>
    <span class="tv__feet" aria-hidden="true"><i></i><i></i></span>
  </section>`;
}

/* ---------- home ---------- */
function home() {
  const hero = newest[0];
  const shelf = posts; // oldest → newest
  const cats = [...new Set(all.map((p) => p.category))];
  const desc = 'Teknolojici15: ilk e-postadan Bitcoin pizzasına teknoloji tarihinin şaşırtan anları, kaynaklarıyla. Bir de yapay zekâ skill rehberi.';
  const jsonld = [ORG, { '@type': 'WebSite', '@id': SITE + '/#site', url: SITE + '/', name: 'Teknolojici15', inLanguage: 'tr-TR', publisher: { '@id': SITE + '/#org' } },
    { '@type': 'Blog', '@id': SITE + '/#blog', url: SITE + '/', name: 'Teknolojici15', inLanguage: 'tr-TR', publisher: { '@id': SITE + '/#org' }, blogPost: all.slice(0, 40).map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: SITE + p.url, datePublished: p.date })) }]
    .map((j) => ({ '@context': 'https://schema.org', ...j }));
  return `${head({ title: 'Teknolojici15 · Teknoloji tarihini geri sar', desc, url: '/', image: null, jsonld })}
<body class="home">
${chrome('raf', '/')}
<main id="icerik">

  <!-- 1 · HERO: object one, already labelled. Layered planes. -->
  <section class="hero sc-section" data-sc-act="flow">
    <div class="hero__planes" aria-hidden="true">
      <span class="hero__far" data-sc-parallax="-1.2">${esc(hero.yearLabel)}</span>
      <span class="hero__grid" data-sc-parallax="-0.5"></span>
    </div>
    <div class="hero__copy sc-stack" data-sc-in data-sc-stagger="60">
      <h1 class="hero__h">Teknoloji tarihini <em>geri sar.</em></h1>
      <p class="hero__sub">@teknolojici15 videolarındaki hikâyelerin kaynaklı, uzun hâli. En yeni bantla başla.</p>
    </div>
    ${tv()}
    <a class="hero__tape" href="${hero.url}">
      <span class="hero__obj"><span class="hero__sleeve" data-sc-parallax="-0.35">${sleeve(hero, { eager: true, big: true })}</span>
      <span class="hero__cassette" data-sc-parallax="0.7" aria-hidden="true"><i></i><i></i><b>${esc(hero.yearLabel)} · ${esc(hero.fact || '')}</b></span></span>
      <span class="hero__label">${label(hero)}<strong>${esc(hero.title)}</strong></span>
    </a>
  </section>

  <!-- 2 · SHELF: pan, the peak. The deck counter rolls through the years here. -->
  <section id="raf" class="shelf" data-sc-act="pan" data-sc-span="${Math.max(5, Math.round(shelf.length * 0.36))}" data-sc-drift="#0D0B20">
    <div data-sc-stage>
      <div class="rail" data-sc-pan="0.04">
        <div class="rail__lead">
          <h2 class="rail__h">Bant rafı</h2>
          <p>Her video bir bant. En eskisinden en yenisine, ${shelf.length} hikâye. Sayaç hangi yılda olduğunu söyler.</p>
        </div>
        ${shelf.map((p) => `<article class="tape" data-year="${esc(p.yearLabel)}" data-title="${esc(p.title)}" data-url="${p.url}">
          <a href="${p.url}" class="tape__link"><span class="tape__tilt" data-sc-tilt="6">${sleeve(p)}</span>
          <span class="tape__meta">${label(p)}<span class="tape__t">${esc(p.title)}</span></span></a>
        </article>`).join('\n')}
        <div class="rail__end"><p>Raf burada bitmiyor. Her gün üç yeni video, her hafta yeni yazılar.</p><a href="${IG}" target="_blank" rel="noopener noreferrer">@teknolojici15'i takip et</a></div>
      </div>
    </div>
  </section>

  <!-- 3 · AI MANUAL: hard cut to a paper manual page. -->
  <section id="yapay-zeka" class="manual sc-section" data-sc-act="flow">
    <div class="manual__sheet" data-sc-reveal="up" data-sc-reveal-at="0 0.35">
      <header class="manual__head">
        <p class="manual__kicker">KULLANIM KILAVUZU · CİLT 1</p>
        <h2 class="manual__h">${esc(hub.data.title || 'Yapay Zekâ Skill Rehberi')}</h2>
        <div class="manual__intro">${md(hub.content || hub.data.excerpt || '')}</div>
      </header>
      <ol class="toc">
        ${ai.map((p, i) => `<li><a href="${p.url}"><span class="toc__n">${String(i + 1).padStart(2, '0')}</span><span class="toc__t">${esc(p.title)}<small>${esc(p.excerpt)}</small></span><span class="toc__d" aria-hidden="true"></span><span class="toc__p">${p.readMin} dk</span></a></li>`).join('\n')}
      </ol>
      <p class="manual__more"><a href="/yapay-zeka/">Kılavuzun tamamını aç</a></p>
    </div>
  </section>

  <!-- 4 · DIRECTORY: every post, as a DIR listing. -->
  <section id="dizin" class="dir sc-section" data-sc-act="flow">
    <div class="sc-wrap">
      <div class="dir__head" data-sc-in><h2 class="dir__h">Tüm yazılar</h2><p class="dir__cmd" aria-hidden="true">C:\\TEKNO15&gt; DIR /YIL</p></div>
      <div class="dir__filters" role="group" aria-label="Kategoriye göre süz">
        <button type="button" class="chip" aria-pressed="true" data-filter="*">Hepsi <span>${all.length}</span></button>
        ${cats.map((c) => `<button type="button" class="chip" aria-pressed="false" data-filter="${esc(c)}">${esc(c)} <span>${all.filter((p) => p.category === c).length}</span></button>`).join('')}
      </div>
      <ul class="dir__list">
        ${[...news, ...posts, ...ai].map((p) => `<li data-cat="${esc(p.category)}"><a href="${p.url}"><span class="dir__y">${esc(p.yearLabel)}</span><span class="dir__t">${esc(p.title)}</span><span class="dir__c">${esc(p.category)}</span><span class="dir__m">${p.readMin} DK</span></a></li>`).join('\n')}
      </ul>
    </div>
  </section>

  <!-- 5 · CLOSE: a rental card, typeset like a label. -->
  <section class="close sc-section" data-sc-act="flow">
    <div class="card" data-sc-in data-sc-stagger="50">
      <p class="card__k">KİRALAMA KARTI · TEKNOLOJİCİ15 VİDEO KULÜBÜ</p>
      <p class="card__row"><span>Bant</span><span>Teknoloji tarihi, her gün 3 bölüm</span></p>
      <p class="card__row"><span>Yayın</span><span>11:00 · 16:00 · 21:00</span></p>
      <p class="card__row"><span>Sıradaki izleyici</span><span class="card__you">sen</span></p>
      <p class="card__cta">Yeni bantlar Instagram'da önce çıkar. <a href="${IG}" target="_blank" rel="noopener noreferrer">@teknolojici15'i takip et</a>.</p>
    </div>
    ${foot}
  </section>
</main>
${deck({ year: hero.yearLabel, title: hero.title, mode: 'home' })}
${scripts(true)}
</body></html>`;
}

/* ---------- article ---------- */
function article(p, list) {
  const i = list.indexOf(p), prev = list[i - 1] || null, next = list[i + 1] || null;
  const related = list.filter((x) => x !== p && x.category === p.category).slice(0, 3);
  const more = related.length ? related : list.filter((x) => x !== p).slice(-3);
  const isAI = p.kind === 'ai', isNews = p.kind === 'news';
  const crumbs = isNews ? [['Ana sayfa', '/'], ['Haberler', '/haber/'], [p.title, p.url]] : isAI ? [['Ana sayfa', '/'], ['Yapay Zekâ', '/yapay-zeka/'], [p.title, p.url]] : [['Ana sayfa', '/'], ['Yazılar', '/#dizin'], [p.title, p.url]];
  const jsonld = [
    { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: p.title, description: p.excerpt, datePublished: p.date, dateModified: p.date, inLanguage: 'tr-TR', mainEntityOfPage: SITE + p.url, image: p.cover ? SITE + p.cover : SITE + '/img/og.jpg', author: { '@id': SITE + '/#org' }, publisher: ORG, articleSection: p.category, citation: p.sources.map((s) => ({ '@type': 'CreativeWork', name: s.title, url: s.url })), ...(p.year < 2026 ? { about: { '@type': 'Thing', name: p.title, temporalCoverage: p.yearLabel } } : {}) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs.map(([n, u], k) => ({ '@type': 'ListItem', position: k + 1, name: n, item: SITE + u })) },
  ];
  return `${head({ title: `${p.title} · Teknolojici15`, desc: p.excerpt, url: p.url, image: p.cover || null, type: 'article', jsonld, extra: `<meta property="article:published_time" content="${p.date}"><meta property="article:section" content="${esc(p.category)}">` })}
<body class="post${isAI ? ' post--manual' : ''}${isNews ? ' post--news' : ''}">
${chrome(isAI ? 'ai' : isNews ? 'haber' : 'dizin', p.url)}
<main id="icerik" class="post__wrap">
  <nav class="crumbs" aria-label="Konum">${crumbs.map(([n, u], k) => k < crumbs.length - 1 ? `<a href="${u}">${esc(n)}</a>` : `<span aria-current="page">${esc(n)}</span>`).join('<span aria-hidden="true">/</span>')}</nav>
  <header class="post__head" data-sc-in data-sc-stagger="50">
    ${label(p)}
    <h1 class="post__h">${esc(p.title)}</h1>
    <p class="post__lede">${esc(p.excerpt)}</p>
    <p class="post__meta"><time datetime="${p.date}">${fmtDate(p.date)}</time>${p.video ? ` · <a href="${IG}" target="_blank" rel="noopener noreferrer">Videosu Instagram'da</a>` : ''}</p>
  </header>
  <div class="post__grid">
    <aside class="post__side">
      ${isAI ? `${p.cover ? sleeve(p, { eager: true }) : ''}<div class="spec"><span class="spec__k">BÖLÜM</span><span class="spec__v">${String(list.indexOf(p) + 1).padStart(2, '0')}</span>${p.fact ? `<span class="spec__k">ANAHTAR</span><span class="spec__v spec__v--sm">${esc(p.fact)}</span>` : ''}</div>` : `${sleeve(p, { eager: true })}${p.fact ? `<p class="bigfact"><span>${esc(p.fact)}</span><small>${esc(p.factLabel || '')}</small></p>` : ''}`}
    </aside>
    <article class="prose">
      ${md(p.body)}
      ${p.sources.length ? `<section class="sources" aria-labelledby="kaynak-h"><h2 id="kaynak-h">Kaynaklar</h2><ol>${p.sources.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}</a></li>`).join('')}</ol></section>` : ''}
    </article>
  </div>
  <nav class="pager" aria-label="${isAI ? 'Kılavuzda gezin' : isNews ? 'Haberlerde gezin' : 'Zaman çizelgesinde gezin'}">
    ${prev ? `<a class="pager__a" href="${prev.url}" rel="prev"><small>${isAI ? 'Önceki bölüm' : isNews ? 'Daha yeni haber' : `⏪ ${esc(prev.yearLabel)}`}</small><span>${esc(prev.title)}</span></a>` : '<span></span>'}
    ${next ? `<a class="pager__a pager__a--next" href="${next.url}" rel="next"><small>${isAI ? 'Sonraki bölüm' : isNews ? 'Önceki haber' : `${esc(next.yearLabel)} ⏩`}</small><span>${esc(next.title)}</span></a>` : '<span></span>'}
  </nav>
  <section class="more" aria-labelledby="more-h">
    <h2 id="more-h" class="more__h">${isAI ? 'Kılavuzdan' : isNews ? 'Diğer haberler' : 'Aynı raftan'}</h2>
    <ul class="more__list">${more.map((x) => `<li><a href="${x.url}">${label(x)}<span>${esc(x.title)}</span></a></li>`).join('')}</ul>
  </section>
</main>
${foot}
${deck({ year: p.yearLabel, title: p.title, prev, next, mode: 'page' })}
${scripts(false)}
</body></html>`;
}

/* ---------- AI hub ---------- */
function aiHub() {
  const jsonld = [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: hub.data.title, url: SITE + '/yapay-zeka/', inLanguage: 'tr-TR', hasPart: ai.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: SITE + p.url })) }];
  return `${head({ title: `${hub.data.title || 'Yapay Zekâ Skill Rehberi'} · Teknolojici15`, desc: hub.data.excerpt || 'Yapay zekâ skill rehberi.', url: '/yapay-zeka/', jsonld })}
<body class="post post--manual hubpage">
${chrome('ai', '/yapay-zeka/')}
<main id="icerik" class="post__wrap">
  <nav class="crumbs" aria-label="Konum"><a href="/">Ana sayfa</a><span aria-hidden="true">/</span><span aria-current="page">Yapay Zekâ</span></nav>
  <header class="post__head" data-sc-in data-sc-stagger="50">
    <p class="label"><span>KULLANIM KILAVUZU</span><span>CİLT 1</span><span>${ai.length} bölüm</span></p>
    <h1 class="post__h">${esc(hub.data.title || 'Yapay Zekâ Skill Rehberi')}</h1>
    <div class="post__lede">${md(hub.content || hub.data.excerpt || '')}</div>
  </header>
  <ol class="toc toc--page">
    ${ai.map((p, i) => `<li><a href="${p.url}"><span class="toc__n">${String(i + 1).padStart(2, '0')}</span><span class="toc__t">${esc(p.title)}<small>${esc(p.excerpt)}</small></span><span class="toc__d" aria-hidden="true"></span><span class="toc__p">${p.readMin} dk</span></a></li>`).join('\n')}
  </ol>
</main>
${foot}
${deck({ year: '2026', title: 'Yapay Zekâ Skill Rehberi', mode: 'page' })}
${scripts(false)}
</body></html>`;
}

function newsIndex() {
  const byDay = {};
  for (const n of news) (byDay[n.date] ||= []).push(n);
  const jsonld = [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Haberler · Teknolojici15', url: SITE + '/haber/', inLanguage: 'tr-TR', hasPart: news.slice(0, 30).map((p) => ({ '@type': 'NewsArticle', headline: p.title, url: SITE + p.url, datePublished: p.date })) }];
  return `${head({ title: 'Günün teknoloji haberleri · Teknolojici15', desc: 'Her gün teknoloji ve yapay zekâ dünyasından en önemli 2 haber, kaynaklarıyla.', url: '/haber/', jsonld })}
<body class="post newspage">
${chrome('haber', '/haber/')}
<main id="icerik" class="post__wrap">
  <nav class="crumbs" aria-label="Konum"><a href="/">Ana sayfa</a><span aria-hidden="true">/</span><span aria-current="page">Haberler</span></nav>
  <header class="post__head" data-sc-in data-sc-stagger="50">
    <p class="label"><span>TEKNO-TEKST</span><span>SAYFA 300</span><span>${news.length} haber</span></p>
    <h1 class="post__h">Günün 2 haberi</h1>
    <p class="post__lede">Her gün teknoloji ve yapay zekâ dünyasından en önemli iki gelişme. Kısa, kaynaklı, abartısız.</p>
  </header>
  ${Object.keys(byDay).length ? Object.entries(byDay).map(([d, list]) => `<section class="nday" aria-label="${fmtDate(d)}"><h2 class="nday__h"><time datetime="${d}">${fmtDate(d)}</time></h2><ol class="nday__list">${list.map((n, i) => `<li><a href="${n.url}">${n.cover ? `<img src="${esc(n.cover)}" width="720" height="1280" alt="" loading="lazy" decoding="async">` : ''}<span class="nday__n">${i + 1}</span><span class="nday__t"><strong>${esc(n.title)}</strong><small>${esc(n.excerpt)}</small></span></a></li>`).join('')}</ol></section>`).join('') : '<p class="post__lede">İlk haberler çok yakında.</p>'}
</main>
${foot}
${deck({ year: '2026', title: 'Günün haberleri', mode: 'page' })}
${scripts(false)}
</body></html>`;
}

function notFound() {
  return `${head({ title: 'Bant bulunamadı · Teknolojici15', desc: 'Bu sayfa yok.', url: '/404' })}
<body class="post">${chrome('', '/')}<main id="icerik" class="post__wrap nf"><p class="label"><span>HATA 404</span><span>BANT YOK</span></p><h1 class="post__h">Bu bant rafta yok.</h1><p class="post__lede">Belki başka bir yıla sarıldı. <a href="/">Ana sayfadaki rafa dön</a> ya da <a href="/#dizin">tüm yazılara bak</a>.</p></main>${foot}${deck({ year: '404', title: 'Bant bulunamadı' })}${scripts(false)}</body></html>`;
}

/* ---------- build ---------- */
fs.rmSync(OUT, { recursive: true, force: true });
copyDir(path.join(ROOT, 'public'), OUT);
copyDir(ENGINE, path.join(OUT, 'sc'));
const fontsrc = path.join(ROOT, 'node_modules');
fs.mkdirSync(path.join(OUT, 'fonts'), { recursive: true });
for (const [s, d] of [['@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2', 'archivo-wdth.woff2'], ['@fontsource-variable/archivo/files/archivo-latin-ext-wdth-normal.woff2', 'archivo-wdth-ext.woff2'], ['@fontsource-variable/archivo/files/archivo-latin-wdth-italic.woff2', 'archivo-wdth-italic.woff2'], ['@fontsource-variable/archivo/files/archivo-latin-ext-wdth-italic.woff2', 'archivo-wdth-italic-ext.woff2'], ['@fontsource/vt323/files/vt323-latin-400-normal.woff2', 'vt323.woff2'], ['@fontsource/vt323/files/vt323-latin-ext-400-normal.woff2', 'vt323-ext.woff2']]) fs.copyFileSync(path.join(fontsrc, s), path.join(OUT, 'fonts', d));

if (!posts.length) throw new Error('no posts');
write(path.join(OUT, 'index.html'), home());
for (const p of posts) write(path.join(OUT, 'yazi', p.slug, 'index.html'), article(p, posts));
for (const p of ai) write(path.join(OUT, 'yapay-zeka', p.slug, 'index.html'), article(p, ai));
for (const p of news) write(path.join(OUT, 'haber', p.slug, 'index.html'), article(p, news));
write(path.join(OUT, 'haber', 'index.html'), newsIndex());
write(path.join(OUT, 'yapay-zeka', 'index.html'), aiHub());
write(path.join(OUT, '404.html'), notFound());

const today = new Date().toISOString().slice(0, 10);
write(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[['/', today, '1.0'], ['/haber/', today, '0.9'], ['/yapay-zeka/', today, '0.9'], ...all.map((p) => [p.url, p.date, '0.8'])].map(([u, d, pr]) => `  <url><loc>${SITE}${u}</loc><lastmod>${d}</lastmod><priority>${pr}</priority></url>`).join('\n')}\n</urlset>\n`);
write(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\n# Yapay zekâ tarayıcılarına açık\nUser-agent: GPTBot\nAllow: /\nUser-agent: OAI-SearchBot\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: Claude-SearchBot\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
write(path.join(OUT, 'llms.txt'), `# Teknolojici15\n\n> Türkçe teknoloji tarihi blogu. Instagram'daki @teknolojici15 videolarının kaynaklı, uzun yazıları ve bir yapay zekâ skill rehberi.\n\n- Instagram: ${IG}\n- Her yazının sonunda kaynak listesi vardır; rakamlar ve tarihler kaynaklarla doğrulanır.\n\n## Teknoloji tarihi yazıları\n${posts.map((p) => `- [${p.title}](${SITE}${p.url}) (${p.yearLabel}): ${p.excerpt}`).join('\n')}\n\n## Günün haberleri\n${news.map((p) => `- [${p.title}](${SITE}${p.url}) (${p.date}): ${p.excerpt}`).join('\n')}\n\n## Yapay Zekâ Skill Rehberi\n${ai.map((p) => `- [${p.title}](${SITE}${p.url}): ${p.excerpt}`).join('\n')}\n`);
const rssDate = (d) => new Date(d + 'T09:00:00+03:00').toUTCString();
write(path.join(OUT, 'feed.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>Teknolojici15</title><link>${SITE}/</link><description>Teknoloji tarihinin şaşırtan anları, kaynaklarıyla.</description><language>tr</language>\n${[...all].sort((a, b) => b.date.localeCompare(a.date)).map((p) => `<item><title>${esc(p.title)}</title><link>${SITE}${p.url}</link><guid>${SITE}${p.url}</guid><pubDate>${rssDate(p.date)}</pubDate><description>${esc(p.excerpt)}</description></item>`).join('\n')}\n</channel></rss>\n`);
console.log(`built: ${posts.length} posts, ${ai.length} ai, ${news.length} news, → ${OUT}`);
