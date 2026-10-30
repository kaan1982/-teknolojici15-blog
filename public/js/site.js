/* Teknolojici15 · page behaviour. The VCR deck is the signature move:
   the YEAR LED follows the tape under your eye while the shelf pans,
   the reels turn with your scroll, and ⏪ ⏩ jump between tapes. */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var deck = document.querySelector('.deck');
  var yearEl = deck && deck.querySelector('.deck__year');
  var titleEl = deck && deck.querySelector('.deck__title span');
  var reels = deck ? deck.querySelectorAll('.deck__reels i') : [];

  ScrollCraftReady(function () { if (window.ScrollCraft) window.ScrollCraft.mount(document.body); });
  function ScrollCraftReady(fn) { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn); else fn(); }

  /* ---- year LED with a mechanical roll ---- */
  var shown = yearEl ? yearEl.textContent : '';
  var rollTimer = null;
  function setYear(target, title) {
    if (!yearEl) return;
    if (title && titleEl && titleEl.textContent !== title) titleEl.textContent = title;
    if (String(target) === shown) return;
    var from = parseInt(shown, 10), to = parseInt(target, 10);
    clearInterval(rollTimer);
    if (reduce || isNaN(from) || isNaN(to) || Math.abs(to - from) < 2) { shown = String(target); yearEl.textContent = shown; return; }
    var steps = Math.min(14, Math.abs(to - from)), i = 0;
    deck.classList.add('is-rolling');
    rollTimer = setInterval(function () {
      i++;
      var v = i >= steps ? to : Math.round(from + (to - from) * (1 - Math.pow(1 - i / steps, 3)));
      yearEl.textContent = String(v);
      if (i >= steps) { clearInterval(rollTimer); deck.classList.remove('is-rolling'); }
    }, 22);
    shown = String(target);
  }

  /* ---- reels turn with scroll ---- */
  var spin = 0, lastY = window.scrollY;
  function turnReels() {
    var y = window.scrollY, dy = y - lastY; lastY = y;
    if (reduce || !reels.length) return;
    spin += dy * 0.9;
    reels[0].style.setProperty('--reel', (spin * 1.15) + 'deg');
    if (reels[1]) reels[1].style.setProperty('--reel', (spin * 0.85) + 'deg');
  }

  /* ---- home: track the shelf ---- */
  var shelf = document.querySelector('.shelf');
  var tapes = shelf ? Array.prototype.slice.call(shelf.querySelectorAll('.tape')) : [];
  var rail = shelf && shelf.querySelector('.rail');
  var manual = document.getElementById('yapay-zeka');
  var dir = document.getElementById('dizin');
  var hero = document.querySelector('.hero__tape');
  var heroYear = yearEl ? yearEl.textContent : '';
  var heroTitle = titleEl ? titleEl.textContent : '';
  var current = -1;

  function nearestTape() {
    var mid = window.innerWidth * 0.5, best = -1, bd = Infinity;
    for (var i = 0; i < tapes.length; i++) {
      var r = tapes[i].getBoundingClientRect();
      if (r.right < 0 || r.left > window.innerWidth) continue;
      var d = Math.abs(r.left + r.width / 2 - mid);
      if (d < bd) { bd = d; best = i; }
    }
    return best;
  }
  function inView(el, frac) { if (!el) return false; var r = el.getBoundingClientRect(); var h = window.innerHeight; return r.top < h * (frac || 0.5) && r.bottom > h * (frac || 0.5); }

  var pcYear = document.querySelector('.pc__year'), walkT = null, lastRoadY = window.scrollY;
  function roadTick() {
    if (!shelf || !shelf.classList.contains('road')) return;
    var r = shelf.getBoundingClientRect();
    var p = Math.min(1, Math.max(0, -r.top / Math.max(1, shelf.offsetHeight - window.innerHeight)));
    shelf.style.setProperty('--road', String(Math.round(p * 6000)));
    var y = window.scrollY;
    if (r.top < 0 && r.bottom > window.innerHeight && Math.abs(y - lastRoadY) > 0) {
      shelf.classList.add('is-walking'); clearTimeout(walkT); walkT = setTimeout(function () { shelf.classList.remove('is-walking'); }, 160);
    }
    lastRoadY = y;
  }
  function frame() {
    turnReels(); roadTick();
    if (deck && deck.getAttribute('data-mode') === 'home' && shelf) { var rr = shelf.getBoundingClientRect(); deck.classList.toggle('is-off', !(rr.top < window.innerHeight * 0.6 && rr.bottom > window.innerHeight * 0.4)); }
    if (deck && deck.getAttribute('data-mode') === 'home') {
      if (shelf && inView(shelf.querySelector('[data-sc-stage]') ? shelf : shelf, 0.5) && shelf.getBoundingClientRect().top <= window.innerHeight * 0.25) {
        var i = nearestTape();
        if (i !== current && i > -1) {
          if (current > -1 && tapes[current]) tapes[current].classList.remove('is-now');
          current = i; tapes[i].classList.add('is-now');
          setYear(tapes[i].getAttribute('data-year'), tapes[i].getAttribute('data-title'));
          if (pcYear) { var yv = tapes[i].getAttribute('data-year'); pcYear.textContent = yv; pcYear.classList.toggle('is-range', yv.length > 4); }
        }
      } else {
        if (current > -1 && tapes[current]) { tapes[current].classList.remove('is-now'); current = -1; }
        if (inView(manual, 0.5)) setYear('2026', (manual.querySelector('.manual__h') || {}).textContent);
        else if (inView(dir, 0.5)) setYear('2026', (dir.querySelector('.dir__h') || {}).textContent);
        else if (shelf && shelf.getBoundingClientRect().top > window.innerHeight * 0.25) setYear(heroYear, heroTitle);
      }
    }
    ticking = false;
  }
  var ticking = false;
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ---- home: ⏪ ⏩ jump between tapes ---- */
  function scrollToTape(i) {
    if (!shelf || !rail || !tapes[i]) return;
    var top = shelf.getBoundingClientRect().top + window.scrollY;
    var runway = shelf.offsetHeight - window.innerHeight;
    var travel = Math.max(1, rail.scrollWidth - window.innerWidth);
    var x = tapes[i].offsetLeft + tapes[i].offsetWidth / 2 - window.innerWidth / 2;
    var p = Math.min(1, Math.max(0, x / travel));
    window.scrollTo({ top: Math.round(top + p * runway), behavior: reduce ? 'auto' : 'smooth' });
  }
  if (deck && deck.getAttribute('data-mode') === 'home') {
    deck.addEventListener('click', function (e) {
      var b = e.target.closest('[data-deck]'); if (!b) return;
      var dirn = b.getAttribute('data-deck') === 'next' ? 1 : -1;
      var base = current > -1 ? current : (dirn > 0 ? -1 : tapes.length);
      var shelfTop = shelf.getBoundingClientRect().top;
      if (current === -1 && shelfTop < 0 && dirn < 0) base = tapes.length; // past the shelf: rewind into it
      var t = Math.max(0, Math.min(tapes.length - 1, base + dirn));
      scrollToTape(t);
    });
  }

  /* ---- directory filter ---- */
  var chips = document.querySelectorAll('.dir__filters .chip');
  var rows = document.querySelectorAll('.dir__list li');
  Array.prototype.forEach.call(chips, function (c) {
    c.addEventListener('click', function () {
      var f = c.getAttribute('data-filter');
      Array.prototype.forEach.call(chips, function (x) { x.setAttribute('aria-pressed', x === c ? 'true' : 'false'); });
      Array.prototype.forEach.call(rows, function (r) { r.hidden = !(f === '*' || r.getAttribute('data-cat') === f); });
    });
  });
})();

