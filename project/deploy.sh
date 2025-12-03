#!/bin/bash

# 🚀 GitHub Pages Deployment Script
# This script helps you deploy your website to GitHub Pages

echo "🎨 Komal Pandya Apps - GitHub Pages Deployment"
echo "================================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository detected"
fi

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
if [ -z "$CURRENT_BRANCH" ]; then
    CURRENT_BRANCH="main"
    git checkout -b $CURRENT_BRANCH
fi

echo "📍 Current branch: $CURRENT_BRANCH"
echo ""

# Check if remote exists
if ! git remote | grep -q origin; then
    echo "🔗 Setting up GitHub remote..."
    echo ""
    echo "Please enter your GitHub repository URL"
    echo "Format: https://github.com/USERNAME/REPOSITORY.git"
    read -p "Repository URL: " REPO_URL
    
    if [ -z "$REPO_URL" ]; then
        echo "❌ No repository URL provided. Exiting."
        exit 1
    fi
    
    git remote add origin "$REPO_URL"
    echo "✅ Remote added: $REPO_URL"
else
    REPO_URL=$(git remote get-url origin)
    echo "✅ Remote already configured: $REPO_URL"
fi

echo ""
echo "📋 Checking for changes..."

# Check if there are changes to commit
if ! git diff-index --quiet HEAD --; then
    echo "📝 Changes detected. Adding files..."
    
    # Add all files in docs folder
    git add docs/
    
    # Show what will be committed
    echo ""
    echo "Files to be committed:"
    git diff --cached --name-only
    
    echo ""
    read -p "Commit message (or press Enter for default): " COMMIT_MSG
    
    if [ -z "$COMMIT_MSG" ]; then
        COMMIT_MSG="Update website for GitHub Pages"
    fi
    
    git commit -m "$COMMIT_MSG"
    echo "✅ Changes committed"
else
    echo "✅ No changes to commit"
fi

echo ""
echo "🚀 Pushing to GitHub..."

# Push to GitHub
if git push -u origin "$CURRENT_BRANCH"; then
    echo "✅ Successfully pushed to GitHub"
else
    echo "⚠️  Push failed. You may need to pull first or check your credentials."
    exit 1
fi

echo ""
echo "================================================"
echo "✨ Deployment Complete!"
echo "================================================"
echo ""
echo "📌 Next Steps:"
echo ""
echo "1. Go to your GitHub repository:"
echo "   $REPO_URL"
echo ""
echo "2. Click on 'Settings' → 'Pages'"
echo ""
echo "3. Under 'Source':"
echo "   - Branch: $CURRENT_BRANCH"
echo "   - Folder: /docs"
echo "   - Click 'Save'"
echo ""
echo "4. Wait 1-2 minutes for deployment"
echo ""
echo "5. Your site will be live at:"
echo "   https://USERNAME.github.io/REPOSITORY/"
echo ""
echo "📖 For detailed instructions, see:"
echo "   docs/DEPLOYMENT.md"
echo ""
echo "🎉 Happy deploying!"
echo ""
