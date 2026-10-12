# Campfire Habits — GitHub Pages

Live base: `https://digish.github.io/project/campfirehabits/`

| Page | URL |
|------|-----|
| Marketing | `/project/campfirehabits/` (`index.html`) |
| Privacy | `/project/campfirehabits/privacy-policy.html` |
| Circle join (smart link) | `/project/campfirehabits/link.html?id=…&key=…&folder=…&presets=…` |
| Store / download shortcut | `/project/campfirehabits.html` |

## App configuration

In the Flutter app `.env` (when wired):

```env
SHARE_LANDING_URL=https://digish.github.io/project/campfirehabits/
PRIVACY_POLICY_URL=https://digish.github.io/project/campfirehabits/privacy-policy.html
INVITE_JOIN_BASE_URL=https://digish.github.io/project/campfirehabits/link.html
```

## Analytics (TODO)

- Add GA4 to `link.html`, `index.html`, and `campfirehabits.html` when IDs are ready.
- Update `js/campfirehabits-deeplink.js` `IOS_APP_ID` when the App Store listing is live.

## Join link format

HTTPS (share in chat):

```
https://digish.github.io/project/campfirehabits/link.html?id=<uuid>&key=<secret>&folder=<driveFolderId>&presets=preset1,preset2
```

Opens `campfirehabits://join?...` on device, then Play Store / marketing page if the app is not installed.