/* TEKNO-TEKST clock (Istanbul time) + language picker niceties */
(function () {
  'use strict';
  var clock = document.querySelector('.tt__clock');
  if (clock) {
    var fmt;
    try { fmt = new Intl.DateTimeFormat('tr-TR', { timeZone: 'Europe/Istanbul', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }); } catch (e) { fmt = null; }
    var tick = function () { var d = new Date(); clock.textContent = fmt ? fmt.format(d) : d.toTimeString().slice(0, 8); };
    tick(); setInterval(tick, 1000);
  }
  var lang = document.querySelector('.lang');
  if (!lang) return;
  // suggest the visitor's own language first
  var pref = (navigator.language || '').toLowerCase();
  var code = pref.indexOf('zh') === 0 ? (/tw|hk|hant/.test(pref) ? 'zh-tw' : 'zh-cn') : (pref.split('-')[0] === 'nb' || pref.split('-')[0] === 'nn') ? 'no' : pref.split('-')[0];
  if (code && code !== document.documentElement.lang.toLowerCase().split('-')[0]) {
    var hit = lang.querySelector('.lang__list a[data-l="' + code + '"]');
    if (hit) { hit.classList.add('is-suggested'); var li = hit.parentNode; li.parentNode.insertBefore(li, li.parentNode.firstChild); }
  }
  document.addEventListener('click', function (e) { if (lang.open && !lang.contains(e.target)) lang.open = false; });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && lang.open) { lang.open = false; lang.querySelector('summary').focus(); } });
})();

