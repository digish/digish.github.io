/**
 * Sacred Sutra smart links — try custom-scheme deep link, then App / Play Store.
 *
 * Routes (extensible via buildAppUrl):
 *   reading  — params.id  → sacredsutra://reading/{id}
 *   open     — (none)     → sacredsutra://open
 *
 * Generic entry: ../sacredsutra/link.html?route=reading&id=...
 */
(function (global) {
  'use strict';

  var IOS_APP_ID = '6798266974';
  var IOS_STORE_URL =
    'https://apps.apple.com/app/id' + IOS_APP_ID;
  var ANDROID_STORE_URL =
    'https://play.google.com/store/apps/details?id=org.komal.sacredsutra&pcampaignid=web_share';
  var APP_DOWNLOAD_PAGE =
    'https://digish.github.io/project/sacredsutra.html';

  var ROUTES = {
    reading: function (params) {
      var id = (params && params.id ? String(params.id) : '').trim();
      if (!id) return null;
      return 'sacredsutra://reading/' + encodeURIComponent(id);
    },
    open: function () {
      return 'sacredsutra://open';
    },
  };

  function detectPlatform() {
    var ua = navigator.userAgent || navigator.vendor || global.opera || '';
    if (/iPad|iPhone|iPod/.test(ua) && !global.MSStream) {
      return 'iOS';
    }
    if (/android/i.test(ua)) {
      return 'Android';
    }
    return 'Desktop';
  }

  function storeUrlForPlatform(platform) {
    if (platform === 'iOS') return IOS_STORE_URL;
    if (platform === 'Android') return ANDROID_STORE_URL;
    return APP_DOWNLOAD_PAGE;
  }

  function parseQuery(search) {
    var out = {};
    var q = (search || '').replace(/^\?/, '');
    if (!q) return out;
    q.split('&').forEach(function (pair) {
      var idx = pair.indexOf('=');
      if (idx === -1) {
        out[decodeURIComponent(pair)] = '';
      } else {
        out[decodeURIComponent(pair.slice(0, idx))] = decodeURIComponent(
          pair.slice(idx + 1),
        );
      }
    });
    return out;
  }

  function buildAppUrl(route, params) {
    var fn = ROUTES[route];
    if (!fn) return null;
    return fn(params || {});
  }

  function track(eventName, params) {
    if (typeof global.gtag === 'function') {
      global.gtag('event', eventName, params || {});
    }
  }

  /**
   * @param {object} options
   * @param {string} options.route
   * @param {object} [options.params]
   * @param {HTMLElement} [options.statusEl]
   * @param {HTMLElement} [options.hintEl]
   * @param {HTMLElement} [options.loaderEl]
   * @param {HTMLAnchorElement} [options.manualLinkEl]
   * @param {number} [options.fallbackMs]
   */
  function run(options) {
    var route = options.route;
    var params = options.params || {};
    var statusEl = options.statusEl;
    var hintEl = options.hintEl;
    var loaderEl = options.loaderEl;
    var manualLinkEl = options.manualLinkEl;
    var fallbackMs = options.fallbackMs != null ? options.fallbackMs : 2200;

    var platform = detectPlatform();
    var storeUrl = storeUrlForPlatform(platform);
    var appUrl = buildAppUrl(route, params);

    if (!appUrl) {
      if (statusEl) statusEl.textContent = 'Invalid link';
      if (hintEl) {
        hintEl.innerHTML =
          'Get the app: <a href="' +
          APP_DOWNLOAD_PAGE +
          '">Sacred Sutra</a>';
      }
      if (loaderEl) loaderEl.style.display = 'none';
      track('deeplink_invalid', { route: route, app_name: 'Sacred Sutra' });
      return;
    }

    if (manualLinkEl) manualLinkEl.href = storeUrl;
    if (statusEl) {
      statusEl.textContent =
        platform === 'Desktop'
          ? 'Opening Sacred Sutra…'
          : 'Opening Sacred Sutra app…';
    }

    track('deeplink_attempt', {
      app_name: 'Sacred Sutra',
      route: route,
      platform: platform,
      has_id: !!(params && params.id),
    });

    var navigatedAway = false;
    function markLeft() {
      navigatedAway = true;
    }
    global.addEventListener('blur', markLeft);
    global.addEventListener('pagehide', markLeft);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) navigatedAway = true;
    });

    function goToStore() {
      if (statusEl) {
        statusEl.textContent =
          platform === 'Desktop'
            ? 'Get Sacred Sutra'
            : 'Opening ' + platform + ' Store…';
      }
      track('store_redirect', {
        app_name: 'Sacred Sutra',
        platform: platform,
        route: route,
        target_url: storeUrl,
        transport_type: 'beacon',
      });
      global.location.replace(storeUrl);
    }

    // Custom scheme: attempt app open, then store if user stays on page.
    try {
      global.location.href = appUrl;
    } catch (e) {
      goToStore();
      return;
    }

    setTimeout(function () {
      global.removeEventListener('blur', markLeft);
      if (!navigatedAway && !document.hidden) {
        goToStore();
      } else if (navigatedAway) {
        track('deeplink_app_open', {
          app_name: 'Sacred Sutra',
          route: route,
          platform: platform,
        });
      }
    }, fallbackMs);
  }

  global.SacredSutraDeeplink = {
    run: run,
    buildAppUrl: buildAppUrl,
    parseQuery: parseQuery,
    storeUrlForPlatform: storeUrlForPlatform,
    detectPlatform: detectPlatform,
    ROUTES: ROUTES,
  };
})(window);
