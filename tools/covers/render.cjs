// node tools/covers/render.js <slug> [<slug>...]  → public/img/kapak/gen-<slug>.webp (720x1280)
const { chromium } = require('playwright'); const path = require('path'); const { execSync } = require('child_process');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  for (const slug of process.argv.slice(2)) {
    const src = path.join(__dirname, 'src', slug + '.html'); const png = `/tmp/cover-${slug}.png`;
    const errs = []; p.removeAllListeners('console'); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await p.goto('file://' + src); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(250);
    await p.screenshot({ path: png });
    const out = path.join(__dirname, '../../public/img/kapak/gen-' + slug + '.webp');
    execSync(`python3 -c "from PIL import Image; im=Image.open('${png}').convert('RGB'); im=im.resize((720,1280), Image.LANCZOS); im.save('${out}','WEBP',quality=82,method=6)"`);
    console.log('ok', slug, errs.length ? errs : '');
  }
  await b.close();
})();
