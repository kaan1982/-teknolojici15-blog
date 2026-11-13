/* Teknolojici15: language handling on entry.
   No automatic redirect by device language any more (Kaan 13.11.2026: www adresi
   ABD'den bakınca /en/'e gitmesin). The Turkish original stays where the visitor
   landed. Two rules:
   1) A language the visitor picked earlier in the menu (localStorage 't15lang') still wins.
   2) Otherwise, if the device language exists on the site and differs from the page,
      a small dismissible bar offers it; nothing changes unless the visitor clicks.
   Crawlers and previews never see either. */
(function () {
  'use strict';
  try {
    if (/bot|crawl|spider|slurp|mediapartners|adsbot|lighthouse|pagespeed|headless|preview|inspectiontool|googleother|google-read-aloud|facebookexternalhit|embedly|validator/i.test(navigator.userAgent || '')) return;
    var ref = document.referrer, internal = false;
    try { internal = !!ref && new URL(ref).host === location.host; } catch (e) {}
    if (internal) return; // moving around inside the site: keep the language the visitor is reading
    var map = {}, links = document.querySelectorAll('link[rel="alternate"][hreflang]');
    for (var i = 0; i < links.length; i++) {
      var h = links[i].getAttribute('hreflang').toLowerCase();
      if (h !== 'x-default') map[h.split('-')[0]] = links[i].href;
    }
    var cur = (document.documentElement.lang || '').toLowerCase().split('-')[0];

    // 1) explicit choice from the language menu
    var picked = null;
    try { picked = localStorage.getItem('t15lang'); } catch (e) {}
    if (picked && map[picked]) {
      if (picked !== cur) {
        var u = new URL(map[picked]);
        location.replace(u.pathname + location.search + location.hash);
      }
      return;
    }

    // 2) suggest (never force) the device language
    try { if (sessionStorage.getItem('t15langbar') === 'off') return; } catch (e) {}
    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    var want = null;
    for (var j = 0; j < list.length && !want; j++) {
      var c = String(list[j]).toLowerCase().split('-')[0];
      if (c === cur) return; // the page is already in one of the visitor's languages
      if (map[c]) want = c;
    }
    if (!want || want === cur) return;

    var text = {
      tr: ['Bu sayfa Türkçe de var.', 'Türkçe oku'],
      en: ['This page is available in English.', 'Read in English'],
      de: ['Diese Seite gibt es auch auf Deutsch.', 'Auf Deutsch lesen'],
      fr: ['Cette page existe aussi en français.', 'Lire en français'],
      it: ['Questa pagina è disponibile in italiano.', 'Leggi in italiano'],
      nl: ['Deze pagina is ook in het Nederlands.', 'Lees in het Nederlands'],
      sv: ['Sidan finns även på svenska.', 'Läs på svenska'],
      ar: ['هذه الصفحة متوفرة بالعربية.', 'اقرأ بالعربية'],
      ja: ['このページは日本語でも読めます。', '日本語で読む']
    }[want];
    if (!text) return;

    var show = function () {
      var bar = document.createElement('div');
      bar.setAttribute('role', 'region');
      bar.setAttribute('aria-label', 'Language');
      bar.style.cssText = 'position:fixed;left:12px;right:12px;bottom:12px;z-index:9999;display:flex;gap:10px;align-items:center;justify-content:center;flex-wrap:wrap;padding:10px 14px;border-radius:10px;background:#0D0B20;color:#fff;font:14px/1.4 system-ui,sans-serif;box-shadow:0 4px 18px rgba(0,0,0,.35)';
      var msg = document.createElement('span');
      msg.textContent = text[0];
      var go = document.createElement('a');
      go.href = new URL(map[want]).pathname + location.search + location.hash;
      go.textContent = text[1];
      go.style.cssText = 'color:#0D0B20;background:#FFD23F;padding:6px 12px;border-radius:6px;text-decoration:none;font-weight:600';
      go.addEventListener('click', function () { try { localStorage.setItem('t15lang', want); } catch (e) {} });
      var x = document.createElement('button');
      x.type = 'button';
      x.setAttribute('aria-label', 'Close');
      x.textContent = '×';
      x.style.cssText = 'background:none;border:0;color:#fff;font-size:20px;line-height:1;cursor:pointer;padding:0 4px';
      x.addEventListener('click', function () {
        try { sessionStorage.setItem('t15langbar', 'off'); } catch (e) {}
        bar.remove();
      });
      bar.appendChild(msg); bar.appendChild(go); bar.appendChild(x);
      document.body.appendChild(bar);
    };
    if (document.body) show(); else document.addEventListener('DOMContentLoaded', show);
  } catch (e) {}
})();
