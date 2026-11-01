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
/* ---------- Google Analytics 4 + AdSense (site.config.json; empty = feature off, nothing is loaded) ---------- */
const CFG = fs.existsSync(path.join(ROOT, 'site.config.json')) ? JSON.parse(fs.readFileSync(path.join(ROOT, 'site.config.json'), 'utf8')) : {};
const GA4 = String(process.env.GA4_ID ?? CFG.ga4 ?? '').trim();
const ADS = String(process.env.ADSENSE_CLIENT ?? CFG.adsenseClient ?? '').trim();
const SLOTS = CFG.adSlots || {};
if (GA4 && !/^G-[A-Z0-9]{4,}$/.test(GA4)) throw new Error('site.config.json ga4 must look like G-XXXXXXXXXX');
if (ADS && !/^ca-pub-\d{10,20}$/.test(ADS)) throw new Error('site.config.json adsenseClient must look like ca-pub-1234567890123456');
for (const [k, v] of Object.entries(SLOTS)) if (v && !/^\d{6,12}$/.test(String(v))) throw new Error(`adSlots.${k} must be the numeric data-ad-slot`);
const GOOGLE = !!(GA4 || ADS);

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const read = (p) => fs.readFileSync(p, 'utf8');
const write = (p, s) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); };
const copyDir = (a, b) => { if (!fs.existsSync(a)) return; fs.mkdirSync(b, { recursive: true }); for (const f of fs.readdirSync(a)) { const s = path.join(a, f), d = path.join(b, f); fs.statSync(s).isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d); } };
const trMonths = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
const noDash = (s) => String(s).replace(/\s?[—–]\s?/g, ', ');

/* ---------- locales ---------- */
// Active languages (others keep their translations in i18n/ but are not built; old URLs redirect to /en/ in vercel.json)
const ACTIVE = ['tr', 'en', 'de', 'fr', 'it', 'nl', 'sv', 'ar', 'ja'];
const LOCALES = [
  ['tr', 'Türkçe', 'tr-TR'], ['en', 'English', 'en'], ['de', 'Deutsch', 'de-DE'], ['fr', 'Français', 'fr-FR'], ['es', 'Español', 'es-ES'], ['it', 'Italiano', 'it-IT'], ['pt', 'Português', 'pt-BR'], ['nl', 'Nederlands', 'nl-NL'], ['ru', 'Русский', 'ru-RU'], ['uk', 'Українська', 'uk-UA'], ['pl', 'Polski', 'pl-PL'],
  ['cs', 'Čeština', 'cs-CZ'], ['sk', 'Slovenčina', 'sk-SK'], ['ro', 'Română', 'ro-RO'], ['hu', 'Magyar', 'hu-HU'], ['bg', 'Български', 'bg-BG'], ['el', 'Ελληνικά', 'el-GR'], ['sr', 'Српски', 'sr-RS'], ['hr', 'Hrvatski', 'hr-HR'], ['sv', 'Svenska', 'sv-SE'], ['no', 'Norsk', 'nb-NO'],
  ['da', 'Dansk', 'da-DK'], ['fi', 'Suomi', 'fi-FI'], ['et', 'Eesti', 'et-EE'], ['lt', 'Lietuvių', 'lt-LT'], ['az', 'Azərbaycanca', 'az-AZ'], ['kk', 'Қазақша', 'kk-KZ'], ['uz', "O'zbekcha", 'uz-UZ'], ['ka', 'ქართული', 'ka-GE'], ['ar', 'العربية', 'ar'], ['fa', 'فارسی', 'fa-IR'],
  ['ur', 'اردو', 'ur-PK'], ['he', 'עברית', 'he-IL'], ['hi', 'हिन्दी', 'hi-IN'], ['bn', 'বাংলা', 'bn-BD'], ['ta', 'தமிழ்', 'ta-IN'], ['ja', '日本語', 'ja-JP'], ['ko', '한국어', 'ko-KR'], ['zh-cn', '简体中文', 'zh-CN'], ['zh-tw', '繁體中文', 'zh-TW'], ['th', 'ไทย', 'th-TH'],
  ['vi', 'Tiếng Việt', 'vi-VN'], ['id', 'Bahasa Indonesia', 'id-ID'], ['ms', 'Bahasa Melayu', 'ms-MY'], ['tl', 'Filipino', 'fil-PH'], ['sw', 'Kiswahili', 'sw-KE'],
].filter(([code]) => ACTIVE.includes(code)).map(([code, name, tag]) => ({ code, name, tag, prefix: code === 'tr' ? '' : '/' + code, rtl: ['ar', 'fa', 'ur', 'he'].includes(code) }));
const ONLY = process.env.LOCALES ? process.env.LOCALES.split(',') : null; // e.g. LOCALES=tr,en for a quick build
const UI_TR = JSON.parse(read(path.join(ROOT, 'i18n', 'ui.tr.json')));
let L = LOCALES[0], T = UI_TR;
const u = (p) => L.prefix + p; // localise an internal path
const fmtDate = (d) => { if (L.code === 'tr') { const [y, m, dd] = String(d).split('-').map(Number); return `${dd} ${trMonths[m - 1]} ${y}`; } try { return new Intl.DateTimeFormat(L.tag, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(d + 'T12:00:00Z')); } catch { return d; } };
const tpl = (s, o) => String(s).replace(/\{(\w+)\}/g, (_, k) => o[k] ?? '');

/* ---------- content ---------- */
const DIRS = { post: 'posts', ai: 'ai', news: 'haber' };
const BASE = { post: '/yazi/', ai: '/yapay-zeka/', news: '/haber/' };
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
      path: BASE[kind] + slug + '/',
      rank: Number(data.rank) || 9,
      translated: true,
    };
  });
}
const SRC = { post: load('posts', 'post'), ai: load('ai', 'ai'), news: load('haber', 'news') };
const AI_ORDER = ['skill-nedir', 'kendi-skillini-yaz', 'belge-skilleri-docx-xlsx-pptx-pdf', 'tasarim-ve-web-skilleri', 'gelistirici-skilleri-skill-creator-mcp-builder', 'pazarlama-video-icerik-skilleri', 'skill-guvenligi'];
const aiRank = (p) => { const i = AI_ORDER.indexOf(p.slug); return i < 0 ? 99 : i; };
const hubFile = path.join(ROOT, 'content', 'ai', '_hub.md');
const HUB_TR = fs.existsSync(hubFile) ? matter(read(hubFile)) : { data: { title: 'Yapay Zekâ Skill Rehberi', excerpt: '' }, content: '' };
/* ---------- share links ----------
   Plain links only: no third-party scripts, widgets, pixels or cookies, so nothing is sent to a network
   until the reader clicks (no consent banner needed under GDPR/ePrivacy/KVKK). Networks per locale avoid
   services that are banned or legally restricted there (e.g. Meta in Russia, VK in Ukraine, blocked
   Western networks in mainland China). */
