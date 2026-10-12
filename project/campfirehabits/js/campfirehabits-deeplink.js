/**
 * Campfire Habits smart links — circle join + store fallback.
 *
 * Entry: link.html?id=&key=&folder=&presets=
 * App:   campfirehabits://join?... (same query params)
 */
(function (global) {
  'use strict';

  var IOS_APP_ID = ''; // Set when live on App Store, e.g. '1234567890'
  var ANDROID_PACKAGE = 'com.campfirehabits.app';
  var IOS_STORE_URL = IOS_APP_ID
    ? 'https://apps.apple.com/app/id' + IOS_APP_ID
    : '';
  var ANDROID_STORE_URL =
    'https://play.google.com/store/apps/details?id=' +
    ANDROID_PACKAGE +
    '&pcampaignid=web_share';
  var APP_DOWNLOAD_PAGE =
    'https://digish.github.io/project/campfirehabits.html';
  var MARKETING_PAGE =
    'https://digish.github.io/project/campfirehabits/';

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
    if (platform === 'iOS' && IOS_STORE_URL) return IOS_STORE_URL;
    if (platform === 'Android') return ANDROID_STORE_URL;
    return MARKETING_PAGE;
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

  function buildJoinAppUrl(params) {
    var id = (params && params.id ? String(params.id) : '').trim();
    var key = (params && params.key ? String(params.key) : '').trim();
    if (!id || !key || key.length < 32) return null;
    var parts = ['id=' + encodeURIComponent(id), 'key=' + encodeURIComponent(key)];
    var folder = (params.folder || '').trim();
    if (folder) {
      parts.push('folder=' + encodeURIComponent(folder));
    }
    var presets = (params.presets || '').trim();
    if (presets) {
      parts.push('presets=' + encodeURIComponent(presets));
    }
    return 'campfirehabits://join?' + parts.join('&');
  }

  function track(eventName, params) {
    if (typeof global.gtag === 'function') {
      global.gtag('event', eventName, params || {});
    }
  }

  /**
   * @param {object} options
   * @param {object} options.params — join query (id, key, folder, presets)
   */
  function runJoin(options) {
    var params = options.params || {};
    var statusEl = options.statusEl;
    var hintEl = options.hintEl;
    var loaderEl = options.loaderEl;
    var manualLinkEl = options.manualLinkEl;
    var fallbackMs = options.fallbackMs != null ? options.fallbackMs : 2500;

    var platform = detectPlatform();
    var storeUrl = storeUrlForPlatform(platform);
    var appUrl = buildJoinAppUrl(params);

    if (!appUrl) {
      if (statusEl) statusEl.textContent = 'Invalid invite link';
      if (hintEl) {
        hintEl.innerHTML =
          'Get the app: <a href="' +
          APP_DOWNLOAD_PAGE +
          '">Campfire Habits</a>';
      }
      if (loaderEl) loaderEl.style.display = 'none';
      track('join_link_invalid', { app_name: 'Campfire Habits' });
      return;
    }

    if (manualLinkEl) manualLinkEl.href = storeUrl;
    if (statusEl) {
      statusEl.textContent =
        platform === 'Desktop'
          ? 'Opening Campfire Habits…'
          : 'Opening Campfire Habits app…';
    }

    track('join_link_attempt', {
      app_name: 'Campfire Habits',
      platform: platform,
      has_folder: !!(params.folder && params.folder.length),
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
        if (platform === 'iOS' && !IOS_STORE_URL) {
          statusEl.textContent = 'Get Campfire Habits';
          if (hintEl) {
            hintEl.innerHTML =
              'iOS coming soon. Android: <a href="' +
              ANDROID_STORE_URL +
              '">Google Play</a>. After installing, tap the invite link again.';
          }
          if (loaderEl) loaderEl.style.display = 'none';
          return;
        }
        statusEl.textContent =
          platform === 'Desktop'
            ? 'Get Campfire Habits'
            : 'Opening ' + platform + ' Store…';
      }
      track('store_redirect', {
        app_name: 'Campfire Habits',
        platform: platform,
        target_url: storeUrl,
        transport_type: 'beacon',
      });
      global.location.replace(storeUrl);
    }

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
        track('join_app_open', {
          app_name: 'Campfire Habits',
          platform: platform,
        });
      }
    }, fallbackMs);
  }

  global.CampfireHabitsDeeplink = {
    runJoin: runJoin,
    buildJoinAppUrl: buildJoinAppUrl,
    parseQuery: parseQuery,
    storeUrlForPlatform: storeUrlForPlatform,
    detectPlatform: detectPlatform,
    ANDROID_STORE_URL: ANDROID_STORE_URL,
    MARKETING_PAGE: MARKETING_PAGE,
  };
})(window);
