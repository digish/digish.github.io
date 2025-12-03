#!/bin/bash

# 🚀 Deploy Apps Portfolio to digish.github.io
# Usage: ./deploy_to_digish.sh /path/to/digish.github.io

set -e  # Exit on error

echo "🎨 Apps Portfolio Deployment Script"
echo "===================================="
echo ""

# Check if destination path is provided
if [ -z "$1" ]; then
    echo "❌ Error: Please provide the path to your digish.github.io repository"
    echo ""
    echo "Usage:"
    echo "  ./deploy_to_digish.sh /path/to/digish.github.io"
    echo ""
    echo "Example:"
    echo "  ./deploy_to_digish.sh ~/repositories/digish.github.io"
    exit 1
fi

DEST_REPO="$1"
SOURCE_DIR="/Users/Shared/workspace/apps/swarmeter_flutter"

# Verify destination exists
if [ ! -d "$DEST_REPO" ]; then
    echo "❌ Error: Destination directory does not exist: $DEST_REPO"
    exit 1
fi

# Verify it's a git repository
if [ ! -d "$DEST_REPO/.git" ]; then
    echo "⚠️  Warning: $DEST_REPO is not a git repository"
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "📂 Source: $SOURCE_DIR/docs"
echo "📂 Destination: $DEST_REPO"
echo ""

# Create directory structure
echo "📁 Creating directory structure..."
mkdir -p "$DEST_REPO/project/swarmeter"
mkdir -p "$DEST_REPO/assets/images"
echo "✅ Directories created"
echo ""

# Copy apps portfolio page
echo "📄 Copying apps portfolio page..."
cp "$SOURCE_DIR/docs/apps_portfolio.html" "$DEST_REPO/project/index.html"
echo "✅ Portfolio page copied to project/index.html"

# Copy supporting files
echo "📄 Copying styles and scripts..."
cp "$SOURCE_DIR/docs/styles.css" "$DEST_REPO/project/"
cp "$SOURCE_DIR/docs/script.js" "$DEST_REPO/project/"
echo "✅ Styles and scripts copied"

# Copy screenshots
echo "📸 Copying screenshots..."
if [ -d "$SOURCE_DIR/docs/screenshots" ]; then
    cp -r "$SOURCE_DIR/docs/screenshots" "$DEST_REPO/project/"
    echo "✅ Screenshots copied"
else
    echo "⚠️  No screenshots directory found"
fi

# Copy Swarmeter app page
echo "📄 Copying Swarmeter app page..."
cp "$SOURCE_DIR/docs/index.html" "$DEST_REPO/project/swarmeter/"
echo "✅ Swarmeter page copied to project/swarmeter/"

# Copy store icons
echo "🖼️  Copying store icons..."
if [ -f "$SOURCE_DIR/assets/images/playstore.png" ]; then
    cp "$SOURCE_DIR/assets/images/playstore.png" "$DEST_REPO/assets/images/"
    echo "✅ Play Store icon copied"
else
    echo "⚠️  Play Store icon not found"
fi

if [ -f "$SOURCE_DIR/assets/images/appstore.png" ]; then
    cp "$SOURCE_DIR/assets/images/appstore.png" "$DEST_REPO/assets/images/"
    echo "✅ App Store icon copied"
else
    echo "⚠️  App Store icon not found"
fi

echo ""
echo "===================================="
echo "✨ Files copied successfully!"
echo "===================================="
echo ""

# Show what was copied
echo "📦 Files deployed:"
echo "  • $DEST_REPO/project/index.html (Portfolio)"
echo "  • $DEST_REPO/project/styles.css"
echo "  • $DEST_REPO/project/script.js"
echo "  • $DEST_REPO/project/screenshots/"
echo "  • $DEST_REPO/project/swarmeter/index.html"
echo "  • $DEST_REPO/assets/images/"
echo ""

# Ask if user wants to commit
if [ -d "$DEST_REPO/.git" ]; then
    echo "🔍 Checking git status..."
    cd "$DEST_REPO"
    
    if [[ -n $(git status -s) ]]; then
        echo ""
        echo "📝 Changes detected:"
        git status -s
        echo ""
        
        read -p "Do you want to commit and push these changes? (y/n) " -n 1 -r
        echo
        
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            echo ""
            read -p "Commit message (or press Enter for default): " COMMIT_MSG
            
            if [ -z "$COMMIT_MSG" ]; then
                COMMIT_MSG="Update apps portfolio and Swarmeter page"
            fi
            
            echo "📝 Staging changes..."
            git add project/ assets/
            
            echo "💾 Committing..."
            git commit -m "$COMMIT_MSG"
            
            echo "🚀 Pushing to GitHub..."
            if git push; then
                echo ""
                echo "===================================="
                echo "🎉 Deployment Complete!"
                echo "===================================="
                echo ""
                echo "Your website will be live in 1-2 minutes at:"
                echo "  • Portfolio: https://digish.github.io/project/"
                echo "  • Swarmeter: https://digish.github.io/project/swarmeter/"
                echo ""
            else
                echo ""
                echo "⚠️  Push failed. Please check your git configuration and try:"
                echo "  cd $DEST_REPO"
                echo "  git push"
            fi
        else
            echo ""
            echo "📝 Changes committed but not pushed."
            echo "To push manually:"
            echo "  cd $DEST_REPO"
            echo "  git push"
        fi
    else
        echo "✅ No changes detected - files are already up to date"
    fi
else
    echo "📝 Files copied but not committed (not a git repository)"
fi

echo ""
echo "🧪 To test locally before live:"
echo "  cd $DEST_REPO"
echo "  python3 -m http.server 8000"
echo "  Visit: http://localhost:8000/project/"
echo ""
echo "✅ Done!"