const SHARE_NET = {
  wa: ['WhatsApp', (u, t) => `https://wa.me/?text=${encodeURIComponent(t + ' ' + u)}`],
  x: ['X', (u, t) => `https://x.com/intent/post?url=${encodeURIComponent(u)}&text=${encodeURIComponent(t)}`],
  fb: ['Facebook', (u) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(u)}`],
  li: ['LinkedIn', (u) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(u)}`],
  tg: ['Telegram', (u, t) => `https://t.me/share/url?url=${encodeURIComponent(u)}&text=${encodeURIComponent(t)}`],
  vk: ['VK', (u, t) => `https://vk.com/share.php?url=${encodeURIComponent(u)}&title=${encodeURIComponent(t)}`],
  line: ['LINE', (u) => `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(u)}`],
  weibo: ['微博', (u, t) => `https://service.weibo.com/share/share.php?url=${encodeURIComponent(u)}&title=${encodeURIComponent(t)}`],
  naver: ['NAVER', (u, t) => `https://share.naver.com/web/shareView?url=${encodeURIComponent(u)}&title=${encodeURIComponent(t)}`],
  mail: ['E-mail', (u, t) => `mailto:?subject=${encodeURIComponent(t)}&body=${encodeURIComponent(u)}`],
};
const SHARE_BY = {
  default: ['wa', 'x', 'fb', 'li', 'tg', 'mail'],
  ru: ['tg', 'vk', 'wa', 'mail'], kk: ['wa', 'tg', 'vk', 'fb', 'mail'], uz: ['tg', 'wa', 'fb', 'mail'],
  uk: ['tg', 'wa', 'fb', 'x', 'li', 'mail'], fa: ['tg', 'wa', 'x', 'mail'],
  'zh-cn': ['weibo', 'mail'], 'zh-tw': ['line', 'fb', 'x', 'mail'], ja: ['x', 'line', 'fb', 'mail'], th: ['line', 'fb', 'x', 'mail'],
  ko: ['naver', 'x', 'fb', 'mail'], vi: ['fb', 'x', 'tg', 'mail'],
};
function shareBlock(p) {
  const url = SITE + p.url, t = p.title;
  const nets = SHARE_BY[L.code] || SHARE_BY.default;
  return `<section class="share" aria-labelledby="share-h"><h2 id="share-h">${esc(T.shareH)}</h2><ul class="share__list">${nets.map((k) => `<li><a class="share__a share__a--${k}" href="${esc(SHARE_NET[k][1](url, t))}" ${k === 'mail' ? '' : 'target="_blank" '}rel="noopener noreferrer nofollow">${esc(SHARE_NET[k][0])}</a></li>`).join('')}<li><button type="button" class="share__a share__copy" data-url="${esc(url)}" data-done="${esc(T.shareCopied)}">${esc(T.shareCopy)}</button></li><li hidden class="share__nat"><button type="button" class="share__a" data-url="${esc(url)}" data-title="${esc(t)}">${esc(T.shareMore)}</button></li></ul></section>`;
}
const TFIELDS = ['title', 'excerpt', 'hook', 'fact', 'factLabel', 'category'];
// A translation lives in i18n/<code>/<posts|ai|haber>/<slug>.md and overrides only text fields + body.
function tr(p) {
  const out = { ...p, url: u(p.path), translated: L.code === 'tr' };
  if (L.code === 'tr') return out;
  const f = path.join(ROOT, 'i18n', L.code, DIRS[p.kind], p.slug + '.md');
  if (!fs.existsSync(f)) return out;
  const { data, content } = matter(read(f));
  for (const k of TFIELDS) if (data[k] != null && String(data[k]).trim()) out[k] = noDash(String(data[k]));
  if (content.trim()) { out.body = content; out.readMin = p.readMin; }
  out.translated = true;
  if (p.cover) { const lc = p.cover.replace('/img/kapak/', `/img/kapak/${L.code}/`); if (fs.existsSync(path.join(ROOT, 'public', lc))) out.cover = lc; }
  return out;
}
let posts, ai, news, todayNews, all, newest, hub;
function setLocale(loc) {
  L = loc;
  const uf = path.join(ROOT, 'i18n', L.code, 'ui.json');
  T = L.code === 'tr' ? UI_TR : { ...UI_TR, ...(fs.existsSync(uf) ? JSON.parse(read(uf)) : {}) };
  posts = SRC.post.map(tr).sort((a, b) => a.year - b.year || a.slug.localeCompare(b.slug));
  ai = SRC.ai.map(tr).sort((a, b) => aiRank(a) - aiRank(b) || a.slug.localeCompare(b.slug));
  news = SRC.news.map(tr).sort((a, b) => b.date.localeCompare(a.date) || a.rank - b.rank);
  todayNews = news.filter((n) => n.date === (news[0] && news[0].date)).slice(0, 2);
  all = [...posts, ...ai, ...news];
  newest = [...posts].sort((a, b) => b.date.localeCompare(a.date) || b.year - a.year);
  hub = HUB_TR;
  const hf = path.join(ROOT, 'i18n', L.code, 'ai', '_hub.md');
  if (L.code !== 'tr' && fs.existsSync(hf)) { const h = matter(read(hf)); hub = { data: { ...HUB_TR.data, ...h.data }, content: h.content.trim() ? h.content : HUB_TR.content }; }
}
const hasTranslation = (loc, p) => loc.code === 'tr' || fs.existsSync(path.join(ROOT, 'i18n', loc.code, DIRS[p.kind], p.slug + '.md'));
// a language is published once its UI and every post + AI chapter are translated (news may lag a day)
const READY = {};
const hasUI = (loc) => {
  if (loc.code === 'tr') return true;
  if (loc.code in READY) return READY[loc.code];
  const base = path.join(ROOT, 'i18n', loc.code);
  const n = (d) => fs.existsSync(path.join(base, d)) ? fs.readdirSync(path.join(base, d)).filter((f) => f.endsWith('.md') && !f.startsWith('_')).length : 0;
  return (READY[loc.code] = fs.existsSync(path.join(base, 'ui.json')) && n('posts') >= SRC.post.length && n('ai') >= SRC.ai.length);
};

