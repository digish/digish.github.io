# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your beautiful app showcase website to GitHub Pages.

## 📋 Prerequisites

- A GitHub account
- Git installed on your computer
- This repository pushed to GitHub

## 🎯 Quick Deployment (Recommended)

### Step 1: Push to GitHub

If you haven't already, push your repository to GitHub:

```bash
# Navigate to your project directory
cd /Users/Shared/workspace/apps/swarmeter_flutter

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Add beautiful website for GitHub Pages"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**:
   - Select branch: `main` (or `master`)
   - Select folder: `/docs`
   - Click **Save**

### Step 3: Wait for Deployment

- GitHub will automatically build and deploy your site
- This usually takes 1-2 minutes
- Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 🔗 Your Website URL

After deployment, your website will be accessible at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

Example: If your username is `komalpandya` and repo is `apps-website`, the URL would be:
```
https://komalpandya.github.io/apps-website/
```

## 🌐 Custom Domain (Optional)

If you want to use your own domain (e.g., `apps.komalpandya.com`):

### Step 1: Add CNAME File

Create a file named `CNAME` in the `/docs` folder with your domain:

```bash
echo "apps.komalpandya.com" > docs/CNAME
```

### Step 2: Configure DNS

Add these DNS records in your domain registrar:

**For apex domain (e.g., komalpandya.com):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For subdomain (e.g., apps.komalpandya.com):**
```
Type: CNAME
Name: apps
Value: YOUR_USERNAME.github.io
```

### Step 3: Update GitHub Settings

1. Go to your repository settings → Pages
2. Enter your custom domain
3. Enable "Enforce HTTPS"
4. Wait for DNS propagation (up to 24 hours)

## 🔧 Troubleshooting

### Images Not Loading?

Make sure all image paths in `index.html` are correct:
- Screenshot paths should be relative: `screenshots/iphone/Store slides 6.5.001.png`
- Icon paths should be relative: `../assets/images/playstore.png`

If images still don't load, update the paths in `index.html` to be relative to the docs folder.

### CSS/JS Not Loading?

Check that `styles.css` and `script.js` are in the same folder as `index.html`.

### 404 Error?

- Make sure you selected `/docs` folder in GitHub Pages settings
- Check that all files are pushed to GitHub
- Wait a few minutes for deployment to complete

## 📱 Testing Locally

Before deploying, you can test locally:

```bash
# Option 1: Using Python
cd docs
python3 -m http.server 8000
# Visit: http://localhost:8000

# Option 2: Using PHP
cd docs
php -S localhost:8000
# Visit: http://localhost:8000

# Option 3: Using Node.js (if you have npx)
cd docs
npx http-server
# Visit: http://localhost:8080
```

## 🎨 Customization After Deployment

To update your website:

1. Make changes to files in the `/docs` folder
2. Commit and push to GitHub:
   ```bash
   git add docs/
   git commit -m "Update website"
   git push
   ```
3. GitHub Pages will automatically redeploy (1-2 minutes)

## 📊 Analytics (Optional)

Add Google Analytics to track visitors:

1. Get your Google Analytics tracking ID
2. Add this before the closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Security Best Practices

- ✅ Enable HTTPS in GitHub Pages settings
- ✅ Keep dependencies updated
- ✅ Don't commit sensitive information (API keys, etc.)
- ✅ Use relative URLs for internal links

## 📈 Performance Tips

Already implemented:
- ✅ Minified CSS (single file)
- ✅ Optimized images
- ✅ Lazy loading
- ✅ No heavy frameworks
- ✅ Fast load times

## 🎯 SEO Optimization

Already included:
- ✅ Semantic HTML
- ✅ Meta descriptions
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Mobile responsive

### Additional SEO (Optional)

Add a `sitemap.xml` in the `/docs` folder:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/</loc>
    <lastmod>2024-12-03</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

Add a `robots.txt` in the `/docs` folder:

```
User-agent: *
Allow: /
Sitemap: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/sitemap.xml
```

## 🎉 You're Done!

Your beautiful app showcase website should now be live on GitHub Pages!

Share your website:
- 📱 Add the link to your app store listings
- 🐦 Share on social media
- 📧 Include in email signatures
- 💼 Add to your resume/portfolio

## 📞 Need Help?

- GitHub Pages Docs: https://docs.github.com/en/pages
- Contact: digish.pandya@gmail.com

---

Made with ❤️ by Komal Pandya
