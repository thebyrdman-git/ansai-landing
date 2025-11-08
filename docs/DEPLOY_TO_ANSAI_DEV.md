# Deploy Documentation to ansai.dev

## 🎯 Red Hat Style Documentation

The documentation is now styled after [Red Hat's documentation site](https://docs.redhat.com/en/documentation/red_hat_ansible_automation_platform/2.6) with:

- ✅ Red Hat color scheme and typography
- ✅ Tabbed navigation
- ✅ Category-based organization
- ✅ Professional enterprise styling
- ✅ Mobile responsive design
- ✅ Dark mode support

---

## 🚀 Deploy to Netlify (ansai.dev)

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub:**
```bash
cd /home/jbyrd/ansai
git add docs/
git commit -m "Add Red Hat-style documentation"
git push origin main
```

2. **Configure Netlify:**
   - Login to [Netlify](https://app.netlify.com)
   - Site: ansai.dev
   - Build settings:
     - **Base directory:** `docs/`
     - **Build command:** `pip install mkdocs-material mkdocs-git-revision-date-localized-plugin mkdocs-minify-plugin mkdocs-print-site-plugin && mkdocs build`
     - **Publish directory:** `docs/site/`

3. **Deploy:**
   - Netlify will auto-deploy on push
   - Or manually trigger: "Trigger deploy" button

### Option 2: Manual Deploy via Netlify CLI

```bash
cd /home/jbyrd/ansai/docs

# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Link to site
netlify link --name ansai-dev

# Build and deploy
mkdocs build
netlify deploy --prod --dir=site/
```

### Option 3: Drag and Drop Deploy

```bash
cd /home/jbyrd/ansai/docs

# Build the site
pip install mkdocs-material mkdocs-git-revision-date-localized-plugin mkdocs-minify-plugin mkdocs-print-site-plugin
mkdocs build

# Then:
# 1. Go to https://app.netlify.com/drop
# 2. Drag the 'site/' folder
# 3. Configure custom domain: ansai.dev
```

---

## 📁 File Structure

```
/home/jbyrd/ansai/docs/
├── mkdocs.yml                  ← Red Hat-style configuration
├── netlify.toml                ← Netlify deployment config
├── index.md                    ← Home page
├── 01-introduction.md          ← Introduction
├── 18-lightspeed.md           ← Ansible Lightspeed chapter
├── 20-workflow-catalog.md     ← Workflow catalog
│
├── stylesheets/
│   ├── extra.css
│   └── redhat.css              ← Red Hat styling
│
├── get-started/
│   └── index.md                ← Category index
│
├── core-concepts/
│   └── index.md                ← To be created
│
├── developer-guide/
│   └── index.md                ← To be created
│
├── administration/
│   └── index.md                ← To be created
│
├── enterprise/
│   └── index.md                ← To be created
│
└── reference/
    └── index.md                ← To be created
```

---

## 🎨 Red Hat Styling Features

### Color Scheme
- Primary: Red Hat Red (#ee0000)
- Accent: Dark Red (#a30000)
- Background: Professional black & white

### Typography
- Headings: Red Hat Display
- Body: Red Hat Text
- Code: Red Hat Mono

### Navigation
- Tabbed navigation (like Red Hat docs)
- Left sidebar with categories
- Breadcrumbs
- Version selector

### Components
- Category index pages
- Professional code blocks
- Styled admonitions
- Tables with hover effects
- Search functionality

---

## 🔍 Preview Locally

```bash
cd /home/jbyrd/ansai/docs

# Install dependencies
pip install mkdocs-material mkdocs-git-revision-date-localized-plugin mkdocs-minify-plugin mkdocs-print-site-plugin

# Serve locally
mkdocs serve

# Open: http://localhost:8000
```

---

## 📊 What's Deployed

### Current Documentation (4 chapters complete)
- ✅ **Index** - Landing page with navigation
- ✅ **Chapter 1: Introduction** - Framework overview
- ✅ **Chapter 18: Ansible Lightspeed** - Convergence opportunities
- ✅ **Chapter 20: Workflow Catalog** - Complete workflow reference

### Navigation Structure
- **Get Started** (3 chapters planned)
  - Introduction ✅
  - Quick Start 🚧
  - Installation 🚧

- **Core Concepts** (3 chapters planned)
  - Architecture 🚧
  - Workflow Design 🚧
  - Interactive Playbooks 🚧

- **Developer Guide** (4 chapters planned)
  - Development Environment 🚧
  - Testing & Quality 🚧
  - CLI Patterns 🚧
  - API Integration 🚧

- **Administration** (4 chapters planned)
  - Security & Secrets 🚧
  - Production Deployment 🚧
  - Service Orchestration 🚧
  - Monitoring 🚧

- **Enterprise** (4 chapters planned)
  - Enterprise Adoption 🚧
  - Automation as Code 🚧
  - AI/ML Integration 🚧
  - Ansible Lightspeed ✅

- **Reference** (4 chapters planned)
  - Configuration 🚧
  - Workflow Catalog ✅
  - Best Practices 🚧
  - Glossary & FAQ 🚧

---

## 🎯 Post-Deployment

### Verify Deployment
1. Visit: https://ansai.dev
2. Check navigation tabs work
3. Test search functionality
4. Verify Red Hat styling
5. Test mobile responsiveness

### Monitor
- Netlify deploy logs
- Google Analytics (if configured)
- User feedback

### Maintain
- Update documentation regularly
- Add new chapters as completed
- Keep styling consistent with Red Hat docs

---

## 🔗 Resources

- **Red Hat Documentation**: https://docs.redhat.com/en/
- **MkDocs Material**: https://squidfunk.github.io/mkdocs-material/
- **Netlify Docs**: https://docs.netlify.com/
- **Ansible Docs**: https://docs.ansible.com/

---

## 📞 Support

- Documentation issues: GitHub Issues
- Deployment problems: Check Netlify logs
- Styling questions: Review redhat.css

---

**Ready to deploy!** 🚀

Choose your deployment method above and push to ansai.dev.