/* ---------- markdown ---------- */
marked.use({
  renderer: {
    blockquote({ tokens }) {
      const inner = this.parser.parse(tokens);
      const m = /^\s*<p><strong>([^<]{2,60}[?？؟;])<\/strong>\s*/.exec(inner);
      return m ? `<aside class="note-box" role="note"><span class="note-box__tag" aria-hidden="true">${esc(T.note)}</span>${inner.replace(m[0], `<p><strong class="note-box__h">${m[1]}</strong> `)}</aside>` : `<blockquote>${inner}</blockquote>`;
    },
    table(t) { return `<div class="tbl-wrap">${marked.Renderer.prototype.table.call(this, t)}</div>`; },
    link({ href, title, tokens }) { const text = this.parser.parseInline(tokens); const ext = /^https?:/.test(href); if (!ext && href.startsWith('/') && !href.startsWith('//')) href = u(href); return `<a href="${esc(href)}"${title ? ` title="${esc(title)}"` : ''}${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>${text}</a>`; },
  },
});
const md = (s) => marked.parse(noDash(s));

/* ---------- language picker: every language is built into the site ---------- */
function langPicker(p) {
  // p: the page's base (Turkish) path, or a content item; links go to the same page in each language
  const pathOf = typeof p === 'string' ? p : p.path;
  const ok = (loc) => typeof p === 'string' ? hasUI(loc) : hasTranslation(loc, p);
  const langs = LOCALES.filter((loc) => (!ONLY || ONLY.includes(loc.code)) && hasUI(loc));
  return `<details class="lang notranslate" translate="no">
    <summary aria-label="${esc(T.langAria)} (${langs.length})"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/></svg><span>${esc(L.code.toUpperCase().replace('ZH-', 'ZH·'))}</span></summary>
    <div class="lang__panel">
      <p class="lang__k">${esc(T.langHead)} · ${langs.length}</p>
      <ul class="lang__list">${langs.map((loc) => `<li><a href="${loc.prefix}${pathOf}" lang="${loc.tag}" hreflang="${loc.tag}" data-l="${loc.code}"${loc.code === L.code ? ' aria-current="true" class="is-current"' : ''}${ok(loc) ? '' : ' class="is-pending"'}>${esc(loc.name)}${loc.code === 'tr' ? ` <small>${esc(T.original)}</small>` : ''}</a></li>`).join('')}</ul>
      <p class="lang__note">${esc(T.langNote)}</p>
    </div>
  </details>`;
}

/* ---------- shared bits ---------- */
const mark = `<img src="/img/brand/mark.png" width="36" height="40" alt="">`;
function sleeve(p, opts = {}) {
  const cls = `sleeve${p.cover ? ' sleeve--img' : ' sleeve--gen'}${opts.big ? ' sleeve--big' : ''}`;
  if (p.cover) return `<div class="${cls}"><img src="${esc(p.cover)}" width="720" height="1280" alt="${esc(p.title)}: ${esc(T.coverAlt)}" ${opts.eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"><span class="sleeve__spine" aria-hidden="true">${esc(p.yearLabel)}</span></div>`;
  return `<div class="${cls}" data-cat="${esc(p.category)}"><span class="sleeve__in"><span class="sleeve__brand notranslate" translate="no" aria-hidden="true">${mark}<b>TEKNOLOJİCİ15</b></span><span class="sleeve__year" aria-hidden="true">${esc(p.yearLabel)}</span><span class="sleeve__fact">${esc(p.fact || '')}</span><span class="sleeve__hook">${esc(p.hook)}</span></span><span class="sleeve__stripe" aria-hidden="true"></span><span class="sleeve__spine" aria-hidden="true">${esc(p.yearLabel)}</span></div>`;
}
const label = (p) => `<p class="label"><span>${esc(p.yearLabel)}</span><span>${esc(p.category)}</span>${p.fact && !String(p.fact).includes(p.yearLabel) ? `<span>${esc(p.fact)}</span>` : ''}<span>${p.readMin} ${esc(T.min)}</span></p>`;

function head({ title, desc, url, image, type = 'website', jsonld = [], extra = '', alt = null, noindex = false, kind = 'page', slug = '', ads = true }) {
  // url is the base (Turkish) path; alt = list of locales that have this page
  const canon = SITE + L.prefix + url;
  const alts = (alt || LOCALES.filter(hasUI)).filter((loc) => !ONLY || ONLY.includes(loc.code));
  const img = image ? SITE + image : SITE + '/img/og.jpg';
  return `<!doctype html>
<html lang="${L.tag}"${L.rtl ? ' dir="rtl"' : ''}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canon}">
<meta name="theme-color" content="#0D0B20">
<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}">
${alts.map((loc) => `<link rel="alternate" hreflang="${loc.tag}" href="${SITE}${loc.prefix}${url}">`).join('')}<link rel="alternate" hreflang="x-default" href="${SITE}${url}">
<meta property="og:type" content="${type}"><meta property="og:site_name" content="Teknolojici15"><meta property="og:locale" content="${L.tag.replace('-', '_')}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${canon}"><meta property="og:image" content="${img}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${img}">
<link rel="icon" type="image/png" href="/img/brand/icon-192.png"><link rel="apple-touch-icon" href="/img/brand/icon-192.png">
<link rel="alternate" type="application/rss+xml" title="Teknolojici15" href="/feed.xml">
<link rel="preload" href="/fonts/archivo-wdth.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/sc/scrollcraft.css"><link rel="stylesheet" href="/css/site.css">
${jsonld.map((j) => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`).join('\n')}
${extra}
${googleTags(kind, slug, ads)}
</head>`;
}
function googleTags(kind, slug, ads) {
  if (!GOOGLE) return '';
  return `<meta name="t15:kind" content="${esc(kind)}">${slug ? `<meta name="t15:slug" content="${esc(slug)}">` : ''}${ADS ? `<meta name="google-adsense-account" content="${ADS}">` : ''}