/* Mechanical keyboard "thock" on card / news taps (WebAudio, no files) */
(function () {
  'use strict';
  var SEL = '.tape__link, .hero__tape, .tt__list a, .tt__bar a, .nday__list a, .dir__list a, .more__list a, .toc a, .pager__a';
  var ctx = null;
  function thock() {
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === 'suspended') ctx.resume();
      var t = ctx.currentTime, sr = ctx.sampleRate;
      // click: short filtered noise burst (switch leaf)
      var n = ctx.createBuffer(1, Math.floor(sr * 0.03), sr), d = n.getChannelData(0);
      for (var i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 3);
      var src = ctx.createBufferSource(); src.buffer = n;
      var hp = ctx.createBiquadFilter(); hp.type = 'bandpass'; hp.frequency.value = 3200 + Math.random() * 600; hp.Q.value = 0.9;
      var g1 = ctx.createGain(); g1.gain.value = 0.55;
      src.connect(hp); hp.connect(g1); g1.connect(ctx.destination); src.start(t);
      // thock: keycap bottoming out
      var o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.setValueAtTime(190 + Math.random() * 30, t + 0.004); o.frequency.exponentialRampToValueAtTime(70, t + 0.06);
      var g2 = ctx.createGain(); g2.gain.setValueAtTime(0.0001, t); g2.gain.exponentialRampToValueAtTime(0.5, t + 0.006); g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
      o.connect(g2); g2.connect(ctx.destination); o.start(t); o.stop(t + 0.09);
      // release click
      var s2 = ctx.createBufferSource(); s2.buffer = n; var g3 = ctx.createGain(); g3.gain.value = 0.22; var hp2 = ctx.createBiquadFilter(); hp2.type = 'highpass'; hp2.frequency.value = 4500;
      s2.connect(hp2); hp2.connect(g3); g3.connect(ctx.destination); s2.start(t + 0.075);
      return true;
    } catch (e) { return false; }
  }
  document.addEventListener('pointerdown', function (e) { if (e.button === 0 && e.target.closest(SEL)) thock(); }, true);
  document.addEventListener('keydown', function (e) { if ((e.key === 'Enter' || e.key === ' ') && document.activeElement && document.activeElement.matches && document.activeElement.matches(SEL)) thock(); });
  // give the sound a beat to play before the page changes
  document.addEventListener('click', function (e) {
    var a = e.target.closest(SEL); if (!a || !a.href || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === '_blank') return;
    if (a.hash && a.pathname === location.pathname) return;
    e.preventDefault(); setTimeout(function () { location.href = a.href; }, 110);
  });
})();
