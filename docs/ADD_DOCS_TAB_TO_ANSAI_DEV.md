# Add Documentation Tab to ansai.dev

## 🎯 Goal

Add a "Documentation" tab to the existing ansai.dev landing page that links to the Red Hat-style documentation.

---

## 📋 Current Setup

**ansai.dev** = Landing page (`/home/jbyrd/repos/ansai-landing/`)  
**Documentation** = MkDocs site (`/home/jbyrd/ansai/docs/`)

**Goal Structure:**
```
ansai.dev/              → Landing page
ansai.dev/docs/         → Documentation (MkDocs)
```

---

## 🔧 Implementation: Option 1 - Netlify Subdirectory (Recommended)

### Step 1: Build Documentation

```bash
cd /home/jbyrd/ansai/docs

# Install dependencies
pip install mkdocs-material mkdocs-git-revision-date-localized-plugin mkdocs-minify-plugin mkdocs-print-site-plugin

# Build the docs
mkdocs build

# This creates: /home/jbyrd/ansai/docs/site/
```

### Step 2: Copy Docs to Landing Page Repo

```bash
# Copy built documentation to landing page repo
cp -r /home/jbyrd/ansai/docs/site /home/jbyrd/repos/ansai-landing/docs

cd /home/jbyrd/repos/ansai-landing
```

### Step 3: Update Landing Page Navigation

Edit `/home/jbyrd/repos/ansai-landing/index.html` and add Documentation link:

```html
<!-- Find the navigation section (around line 36-40) and add: -->

<div class="cta-buttons">
    <a href="/docs/" class="btn btn-primary">Documentation</a>
    <a href="#notify" class="btn btn-secondary">Get Early Access</a>
    <a href="#features" class="btn btn-tertiary">Learn More</a>
</div>
```

Or add a header navigation:

```html
<!-- Add after <body> tag: -->
<nav class="top-nav">
    <div class="container">
        <div class="nav-content">
            <a href="/" class="nav-logo">Ansai</a>
            <div class="nav-links">
                <a href="/docs/">Documentation</a>
                <a href="#features">Features</a>
                <a href="#notify">Get Access</a>
            </div>
        </div>
    </div>
</nav>
```

Add to `style.css`:

```css
/* Top Navigation */
.top-nav {
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-links a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #667eea;
}

/* Adjust hero section for fixed nav */
.hero {
    padding-top: 80px;
}
```

### Step 4: Configure Netlify Redirects

Create or update `/home/jbyrd/repos/ansai-landing/netlify.toml`:

```toml
# Netlify configuration for ansai.dev

[[redirects]]
  from = "/documentation"
  to = "/docs/"
  status = 301

[[redirects]]
  from = "/documentation/*"
  to = "/docs/:splat"
  status = 301

# Ensure docs are served correctly
[[headers]]
  for = "/docs/*"
  [headers.values]
    Cache-Control = "public, max-age=3600"
```

### Step 5: Deploy to Netlify

```bash
cd /home/jbyrd/repos/ansai-landing

# Add all files
git add .
git commit -m "Add Documentation tab and docs subdirectory"
git push origin main

# Netlify will auto-deploy
```

---

## 🔧 Implementation: Option 2 - Separate Subdomain

### Use docs.ansai.dev

**Benefits:**
- Cleaner separation
- Independent deployments
- Better caching

### Setup:

1. **Configure DNS:**
   - Add CNAME: `docs.ansai.dev` → `ansai-docs.netlify.app`

2. **Create Separate Netlify Site:**
```bash
cd /home/jbyrd/ansai/docs

# Deploy to new site
netlify init

# Follow prompts:
# - Create new site
# - Name: ansai-docs
# - Build command: mkdocs build
# - Publish directory: site/
```

3. **Update Landing Page:**
```html
<a href="https://docs.ansai.dev" class="btn btn-primary">Documentation</a>
```

---

## 🔧 Implementation: Option 3 - Combined Build (Automated)

### Create Unified Deployment Script