<script src="/js/g.js"></script>${GA4 ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA4}"></script>` : ''}${ADS && ads ? `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS}" crossorigin="anonymous"></script>` : ''}`;
}
// One responsive AdSense unit, clearly labelled, kept away from navigation (Google: no accidental-click placement)
const adUnit = (name) => ADS && SLOTS[name] ? `<aside class="ad ad--${name}" data-slot-name="${name}" aria-label="${esc(T.adLabel)}"><p class="ad__label">${esc(T.adLabel)}</p><ins class="adsbygoogle" data-ad-client="${ADS}" data-ad-slot="${esc(SLOTS[name])}" data-ad-format="auto" data-full-width-responsive="true"></ins></aside>` : '';
// put the in-article unit after the 2nd paragraph, only when the text is long enough to carry it
const withInArticle = (html) => { if (!(ADS && SLOTS.inArticle)) return html; const parts = html.split('</p>'); if (parts.length < 6) return html; return parts.slice(0, 2).join('</p>') + '</p>' + adUnit('inArticle') + parts.slice(2).join('</p>'); };
const ORG = { '@type': 'Organization', '@id': SITE + '/#org', name: 'Teknolojici15', url: SITE + '/', logo: SITE + '/img/brand/icon-512.png', sameAs: [IG] };

function chrome(active, url = '/') { // url: base path or content item
  const a = (k) => (active === k ? ' aria-current="page"' : '');
  return `<a class="skip" href="#icerik">${esc(T.skip)}</a>
<span data-sc-progress></span><div class="sc-grain" aria-hidden="true"></div><div class="scan" aria-hidden="true"></div>
<header class="bar">
  <a class="bar__mark notranslate" translate="no" href="${u('/')}" aria-label="${esc(T.homeAria)}">${mark}<span>TEKNOLOJİCİ<b>15</b></span></a>
  <nav class="bar__nav" aria-label="${esc(T.mainMenu)}">
    <a href="${u('/#haberler')}"${a('raf')}>${esc(T.navNews)}</a>
    <a class="bar__news" href="${u('/#yol')}">${esc(T.navRoad || UI_TR.navRoad)}</a>
    <a class="bar__ai" href="${u('/yapay-zeka/')}"${a('ai')}>${esc(T.navAI)}</a>
    <a href="${u('/#dizin')}"${a('dizin')}>${esc(T.navAll)}</a>
    <a class="bar__ig" href="${IG}" target="_blank" rel="noopener noreferrer">Instagram</a>
    ${langPicker(url)}
  </nav>
</header>`;
}
// The VCR deck: the signature move. Year LED + reels + jump buttons.
function deck({ year = '2026', title = 'Teknolojici15', prev = null, next = null, mode = 'page' }) {
  const btn = (p, dir, glyph, lab) => p ? `<a class="deck__btn" href="${p.url}" data-deck="${dir}" aria-label="${lab}: ${esc(p.title)}">${glyph}</a>` : `<button class="deck__btn" type="button" data-deck="${dir}" aria-label="${lab}"${mode === 'page' ? ' disabled' : ''}>${glyph}</button>`;
  return `<div class="deck" data-mode="${mode}" role="region" aria-label="${esc(T.deckAria)}">
  <span class="deck__reels" aria-hidden="true"><i></i><i></i></span>
  <span class="deck__led"><small>${esc(T.deckYear)}</small><output class="deck__year" aria-live="polite">${esc(year)}</output></span>
  <span class="deck__title" aria-hidden="true"><span>${esc(title)}</span></span>
  <span class="deck__btns">${btn(prev, 'prev', '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 6 3 12l8 6zM21 6l-8 6 8 6z"/></svg>', esc(T.prevTape))}${btn(next, 'next', '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13 6 8 6-8 6zM3 6l8 6-8 6z"/></svg>', esc(T.nextTape))}</span>
</div>`;
}
const footer = () => `<footer class="foot">
  <p class="foot__mark notranslate" translate="no">${mark}<span>TEKNOLOJİCİ<b>15</b></span></p>
  <p>${esc(T.footTag)}</p>
  <p class="foot__links"><a href="${u('/')}">${esc(T.home)}</a><a href="${u('/haber/')}">${esc(T.dailyNews)}</a><a href="${u('/yapay-zeka/')}">${esc(T.aiGuide)}</a><a href="${u('/#dizin')}">${esc(T.navAll)}</a><a href="/feed.xml">RSS</a><a href="${IG}" target="_blank" rel="noopener noreferrer">@teknolojici15</a>${GOOGLE ? `<a href="${u('/gizlilik/')}">${esc(T.privacy)}</a>` : ''}${ADS ? `<a href="#" data-cookie-settings hidden>${esc(T.cookieSettings)}</a>` : ''}</p>
</footer>`;
const scripts = (home) => `<script src="/sc/scrollcraft.js" defer></script><script src="/js/site.js" defer></script>${home ? '' : ''}`;

