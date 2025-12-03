# 🚀 Deploy Apps Portfolio to digish.github.io

This guide explains how to deploy your **apps portfolio page** to your `digish.github.io` repository.

## 📋 Understanding the Structure

### Current Setup

Your `digish.github.io` project structure:
```
digish.github.io/
└── project/
    ├── swarmeter/          # Swarmeter app page
    │   └── index.html      # (copy from this repo's docs/index.html)
    └── index.html          # Apps portfolio (NEW - from apps_portfolio.html)
```

### Files in This Repository

- **`docs/index.html`** → Copy to `digish.github.io/project/swarmeter/index.html`
  - Swarmeter-specific app page
  - Already deployed at https://digish.github.io/project/swarmeter/

- **`docs/apps_portfolio.html`** → Copy to `digish.github.io/project/index.html`
  - NEW top-level portfolio showcasing ALL your apps
  - Will be live at https://digish.github.io/project/

- **`docs/styles.css`** → Copy to `digish.github.io/project/styles.css`
  - Shared styles for portfolio page

- **`docs/script.js`** → Copy to `digish.github.io/project/script.js`
  - Shared JavaScript for portfolio page

- **`docs/screenshots/`** → Copy to `digish.github.io/project/screenshots/`
  - App screenshots for portfolio

## 🎯 Deployment Steps

### Option 1: Manual Copy (Recommended for First Time)

1. **Navigate to your digish.github.io repository**

```bash
cd /path/to/digish.github.io
```

2. **Create/verify the project directory structure**

```bash
mkdir -p project/swarmeter
```

3. **Copy the apps portfolio page**

```bash
# Copy portfolio page as index.html in project/
cp /Users/Shared/workspace/apps/swarmeter_flutter/docs/apps_portfolio.html project/index.html

# Copy supporting files
cp /Users/Shared/workspace/apps/swarmeter_flutter/docs/styles.css project/
cp /Users/Shared/workspace/apps/swarmeter_flutter/docs/script.js project/

# Copy screenshots
cp -r /Users/Shared/workspace/apps/swarmeter_flutter/docs/screenshots project/
```

4. **Copy the Swarmeter app page**

```bash
# Copy Swarmeter-specific page
cp /Users/Shared/workspace/apps/swarmeter_flutter/docs/index.html project/swarmeter/
```

5. **Update image paths in portfolio page**

The portfolio page references images. You need to either:

**Option A**: Copy the assets to digish.github.io
```bash
mkdir -p assets/images
cp /Users/Shared/workspace/apps/swarmeter_flutter/assets/images/playstore.png assets/images/
cp /Users/Shared/workspace/apps/swarmeter_flutter/assets/images/appstore.png assets/images/
```

**Option B**: Update the paths in `project/index.html` to use absolute URLs or adjust relative paths

6. **Commit and push**

```bash
git add project/
git add assets/  # if you copied assets
git commit -m "Add apps portfolio page"
git push origin main
```

7. **Verify deployment**

After 1-2 minutes:
- Portfolio: https://digish.github.io/project/
- Swarmeter app: https://digish.github.io/project/swarmeter/

### Option 2: Using Deployment Script

I'll create a script to automate this:

```bash
cd /Users/Shared/workspace/apps/swarmeter_flutter
./docs/deploy_to_digish.sh /path/to/digish.github.io
```

## 📁 Final Structure in digish.github.io

```
digish.github.io/
├── assets/
│   └── images/
│       ├── playstore.png
│       └── appstore.png
└── project/
    ├── index.html           # Apps portfolio (from apps_portfolio.html)
    ├── styles.css           # Portfolio styles
    ├── script.js            # Portfolio scripts
    ├── screenshots/         # iOS screenshots
    │   └── iphone/
    └── swarmeter/
        └── index.html       # Swarmeter app page
```

## 🔗 URLs After Deployment

- **Apps Portfolio**: https://digish.github.io/project/
  - Showcases both Swarmeter and Bhagvad Gita
  - Download links for both apps
  - Contact information

- **Swarmeter App Page**: https://digish.github.io/project/swarmeter/
  - Specific to Swarmeter app
  - Detailed features and screenshots

## ⚙️ Important Path Adjustments

After copying `apps_portfolio.html` to `project/index.html`, you may need to adjust these paths:

### Store Icons

Change from:
```html
<img src="../assets/images/playstore.png" ...>
<img src="../assets/images/appstore.png" ...>
```

To either:
```html
<!-- Option 1: If you copied assets to root -->
<img src="../assets/images/playstore.png" ...>

<!-- Option 2: If you copied to project folder -->
<img src="assets/images/playstore.png" ...>

<!-- Option 3: Use absolute URLs -->
<img src="/assets/images/playstore.png" ...>
```

### Screenshots

Screenshots should work as-is since they're relative:
```html
<img src="screenshots/iphone/Store slides 6.5.001.png" ...>
```

## 🧪 Testing Before Push

Test locally in your digish.github.io repository:

```bash
cd /path/to/digish.github.io
python3 -m http.server 8000
# Visit: http://localhost:8000/project/
```

Verify:
- ✅ Portfolio page loads
- ✅ Images display correctly
- ✅ Links work properly
- ✅ Responsive design works

## 📝 Quick Reference

### File Mapping

| Source (swarmeter_flutter) | Destination (digish.github.io) |
|----------------------------|--------------------------------|
| `docs/apps_portfolio.html` | `project/index.html` |
| `docs/styles.css` | `project/styles.css` |
| `docs/script.js` | `project/script.js` |
| `docs/screenshots/` | `project/screenshots/` |
| `docs/index.html` | `project/swarmeter/index.html` |
| `assets/images/*.png` | `assets/images/*.png` |

### Commands Summary

```bash
# 1. Navigate to digish.github.io
cd /path/to/digish.github.io

# 2. Copy files (adjust paths as needed)
cp ~/workspace/apps/swarmeter_flutter/docs/apps_portfolio.html project/index.html
cp ~/workspace/apps/swarmeter_flutter/docs/styles.css project/
cp ~/workspace/apps/swarmeter_flutter/docs/script.js project/
cp -r ~/workspace/apps/swarmeter_flutter/docs/screenshots project/
cp ~/workspace/apps/swarmeter_flutter/docs/index.html project/swarmeter/

# 3. Copy assets
mkdir -p assets/images
cp ~/workspace/apps/swarmeter_flutter/assets/images/{playstore,appstore}.png assets/images/

# 4. Test locally
python3 -m http.server 8000

# 5. Commit and push
git add .
git commit -m "Update apps portfolio and Swarmeter page"
git push
```

## 🔄 Updating in the Future

When you update either page:

1. Make changes in the swarmeter_flutter repository
2. Copy the updated file(s) to digish.github.io
3. Commit and push to digish.github.io
4. GitHub Pages auto-deploys in 1-2 minutes

## ❓ FAQ

**Q: Why keep these files in swarmeter_flutter repo?**
A: For version control and easy editing. The Flutter repo contains the source files, and you copy them to the public digish.github.io repo for hosting.

**Q: Can I edit files directly in digish.github.io?**
A: Yes, but it's better to edit in swarmeter_flutter first, then copy over. This keeps your source files organized.

**Q: Do I need to update both repos every time?**
A: No, only update swarmeter_flutter when editing pages, then copy to digish.github.io for deployment.

## 📧 Need Help?

If you encounter issues:
- Check that paths in HTML match your folder structure
- Verify images copied correctly
- Test locally before pushing
- Email: digish.pandya@gmail.com

---

Made with ❤️ for your apps!
