# Quick Build Guide for ansai.dev

## 🚀 Deploy in 5 Minutes

### Step 1: Install Dependencies
```bash
cd /home/jbyrd/pai/ansai-docs

# Install MkDocs with Material theme
pip install mkdocs mkdocs-material mkdocs-minify-plugin
```

### Step 2: Preview Locally
```bash
# Start development server
mkdocs serve

# Open in browser
# http://localhost:8000
```

### Step 3: Build for Production
```bash
# Build static site
mkdocs build

# Output will be in: site/
```

### Step 4: Deploy to ansai.dev

#### Option A: GitHub Pages (Recommended)
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial documentation"
git branch -M main
git remote add origin https://github.com/yourusername/ansai-docs.git
git push -u origin main

# Deploy to GitHub Pages
mkdocs gh-deploy
```

#### Option B: Netlify
```bash
# Build site
mkdocs build

# Deploy to Netlify
# 1. Login to netlify.com
# 2. Drag and drop the 'site/' folder
# 3. Configure custom domain: ansai.dev
```

#### Option C: Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod

# Configure domain in Vercel dashboard
```

---

## 📁 What You Have

```
/home/jbyrd/pai/ansai-docs/
├── index.md                    (14K) - Main landing page
├── 01-introduction.md          (11K) - Framework introduction
├── 18-lightspeed.md           (20K) - Ansible Lightspeed convergence ⭐
├── 20-workflow-catalog.md     (22K) - Complete workflow reference
├── README.md                   (7.7K) - Documentation overview
├── mkdocs.yml                  (4.6K) - MkDocs configuration
├── EXECUTIVE_SUMMARY.md        (12K) - For PM team
└── BUILD.md                    (this file)

Total: 91K of documentation, 3,427 lines
```

---

## ✅ Ready to Deploy

All files are ready for immediate deployment:
- ✅ MkDocs configuration complete
- ✅ Navigation structure defined
- ✅ Theme and styling configured
- ✅ 4 chapters complete (18% done)
- ✅ Executive summary for PMs

---

## 🎯 Test Locally Right Now

```bash
cd /home/jbyrd/pai/ansai-docs
mkdocs serve
```

Then open: http://localhost:8000

---

## 📞 Questions?

Read EXECUTIVE_SUMMARY.md for complete details.

