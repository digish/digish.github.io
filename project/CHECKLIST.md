# ✅ Deployment Checklist

Use this checklist to ensure your website is properly deployed to GitHub Pages.

## 📋 Pre-Deployment Checklist

- [x] Website files created in `/docs` folder
- [x] HTML, CSS, and JS files are ready
- [x] Screenshots are in place
- [x] Store icons are referenced correctly
- [ ] Test website locally (see below)
- [ ] Review content for accuracy
- [ ] Check all links work

### Testing Locally

```bash
cd /Users/Shared/workspace/apps/swarmeter_flutter/docs
python3 -m http.server 8000
# Visit: http://localhost:8000
```

Test these:
- [ ] Hero section loads with gradient
- [ ] Navigation links work
- [ ] Screenshot carousel rotates
- [ ] Download buttons link correctly
- [ ] Responsive design on mobile (resize browser)
- [ ] All images load properly

## 🚀 Deployment Steps

### Option 1: Using Deploy Script (Recommended)

- [ ] Open Terminal
- [ ] Navigate to project:
  ```bash
  cd /Users/Shared/workspace/apps/swarmeter_flutter
  ```
- [ ] Run deploy script:
  ```bash
  ./docs/deploy.sh
  ```
- [ ] Follow the prompts
- [ ] Enter GitHub repository URL when asked
- [ ] Commit message (or use default)
- [ ] Script will push to GitHub

### Option 2: Manual Deployment

- [ ] Open Terminal
- [ ] Navigate to project
- [ ] Stage changes:
  ```bash
  git add docs/
  ```
- [ ] Commit:
  ```bash
  git commit -m "Add website for GitHub Pages"
  ```
- [ ] Push to GitHub:
  ```bash
  git push origin main
  ```

## ⚙️ GitHub Pages Configuration

- [ ] Go to your repository on GitHub
- [ ] Click **Settings** (top right)
- [ ] Click **Pages** (left sidebar)
- [ ] Under **Source**:
  - [ ] Branch: Select `main` (or `master`)
  - [ ] Folder: Select `/docs`
  - [ ] Click **Save**
- [ ] Wait for the green success message

## ✅ Post-Deployment Checklist

- [ ] Wait 1-2 minutes for deployment to complete
- [ ] Visit your GitHub Pages URL:
  ```
  https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
  ```
- [ ] Verify website loads correctly
- [ ] Test on mobile device (or use browser dev tools)
- [ ] Check all sections:
  - [ ] Hero section
  - [ ] Swar Meter section
  - [ ] Bhagvad Gita section
  - [ ] Contact section
  - [ ] Footer
- [ ] Test all links:
  - [ ] Navigation links
  - [ ] Play Store links
  - [ ] App Store link
  - [ ] Email link
  - [ ] Developer page link
- [ ] Test screenshot carousel (auto-rotate & click dots)

## 🌐 Share Your Website

Once verified, share it:

- [ ] Add link to Play Store app descriptions
- [ ] Add link to App Store app description
- [ ] Update README.md with live site URL
- [ ] Share on social media
- [ ] Add to email signature
- [ ] Add to portfolio/resume

## 📈 Optional Enhancements

- [ ] Set up custom domain (see DEPLOYMENT.md)
- [ ] Add Google Analytics
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Submit to search engines
- [ ] Add Open Graph tags for social sharing
- [ ] Set up SSL (automatic with GitHub Pages)

## 🔄 Updating Your Website

After making changes:

- [ ] Edit files in `/docs` folder
- [ ] Test locally
- [ ] Commit changes:
  ```bash
  git add docs/
  git commit -m "Update website"
  git push
  ```
- [ ] Wait 1-2 minutes for auto-deployment
- [ ] Refresh your website to see changes

## 🐛 Troubleshooting

If something doesn't work:

### Images Not Loading
- [ ] Check image paths are correct
- [ ] Ensure screenshots are in `docs/screenshots/`
- [ ] Verify store icons are in `../assets/images/`
- [ ] Try relative paths instead of absolute

### CSS/JS Not Loading
- [ ] Check files are in same folder as index.html
- [ ] Clear browser cache (Cmd+Shift+R)
- [ ] Check browser console for errors

### 404 Error
- [ ] Verify GitHub Pages is enabled
- [ ] Check correct folder is selected (/docs)
- [ ] Ensure files are pushed to GitHub
- [ ] Wait a few more minutes

### Links Not Working
- [ ] Check URLs are correct
- [ ] Ensure `target="_blank"` for external links
- [ ] Test smooth scroll for anchor links

## 📞 Need Help?

- 📖 Read: `DEPLOYMENT.md` for detailed guide
- 📖 Read: `QUICKSTART.md` for quick reference
- 📖 Read: `SUMMARY.md` for overview
- 📧 Email: digish.pandya@gmail.com
- 🔗 GitHub Pages Docs: https://docs.github.com/en/pages

## 🎉 Success Criteria

Your deployment is successful when:

✅ Website loads at your GitHub Pages URL
✅ All sections display correctly
✅ Images and screenshots load
✅ Links work properly
✅ Responsive on mobile
✅ Smooth animations play
✅ No console errors

---

**Once all items are checked, you're done!** 🎊

Share your website with the world and drive more app downloads! 🚀
