/* Teknolojici15: open the site in the visitor's device language on first entry.
   Runs in <head> (blocking, tiny) so there is no flash of the wrong language.
   Rules: only when arriving from outside the site; a language picked in the menu wins;
   device language not on the site -> English; crawlers and previews are never redirected. */
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
    var want = null;
    try { want = localStorage.getItem('t15lang'); } catch (e) {}
    if (!want || !map[want]) {
      want = null;
      var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
      for (var j = 0; j < list.length && !want; j++) {
        var c = String(list[j]).toLowerCase().split('-')[0];
        if (map[c]) want = c;
      }
      if (!want) want = 'en';
    }
    if (want !== cur && map[want]) {
      var u = new URL(map[want]);
      location.replace(u.pathname + location.search + location.hash);
    }
  } catch (e) {}
})();