Create `/home/jbyrd/repos/ansai-landing/build.sh`:

```bash
#!/bin/bash
# Build script for ansai.dev with documentation

set -e

echo "🔨 Building ansai.dev with documentation..."

# Build documentation
echo "📚 Building MkDocs documentation..."
cd /home/jbyrd/ansai/docs
pip install mkdocs-material mkdocs-git-revision-date-localized-plugin mkdocs-minify-plugin mkdocs-print-site-plugin
mkdocs build

# Copy to landing page
echo "📦 Copying documentation to landing page..."
cd /home/jbyrd/repos/ansai-landing
rm -rf docs
cp -r /home/jbyrd/ansai/docs/site docs

echo "✅ Build complete!"
echo "📁 Documentation available at: ./docs/"
```

Make executable:
```bash
chmod +x /home/jbyrd/repos/ansai-landing/build.sh
```

Update Netlify build command in `netlify.toml`:

```toml
[build]
  command = "./build.sh"
  publish = "."
```

---

## 🎨 Styling the Documentation Button

### Option A: Prominent Header Button

Add to index.html after logo:

```html
<div class="header-nav">
    <a href="/docs/" class="doc-button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
        </svg>
        Documentation
    </a>
</div>
```

Style in style.css:

```css
.doc-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: transform 0.3s, box-shadow 0.3s;
}

.doc-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}
```

### Option B: Banner Above Hero

```html
<div class="announcement-banner">
    <div class="container">
        <span>📚 New: Comprehensive documentation now available</span>
        <a href="/docs/" class="banner-link">Read the docs →</a>
    </div>
</div>
```

```css
.announcement-banner {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1rem 0;
    text-align: center;
}

.banner-link {
    color: white;
    text-decoration: underline;
    margin-left: 1rem;
    font-weight: 600;
}
```

---

## 📊 Final Directory Structure

### Option 1: Subdirectory (Recommended)
```
ansai-landing/
├── index.html           # Landing page
├── style.css
├── script.js
├── docs/                # Documentation (built from MkDocs)
│   ├── index.html
│   ├── assets/
│   ├── search/
│   └── ...
├── netlify.toml
└── build.sh
```

### Option 2: Separate Subdomain
```
ansai.dev                # Landing page (ansai-landing repo)
docs.ansai.dev           # Documentation (ansai/docs repo)
```

---

## 🚀 Quick Deploy (Option 1)

Run these commands to deploy with Documentation tab:

```bash
# 1. Build docs
cd /home/jbyrd/ansai/docs
pip install mkdocs-material mkdocs-git-revision-date-localized-plugin mkdocs-minify-plugin mkdocs-print-site-plugin
mkdocs build

# 2. Copy to landing page
cd /home/jbyrd/repos/ansai-landing
rm -rf docs
cp -r /home/jbyrd/ansai/docs/site docs

# 3. Add navigation (manual edit to index.html)
# Add button: <a href="/docs/" class="btn btn-primary">Documentation</a>

# 4. Deploy
git add .
git commit -m "Add Documentation section"
git push origin main
```

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Landing page loads: `https://ansai.dev`
- [ ] Documentation loads: `https://ansai.dev/docs/`
- [ ] Navigation button works
- [ ] Red Hat styling intact
- [ ] Search works in docs
- [ ] All doc pages load
- [ ] Mobile responsive
- [ ] Back to landing page works

---

## 🎯 Recommended Approach

**Use Option 1 (Subdirectory)** because:
- ✅ Single domain
- ✅ Unified deployment
- ✅ Simple navigation
- ✅ No DNS changes needed
- ✅ Easy to maintain

---

## 📞 Next Steps

1. **Choose option** (recommend Option 1)
2. **Build documentation** with `mkdocs build`
3. **Update landing page** with Documentation button
4. **Deploy to Netlify**
5. **Verify** everything works

---

## 🎬 Ready to Deploy!

Execute the Quick Deploy commands above to add the Documentation tab to ansai.dev now! 🚀