/* ---------- the CRT: TEKNO-TEKST teletext, today's top 2 ---------- */
function tv() {
  const d = todayNews[0] ? todayNews[0].date : new Date().toISOString().slice(0, 10);
  const [, m, dd] = d.split('-').map(Number);
  const items = todayNews.length ? todayNews.map((n, i) => `<li><a href="${n.url}"><span class="tt__n" aria-hidden="true">${i + 1}</span><span class="tt__c">${esc(n.category === 'Haber' && n.tag ? n.tag : n.category)}</span><strong>${esc(n.title)}</strong>${n.fact ? `<span class="tt__f">${esc(n.fact)}${n.factLabel ? ` <small>${esc(n.factLabel)}</small>` : ''}</span>` : ''}</a></li>`).join('')
    : `<li class="tt__empty">${esc(T.ttEmpty)}</li>`;
  return `<section class="tv" aria-labelledby="tv-h" data-sc-in>
    <span class="tv__ears" aria-hidden="true"><i></i><i></i></span>
    <div class="tv__box">
      <div class="tv__screen">
        <div class="tt">
          <p class="tt__top" aria-hidden="true"><span>P100</span><b class="notranslate" translate="no">TEKNO-TEKST</b><span>${dd} ${esc((T.monthsShort || UI_TR.monthsShort)[m - 1])}</span><span class="tt__clock">--:--:--</span></p>
          <h2 id="tv-h" class="tt__h"><span>${esc(T.ttHead)}</span><time datetime="${d}">${fmtDate(d)}</time></h2>
          <ol class="tt__list">${items}</ol>
          <nav class="tt__bar" aria-label="${esc(T.ttPagesAria)}"><a class="r" href="${u('/#yol')}">${esc(T.ttRoad || UI_TR.ttRoad)}</a><a class="g" href="${u('/yapay-zeka/')}">${esc(T.ttAI)}</a><a class="y" href="${u('/haber/')}">${esc(T.ttNews)}</a><a class="c" href="${u('/#dizin')}">${esc(T.ttAll)}</a></nav>
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
  const shelf = posts.filter((p) => p.year <= 2026); // oldest → newest, the road ends today
  const cats = [...new Set(all.map((p) => p.category))];
  const desc = T.homeDesc;
  const jsonld = [ORG, { '@type': 'WebSite', '@id': SITE + '/#site', url: SITE + u('/'), name: 'Teknolojici15', inLanguage: L.tag, publisher: { '@id': SITE + '/#org' } },
    { '@type': 'Blog', '@id': SITE + '/#blog', url: SITE + u('/'), name: 'Teknolojici15', inLanguage: L.tag, publisher: { '@id': SITE + '/#org' }, blogPost: all.slice(0, 40).map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: SITE + p.url, datePublished: p.date })) }]
    .map((j) => ({ '@context': 'https://schema.org', ...j }));
  return `${head({ title: T.homeTitle, desc, url: '/', image: null, jsonld, kind: 'home' })}
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
      <h1 class="hero__h">${esc(T.heroH1a)} <em>${esc(T.heroH1b)}</em></h1>
      <p class="hero__sub">${esc(T.heroSub)}</p>
    </div>
    ${tv()}
    <a class="hero__tape" href="${hero.url}">
      <span class="hero__obj"><span class="hero__sleeve" data-sc-parallax="-0.35">${sleeve(hero, { eager: true, big: true })}</span>
      <span class="hero__cassette" data-sc-parallax="0.7" aria-hidden="true"><i></i><i></i><b>${esc(hero.yearLabel)} · ${esc(hero.fact || '')}</b></span></span>
      <span class="hero__label">${label(hero)}<strong>${esc(hero.title)}</strong></span>
    </a>
  </section>

  <!-- 1b · VCR front panel + ticker: bridges the hero and the shelf -->
  <section class="vcrband" aria-hidden="true">
      <div class="vcr" aria-hidden="true">
        <div class="vcr__panel">
          <span class="vcr__rec"><i></i>REC</span>
          <span class="vcr__sign">${esc(T.vcrSign2 || UI_TR.vcrSign2)}</span>
          <span class="vcr__count">CH 15 · ${news.length}</span>
        </div>
        <div class="vcr__ticker"><div class="vcr__run">${(() => { const t = [...todayNews.map((n) => `<b>${esc(T.breaking)}</b> ${esc(n.title)}`), ...newest.slice(0, 10).map((p) => `<b>${esc(p.yearLabel)}</b> ${esc(p.title)}`)].map((x) => `<span>${x}</span>`).join(''); return t + t; })()}</div></div>
        <div class="vcr__tracking"></div>
      </div>
  </section>

  <!-- 2 · AI NEWS BAND: replaces the tape shelf. Newest first, a feature + a grid. -->
  <section id="haberler" class="nb sc-section" data-sc-act="flow">
    <div class="sc-wrap">
      <div class="nb__head" data-sc-in><h2 class="nb__h">${esc(T.nbH || UI_TR.nbH)}</h2><p>${esc(T.nbP || UI_TR.nbP)}</p><a class="nb__all" href="${u('/haber/')}">${esc(T.nbAll || UI_TR.nbAll)} ›</a></div>
      <ol class="nb__grid">
        ${news.slice(0, 9).map((n, i) => `<li class="nb__item${i === 0 ? ' nb__item--lead' : ''}" data-sc-in><a href="${n.url}" class="nb__card">
          <span class="nb__img">${n.cover ? `<img src="${esc(n.cover)}" width="720" height="1280" alt="" loading="lazy" decoding="async">` : ''}<span class="nb__ch" aria-hidden="true">CH ${String(i + 1).padStart(2, '0')}</span></span>
          <span class="nb__body"><span class="nb__meta"><b>${esc(n.category)}</b><time datetime="${n.date}">${fmtDate(n.date)}</time></span><strong>${esc(n.title)}</strong><small>${esc(n.excerpt)}</small></span>
        </a></li>`).join('\n')}
      </ol>
    </div>
  </section>

  <!-- 3 · AI MANUAL: hard cut to a paper manual page. -->
  <section id="yapay-zeka" class="manual sc-section" data-sc-act="flow">
    <div class="manual__sheet" data-sc-reveal="up" data-sc-reveal-at="0 0.35">
      <header class="manual__head">
        <p class="manual__kicker">${esc(T.manualKicker)}</p>
        <h2 class="manual__h">${esc(hub.data.title || T.aiGuide)}</h2>
        <div class="manual__intro">${md(hub.content || hub.data.excerpt || '')}</div>
      </header>
      <ol class="toc">
        ${ai.map((p, i) => `<li><a href="${p.url}"><span class="toc__n">${String(i + 1).padStart(2, '0')}</span><span class="toc__t">${esc(p.title)}<small>${esc(p.excerpt)}</small></span><span class="toc__d" aria-hidden="true"></span><span class="toc__p">${p.readMin} ${esc(T.min)}</span></a></li>`).join('\n')}
      </ol>
      <p class="manual__more"><a href="${u('/yapay-zeka/')}">${esc(T.manualMore)}</a></p>
    </div>
  </section>

  <!-- 4 · DIRECTORY: every post, as a DIR listing. -->
  <section id="dizin" class="dir sc-section" data-sc-act="flow">
    <div class="sc-wrap">
      <div class="dir__head" data-sc-in><h2 class="dir__h">${esc(T.dirH)}</h2><p class="dir__cmd" aria-hidden="true">C:\\TEKNO15&gt; DIR /YIL</p></div>
      <div class="dir__filters" role="group" aria-label="${esc(T.dirFilterAria)}">
        <button type="button" class="chip" aria-pressed="true" data-filter="*">${esc(T.all)} <span>${all.length}</span></button>
        ${cats.map((c) => `<button type="button" class="chip" aria-pressed="false" data-filter="${esc(c)}">${esc(c)} <span>${all.filter((p) => p.category === c).length}</span></button>`).join('')}
      </div>
      <ul class="dir__list">
        ${[...news, ...posts, ...ai].map((p) => `<li data-cat="${esc(p.category)}"><a href="${p.url}"><span class="dir__y">${esc(p.yearLabel)}</span><span class="dir__t">${esc(p.title)}</span><span class="dir__c">${esc(p.category)}</span><span class="dir__m">${p.readMin} ${esc(T.min.toUpperCase())}</span></a></li>`).join('\n')}
      </ul>
    </div>
  </section>

  <!-- 6 · THE ROAD TO 2026: pan. A retro PC walks over the years; every post is a roadside billboard. -->
  <section id="yol" class="shelf road" data-sc-act="pan" data-sc-span="${Math.max(6, Math.round(shelf.length * 0.42))}" data-sc-drift="#0D0B20">
    <div data-sc-stage>
      <div class="road__sky" aria-hidden="true"><span class="road__sun"></span><span class="road__hills"></span></div>
      <div class="road__ground" aria-hidden="true"><span class="road__lane"></span></div>
      <div class="pc" aria-hidden="true">
        <span class="pc__mon"><span class="pc__scr"><b class="pc__year">${esc(shelf[0].yearLabel)}</b><i class="pc__cur"></i></span></span>
        <span class="pc__case"><i class="pc__slot"></i><i class="pc__led"></i></span>
        <span class="pc__kb"></span>
        <span class="pc__legs"><i></i><i></i></span>
      </div>
      <div class="rail" data-sc-pan="0.04">
        <div class="rail__lead">
          <h2 class="rail__h">${esc(T.roadH || UI_TR.roadH)}</h2>
          <p>${esc(tpl(T.roadP || UI_TR.roadP, { n: shelf.length }))}</p>
        </div>
        ${shelf.map((p) => `<article class="tape stop" data-year="${esc(p.yearLabel)}" data-title="${esc(p.title)}" data-url="${p.url}">
          <a href="${p.url}" class="tape__link"><span class="stop__post" aria-hidden="true"></span><span class="tape__tilt" data-sc-tilt="5">${sleeve(p)}</span>
          <span class="tape__meta"><span class="stop__year">${esc(p.yearLabel)}</span><span class="tape__t">${esc(p.title)}</span></span></a>
        </article>`).join('\n')}
        <div class="rail__end stop stop--final tape" data-year="2026" data-title="${esc(T.roadEnd || UI_TR.roadEnd)}"><span class="stop__year">2026</span><p>${esc(T.roadEnd || UI_TR.roadEnd)}</p><a href="${u('/haber/')}">${esc(T.nbAll || UI_TR.nbAll)} ›</a></div>
      </div>
    </div>
  </section>

  <!-- 5 · CLOSE: a rental card, typeset like a label. -->
  <section class="close sc-section" data-sc-act="flow">
    <div class="card" data-sc-in data-sc-stagger="50">
      <p class="card__k">${esc(T.cardK)}</p>
      <p class="card__row"><span>${esc(T.cardTape)}</span><span>${esc(T.cardTapeV)}</span></p>
      <p class="card__row"><span>${esc(T.cardAir)}</span><span>11:00 · 16:00 · 21:00</span></p>
      <p class="card__row"><span>${esc(T.cardNext)}</span><span class="card__you">${esc(T.cardYou)}</span></p>
      <p class="card__cta">${esc(T.cardCta)} <a href="${IG}" target="_blank" rel="noopener noreferrer">${esc(T.follow)}</a>.</p>
    </div>
    ${footer()}
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
  const crumbs = isNews ? [[T.home, u('/')], [T.navNews, u('/haber/')], [p.title, p.url]] : isAI ? [[T.home, u('/')], [T.navAI, u('/yapay-zeka/')], [p.title, p.url]] : [[T.home, u('/')], [T.posts, u('/#dizin')], [p.title, p.url]];
  const jsonld = [
    { '@context': 'https://schema.org', '@type': isNews ? 'NewsArticle' : 'BlogPosting', headline: p.title, description: p.excerpt, datePublished: p.date, dateModified: p.date, inLanguage: p.translated ? L.tag : 'tr-TR', mainEntityOfPage: SITE + p.url, image: p.cover ? SITE + p.cover : SITE + '/img/og.jpg', author: { '@id': SITE + '/#org' }, publisher: ORG, articleSection: p.category, citation: p.sources.map((s) => ({ '@type': 'CreativeWork', name: s.title, url: s.url })), ...(p.year < 2026 ? { about: { '@type': 'Thing', name: p.title, temporalCoverage: p.yearLabel } } : {}) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs.map(([n, u], k) => ({ '@type': 'ListItem', position: k + 1, name: n, item: SITE + u })) },
  ];
  return `${head({ title: `${p.title} · Teknolojici15`, desc: p.excerpt, url: p.path, image: p.cover || null, type: 'article', jsonld, alt: LOCALES.filter((loc) => hasUI(loc) && hasTranslation(loc, p)), noindex: !p.translated, kind: p.kind, slug: p.slug, ads: p.translated, extra: `<meta property="article:published_time" content="${p.date}"><meta property="article:section" content="${esc(p.category)}">` })}
<body class="post${isAI ? ' post--manual' : ''}${isNews ? ' post--news' : ''}">
${chrome(isAI ? 'ai' : isNews ? 'haber' : 'dizin', p)}
<main id="icerik" class="post__wrap">
  ${p.translated ? '' : `<p class="untr" role="note">${esc(T.untranslated)}</p>`}
  <nav class="crumbs" aria-label="${esc(T.crumbsAria)}">${crumbs.map(([n, u], k) => k < crumbs.length - 1 ? `<a href="${u}">${esc(n)}</a>` : `<span aria-current="page">${esc(n)}</span>`).join('<span aria-hidden="true">/</span>')}</nav>
  <header class="post__head" data-sc-in data-sc-stagger="50">
    ${label(p)}
    <h1 class="post__h">${esc(p.title)}</h1>
    <p class="post__lede">${esc(p.excerpt)}</p>
    <p class="post__meta"><time datetime="${p.date}">${fmtDate(p.date)}</time>${p.video ? ` · <a href="${IG}" target="_blank" rel="noopener noreferrer">${esc(T.videoOnIG)}</a>` : ''}</p>
  </header>
  <div class="post__grid">
    <aside class="post__side">
      ${isAI ? `${p.cover ? sleeve(p, { eager: true }) : ''}<div class="spec"><span class="spec__k">${esc(T.chapter)}</span><span class="spec__v">${String(list.indexOf(p) + 1).padStart(2, '0')}</span>${p.fact ? `<span class="spec__k">${esc(T.key)}</span><span class="spec__v spec__v--sm">${esc(p.fact)}</span>` : ''}</div>` : `${sleeve(p, { eager: true })}${p.fact ? `<p class="bigfact"><span>${esc(p.fact)}</span><small>${esc(p.factLabel || '')}</small></p>` : ''}`}
    </aside>
    <article class="prose">
      ${p.translated ? withInArticle(md(p.body)) : md(p.body)}
      ${p.sources.length ? `<section class="sources" aria-labelledby="kaynak-h"><h2 id="kaynak-h">${esc(T.sources)}</h2><ol>${p.sources.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}</a></li>`).join('')}</ol></section>` : ''}
      ${shareBlock(p)}
    </article>
  </div>
  ${p.translated ? adUnit('afterArticle') : ''}
  <nav class="pager" aria-label="${esc(isAI ? T.navGuide : isNews ? T.navNewsPager : T.navTimeline)}">
    ${prev ? `<a class="pager__a" href="${prev.url}" rel="prev"><small>${isAI ? esc(T.prevChapter) : isNews ? esc(T.newerNews) : `⏪ ${esc(prev.yearLabel)}`}</small><span>${esc(prev.title)}</span></a>` : '<span></span>'}
    ${next ? `<a class="pager__a pager__a--next" href="${next.url}" rel="next"><small>${isAI ? esc(T.nextChapter) : isNews ? esc(T.olderNews) : `${esc(next.yearLabel)} ⏩`}</small><span>${esc(next.title)}</span></a>` : '<span></span>'}
  </nav>
  <section class="more" aria-labelledby="more-h">
    <h2 id="more-h" class="more__h">${esc(isAI ? T.fromGuide : isNews ? T.otherNews : T.sameShelf)}</h2>
    <ul class="more__list">${more.map((x) => `<li><a href="${x.url}">${label(x)}<span>${esc(x.title)}</span></a></li>`).join('')}</ul>
  </section>
