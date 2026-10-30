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

  function frame() {
    turnReels();
    if (deck && deck.getAttribute('data-mode') === 'home') {
      if (shelf && inView(shelf.querySelector('[data-sc-stage]') ? shelf : shelf, 0.5) && shelf.getBoundingClientRect().top <= window.innerHeight * 0.25) {
        var i = nearestTape();
        if (i !== current && i > -1) {
          if (current > -1 && tapes[current]) tapes[current].classList.remove('is-now');
          current = i; tapes[i].classList.add('is-now');
          setYear(tapes[i].getAttribute('data-year'), tapes[i].getAttribute('data-title'));
        }
      } else {
        if (current > -1 && tapes[current]) { tapes[current].classList.remove('is-now'); current = -1; }
        if (inView(manual, 0.5)) setYear('2026', 'Yapay Zekâ Skill Rehberi');
        else if (inView(dir, 0.5)) setYear('2026', 'Tüm yazılar');
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
