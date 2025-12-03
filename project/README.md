# Komal Pandya Apps Website

A beautiful single-page website showcasing mobile applications available on iOS and Android.

## 🚀 Live Site

Visit: [Your GitHub Pages URL will be here]

## 📱 Featured Apps

### Swar Meter
Advanced yet simple app for musical notes visualization. A super simple tuner designed for music enthusiasts.

- **Android**: [Google Play Store](https://play.google.com/store/apps/details?id=org.komal.SwarMeter)
- **iOS**: [App Store](https://apps.apple.com/us/app/swarmeter/id6756004078) (In Review)

### Shrimad Bhagvad Gita
Search, Listen, Read - Your spiritual companion for daily study and spiritual growth.

- **Android**: [Google Play Store](https://play.google.com/store/apps/details?id=org.komal.bhagvadgeeta)

## 🎨 Features

- ✨ Modern, gradient-rich design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎭 Smooth animations and transitions
- 🖼️ Screenshot carousel
- ⚡ Optimized performance
- 🎯 SEO-friendly

## 🛠️ Technologies

- HTML5
- CSS3 (Modern features: Grid, Flexbox, CSS Variables, Animations)
- Vanilla JavaScript (No frameworks)
- Google Fonts (Inter, Poppins)

## 📦 Deployment to GitHub Pages

### Option 1: Using GitHub Settings (Recommended)

1. Push this repository to GitHub
2. Go to your repository settings
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select the branch (usually `main` or `master`)
5. Set the folder to `/docs`
6. Click "Save"
7. Your site will be live at `https://[username].github.io/[repository-name]/`

### Option 2: Using gh-pages Branch

```bash
# Clone or navigate to your repository
cd your-repo

# Create a gh-pages branch
git checkout -b gh-pages

# Copy docs content to root
cp -r docs/* .

# Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# Go to repository settings and set GitHub Pages to use gh-pages branch
```

### Option 3: Custom Domain

1. Follow Option 1 first
2. Add a `CNAME` file to the `/docs` folder with your domain name
3. Configure your domain's DNS settings to point to GitHub Pages
4. Update the settings in your GitHub repository

## 📁 Project Structure

```
docs/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive features
├── screenshots/        # App screenshots
│   ├── iphone/        # iOS screenshots
│   └── ipad/          # iPad screenshots (if any)
└── README.md          # This file
```

## 🔧 Customization

### Update App Information
Edit `index.html` to update:
- App descriptions
- Store links
- Features
- Contact information

### Modify Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --color-accent-primary: #6366f1;
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* ... more variables */
}
```

### Add More Screenshots
1. Add images to `screenshots/` folder
2. Update the screenshot carousel in `index.html`
3. Add corresponding dots for navigation

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Copyright © 2024 Komal Pandya. All rights reserved.

## 📧 Contact

- Email: digish.pandya@gmail.com
- Play Store: [Komal Pandya](https://play.google.com/store/apps/developer?id=Komal+Pandya)

---

Made with ❤️ for music and spirituality enthusiasts