</main>
${footer()}
${deck({ year: p.yearLabel, title: p.title, prev, next, mode: 'page' })}
${scripts(false)}
</body></html>`;
}

/* ---------- AI hub ---------- */
function aiHub() {
  const jsonld = [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: hub.data.title, url: SITE + u('/yapay-zeka/'), inLanguage: L.tag, hasPart: ai.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: SITE + p.url })) }];
  return `${head({ title: `${hub.data.title || T.aiGuide} · Teknolojici15`, desc: hub.data.excerpt || T.aiGuide, url: '/yapay-zeka/', jsonld, kind: 'ai_hub' })}
<body class="post post--manual hubpage">
${chrome('ai', '/yapay-zeka/')}
<main id="icerik" class="post__wrap">
  <nav class="crumbs" aria-label="${esc(T.crumbsAria)}"><a href="${u('/')}">${esc(T.home)}</a><span aria-hidden="true">/</span><span aria-current="page">${esc(T.navAI)}</span></nav>
  <header class="post__head" data-sc-in data-sc-stagger="50">
    <p class="label"><span>${esc(T.manualLabel)}</span><span>${esc(T.volume)}</span><span>${ai.length} ${esc(T.chapters)}</span></p>
    <h1 class="post__h">${esc(hub.data.title || T.aiGuide)}</h1>
    <div class="post__lede">${md(hub.content || hub.data.excerpt || '')}</div>
  </header>
  <ol class="toc toc--page">
    ${ai.map((p, i) => `<li><a href="${p.url}"><span class="toc__n">${String(i + 1).padStart(2, '0')}</span><span class="toc__t">${esc(p.title)}<small>${esc(p.excerpt)}</small></span><span class="toc__d" aria-hidden="true"></span><span class="toc__p">${p.readMin} ${esc(T.min)}</span></a></li>`).join('\n')}
  </ol>
</main>
${footer()}
${deck({ year: '2026', title: hub.data.title || T.aiGuide, mode: 'page' })}
${scripts(false)}
</body></html>`;
}

function newsIndex() {
  const byDay = {};
  for (const n of news) (byDay[n.date] ||= []).push(n);
  const jsonld = [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: `${T.navNews} · Teknolojici15`, url: SITE + u('/haber/'), inLanguage: L.tag, hasPart: news.slice(0, 30).map((p) => ({ '@type': 'NewsArticle', headline: p.title, url: SITE + p.url, datePublished: p.date })) }];
  return `${head({ title: `${T.newsTitle} · Teknolojici15`, desc: T.newsDesc, url: '/haber/', jsonld, kind: 'news_index' })}
<body class="post newspage">
${chrome('haber', '/haber/')}
<main id="icerik" class="post__wrap">
  <nav class="crumbs" aria-label="${esc(T.crumbsAria)}"><a href="${u('/')}">${esc(T.home)}</a><span aria-hidden="true">/</span><span aria-current="page">${esc(T.navNews)}</span></nav>
  <header class="post__head" data-sc-in data-sc-stagger="50">
    <p class="label"><span>TEKNO-TEKST</span><span>${esc(T.newsPage)}</span><span>${news.length} ${esc(T.newsCount)}</span></p>
    <h1 class="post__h">${esc(T.newsH1)}</h1>
    <p class="post__lede">${esc(T.newsLede)}</p>
  </header>
  ${Object.keys(byDay).length ? Object.entries(byDay).map(([d, list]) => `<section class="nday" aria-label="${fmtDate(d)}"><h2 class="nday__h"><time datetime="${d}">${fmtDate(d)}</time></h2><ol class="nday__list">${list.map((n, i) => `<li><a href="${n.url}">${n.cover ? `<img src="${esc(n.cover)}" width="720" height="1280" alt="" loading="lazy" decoding="async">` : ''}<span class="nday__n">${i + 1}</span><span class="nday__t"><strong>${esc(n.title)}</strong><small>${esc(n.excerpt)}</small></span></a></li>`).join('')}</ol></section>`).map((h, i) => i === 0 ? h + adUnit('newsList') : h).join('') : `<p class="post__lede">${esc(T.newsSoon)}</p>`}
</main>
${footer()}
${deck({ year: '2026', title: T.dailyNews, mode: 'page' })}
${scripts(false)}
</body></html>`;
}

function privacy() {
  const f = path.join(ROOT, 'content', 'gizlilik', L.code + '.md');
  const body = read(fs.existsSync(f) ? f : path.join(ROOT, 'content', 'gizlilik', 'en.md'));
  return `${head({ title: `${T.privacyH} · Teknolojici15`, desc: T.privacyH, url: '/gizlilik/', kind: 'privacy', ads: false })}
<body class="post">
${chrome('', '/gizlilik/')}
<main id="icerik" class="post__wrap">
  <header class="post__head"><h1 class="post__h">${esc(T.privacyH)}</h1></header>
  <article class="prose">${md(body)}</article>
</main>
${footer()}
${deck({ year: '2026', title: T.privacyH, mode: 'page' })}
${scripts(false)}
</body></html>`;
}

function notFound() {
  return `${head({ title: `${T.nfTitle} · Teknolojici15`, desc: T.nfDesc, url: '/404', kind: '404', ads: false })}
<body class="post">${chrome('', '/')}<main id="icerik" class="post__wrap nf"><p class="label"><span>${esc(T.nfErr)}</span><span>${esc(T.nfNoTape)}</span></p><h1 class="post__h">${esc(T.nfH1)}</h1><p class="post__lede">${esc(T.nfP1)} <a href="${u('/')}">${esc(T.nfBack)}</a> ${esc(T.nfOr)} <a href="${u('/#dizin')}">${esc(T.nfAll)}</a>.</p></main>${footer()}${deck({ year: '404', title: T.nfTitle })}${scripts(false)}</body></html>`;
}

/* ---------- build ---------- */
fs.rmSync(OUT, { recursive: true, force: true });
copyDir(path.join(ROOT, 'public'), OUT);
copyDir(ENGINE, path.join(OUT, 'sc'));
const fontsrc = path.join(ROOT, 'node_modules');
fs.mkdirSync(path.join(OUT, 'fonts'), { recursive: true });
for (const [s, d] of [['@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2', 'archivo-wdth.woff2'], ['@fontsource-variable/archivo/files/archivo-latin-ext-wdth-normal.woff2', 'archivo-wdth-ext.woff2'], ['@fontsource-variable/archivo/files/archivo-latin-wdth-italic.woff2', 'archivo-wdth-italic.woff2'], ['@fontsource-variable/archivo/files/archivo-latin-ext-wdth-italic.woff2', 'archivo-wdth-italic-ext.woff2'], ['@fontsource/vt323/files/vt323-latin-400-normal.woff2', 'vt323.woff2'], ['@fontsource/vt323/files/vt323-latin-ext-400-normal.woff2', 'vt323-ext.woff2']]) fs.copyFileSync(path.join(fontsrc, s), path.join(OUT, 'fonts', d));

if (!SRC.post.length) throw new Error('no posts');
const built = [];
for (const loc of LOCALES) {
  if (ONLY && !ONLY.includes(loc.code)) continue;
  if (!hasUI(loc)) continue;
  setLocale(loc);
  const D = path.join(OUT, ...(loc.prefix ? [loc.code] : []));
  write(path.join(D, 'index.html'), home());
  for (const p of posts) write(path.join(D, 'yazi', p.slug, 'index.html'), article(p, posts));
  for (const p of ai) write(path.join(D, 'yapay-zeka', p.slug, 'index.html'), article(p, ai));
  for (const p of news) write(path.join(D, 'haber', p.slug, 'index.html'), article(p, news));
  write(path.join(D, 'haber', 'index.html'), newsIndex());
  write(path.join(D, 'yapay-zeka', 'index.html'), aiHub());
  if (GOOGLE) write(path.join(D, 'gizlilik', 'index.html'), privacy());
  if (loc.code === 'tr') write(path.join(OUT, '404.html'), notFound()); else write(path.join(D, '404.html'), notFound());
  built.push(`${loc.code}:${all.filter((p) => p.translated).length}/${all.length}`);
}
setLocale(LOCALES[0]);

if (GOOGLE) write(path.join(OUT, 'js', 'g.js'), read(path.join(ROOT, 'tools', 'google', 'g.tpl.js')).replace('__GA4__', GA4).replace('__ADS__', ADS));
if (ADS) write(path.join(OUT, 'ads.txt'), `google.com, ${ADS.replace('ca-', '')}, DIRECT, f08c47fec0942fa0\n`);
const today = new Date().toISOString().slice(0, 10);
write(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[['/', today, '1.0'], ['/haber/', today, '0.9'], ['/yapay-zeka/', today, '0.9'], ...all.map((p) => [p.url, p.date, '0.8']), ...LOCALES.filter((loc) => loc.code !== 'tr' && hasUI(loc) && (!ONLY || ONLY.includes(loc.code))).flatMap((loc) => [[loc.prefix + '/', today, '0.7'], ...all.filter((p) => hasTranslation(loc, p)).map((p) => [loc.prefix + p.path, p.date, '0.6'])])].map(([u, d, pr]) => `  <url><loc>${SITE}${u}</loc><lastmod>${d}</lastmod><priority>${pr}</priority></url>`).join('\n')}\n</urlset>\n`);
write(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\n# Yapay zekâ tarayıcılarına açık\nUser-agent: GPTBot\nAllow: /\nUser-agent: OAI-SearchBot\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: Claude-SearchBot\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
write(path.join(OUT, 'llms.txt'), `# Teknolojici15\n\n> Türkçe teknoloji tarihi blogu. Instagram'daki @teknolojici15 videolarının kaynaklı, uzun yazıları ve bir yapay zekâ skill rehberi.\n\n- Instagram: ${IG}\n- Her yazının sonunda kaynak listesi vardır; rakamlar ve tarihler kaynaklarla doğrulanır.\n\n## Teknoloji tarihi yazıları\n${posts.map((p) => `- [${p.title}](${SITE}${p.url}) (${p.yearLabel}): ${p.excerpt}`).join('\n')}\n\n## Günün haberleri\n${news.map((p) => `- [${p.title}](${SITE}${p.url}) (${p.date}): ${p.excerpt}`).join('\n')}\n\n## Yapay Zekâ Skill Rehberi\n${ai.map((p) => `- [${p.title}](${SITE}${p.url}): ${p.excerpt}`).join('\n')}\n`);
const rssDate = (d) => new Date(d + 'T09:00:00+03:00').toUTCString();
write(path.join(OUT, 'feed.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>Teknolojici15</title><link>${SITE}/</link><description>Teknoloji tarihinin şaşırtan anları, kaynaklarıyla.</description><language>tr</language>\n${[...all].sort((a, b) => b.date.localeCompare(a.date)).map((p) => `<item><title>${esc(p.title)}</title><link>${SITE}${p.url}</link><guid>${SITE}${p.url}</guid><pubDate>${rssDate(p.date)}</pubDate><description>${esc(p.excerpt)}</description></item>`).join('\n')}\n</channel></rss>\n`);
console.log(`google: ga4=${GA4 || 'off'} adsense=${ADS || 'off'} slots=${Object.entries(SLOTS).filter(([, v]) => v).map(([k]) => k).join(',') || 'none'}`);
console.log(`built: ${posts.length} posts, ${ai.length} ai, ${news.length} news · locales ${built.join(' ')} → ${OUT}`);
