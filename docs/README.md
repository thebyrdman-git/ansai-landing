# Ansai Documentation

> Comprehensive documentation for the Ansai Ansible automation framework

## 📚 Documentation Structure

This repository contains the complete documentation for Ansai, structured as a web-based developer and user manual suitable for **ansai.dev**.

### Available Chapters

✅ **Core Documentation** (Created)
- `index.md` - Main landing page and navigation
- `01-introduction.md` - Framework introduction and philosophy
- `18-lightspeed.md` - Ansible Lightspeed convergence opportunities
- `20-workflow-catalog.md` - Complete catalog of all 29 workflows

🚧 **Planned Chapters** (To be created)
- `02-quickstart.md` - Quick start guide
- `03-installation.md` - Installation and setup
- `04-architecture.md` - Architecture deep dive
- `05-workflows.md` - Workflow design patterns
- `06-interactive.md` - Interactive playbook design
- `07-development.md` - Development environment
- `08-testing.md` - Testing and quality
- `09-cli-patterns.md` - CLI design patterns
- `10-api-integration.md` - API integration guide
- `11-security.md` - Security and secrets management
- `12-deployment.md` - Production deployment
- `13-service-orchestration.md` - Systemd integration
- `14-monitoring.md` - Monitoring and observability
- `15-enterprise.md` - Enterprise adoption
- `16-automation-as-code.md` - Infrastructure as Code
- `17-ai-integration.md` - AI/ML integration points
- `19-configuration.md` - Configuration reference
- `21-best-practices.md` - Best practices
- `22-reference.md` - Glossary and FAQ

## 🎯 Target Audiences

### 1. **Ansible Lightspeed Team**
- **Focus Chapters**: 18 (Lightspeed Convergence), 20 (Workflow Catalog), 04 (Architecture)
- **Key Value**: Pattern library, training data opportunities, integration points

### 2. **Developers**
- **Focus Chapters**: 01 (Introduction), 07 (Development), 08 (Testing), 09 (CLI Patterns)
- **Key Value**: Code patterns, best practices, extensibility

### 3. **Product Managers**
- **Focus Chapters**: 01 (Introduction), 15 (Enterprise), 18 (Lightspeed), 21 (Best Practices)
- **Key Value**: Use cases, adoption strategies, roadmap

### 4. **System Administrators**
- **Focus Chapters**: 03 (Installation), 12 (Deployment), 13 (Orchestration), 14 (Monitoring)
- **Key Value**: Production deployment, operations, troubleshooting

## 🌐 Building for ansai.dev

### Option 1: Static Site Generator (Recommended)

#### Using MkDocs
```bash
# Install MkDocs
pip install mkdocs mkdocs-material

# Create mkdocs.yml configuration
mkdocs new .

# Serve locally
mkdocs serve

# Build for production
mkdocs build

# Deploy to ansai.dev
mkdocs gh-deploy
```

#### Using Docusaurus
```bash
# Install Docusaurus
npx create-docusaurus@latest ansai-docs classic

# Move markdown files
cp *.md docs/

# Serve locally
npm start

# Build for production
npm run build

# Deploy to ansai.dev
npm run deploy
```

#### Using Hugo
```bash
# Install Hugo
# See: https://gohugo.io/getting-started/installing/

# Create new site
hugo new site ansai-docs

# Add theme
cd ansai-docs
git init
git submodule add https://github.com/alex-shpak/hugo-book themes/hugo-book

# Move markdown files
cp ../*.md content/docs/

# Serve locally
hugo server

# Build for production
hugo
```

### Option 2: GitHub Pages

```bash
# 1. Push to GitHub repository
git init
git add .
git commit -m "Initial documentation"
git remote add origin https://github.com/yourusername/ansai-docs.git
git push -u origin main

# 2. Enable GitHub Pages in repository settings
# Settings → Pages → Source: main branch /docs folder

# 3. Access at https://yourusername.github.io/ansai-docs/
```

### Option 3: Simple HTTP Server

```bash
# Install markdown renderer
npm install -g markdown-http-server

# Serve documentation
markdown-http-server --port 8000 --dir .

# Access at http://localhost:8000
```

## 📝 Documentation Standards

### Markdown Guidelines

1. **Headings**: Use ATX-style headings (`#`, `##`, etc.)
2. **Code Blocks**: Specify language for syntax highlighting
3. **Links**: Use relative links between chapters
4. **Images**: Store in `/images` directory (to be created)
5. **Tables**: Use GitHub Flavored Markdown tables

### Chapter Structure

Each chapter should include:
```markdown
# Chapter N: Title

[← Back to Index](index.md) | [Previous: Chapter N-1](N-1.md) | [Next: Chapter N+1 →](N+1.md)

---

## Overview
Brief chapter description

## Sections
Main content organized by sections

---

[← Back to Index](index.md) | [Previous: Chapter N-1](N-1.md) | [Next: Chapter N+1 →](N+1.md)

**Chapter N of 22** | [View All Chapters](index.md#documentation-structure)
```

### Code Examples

Always provide:
- **Context**: What the code does
- **Usage**: How to run it
- **Expected Output**: What to expect
- **Notes**: Any caveats or requirements

Example:
````markdown
**Example: Deploy Service**

```bash
# Deploy the sync service
ansible-playbook ansible/playbooks/ansai-deploy-sync.yml

# Expected output:
# ✅ Service deployed successfully
# ✅ Timer enabled
# Next sync: 2025-11-07 06:00:00
```

**Note**: Requires `ansai-setup.yml` to be run first.
````

## 🎨 Styling Guide

### Icons
- ✅ Success / Completed
- ❌ Error / Failed
- ⚠️ Warning / Caution
- 📦 Installation / Package
- 🔧 Configuration / Settings
- 🚀 Deployment / Launch
- 📊 Statistics / Metrics
- 🔐 Security / Credentials
- 📝 Logging / Documentation
- 💻 Development / Code
- 🏗️ Architecture / Structure
- 🎯 Goal / Purpose
- 📚 Documentation / Learning

### Color Conventions (for syntax highlighting)

- **Green**: Success messages, completed tasks
- **Red**: Errors, failures, warnings
- **Yellow**: Cautions, important notes
- **Blue**: Information, navigation
- **Cyan**: Commands, code snippets
- **Purple**: Headers, sections

## 🔍 Search and Navigation

### Planned Features

1. **Full-Text Search**
   - Implement with Algolia DocSearch
   - Or use lunr.js for client-side search

2. **Navigation**
   - Sidebar with chapter list
   - Breadcrumbs for current location
   - Next/Previous chapter links
   - "Scroll to top" button

3. **Cross-References**
   - Auto-generated links between related chapters
   - Glossary term pop-ups
   - Code example references

## 📊 Documentation Metrics

### Current Status (Nov 2025)

- **Chapters Written**: 4 of 22 (18%)
- **Word Count**: ~15,000 words
- **Code Examples**: 50+
- **Diagrams**: 5+
- **Target Completion**: January 2026

### Priority Chapters (Next to Write)

1. **Chapter 02: Quick Start** - Get users started fast
2. **Chapter 04: Architecture** - Technical deep dive
3. **Chapter 07: Development** - Developer guide
4. **Chapter 15: Enterprise** - Adoption strategies

## 🤝 Contributing

### Adding Content

1. Create new chapter file: `NN-chapter-name.md`
2. Follow chapter structure template
3. Add to index.md navigation
4. Update this README with chapter status

### Improving Existing Content

1. Fix typos or errors
2. Add code examples
3. Improve explanations
4. Add diagrams or images

### Review Process

1. Technical accuracy check
2. Grammar and spelling review
3. Code example validation
4. Link verification

## 🔗 External Links

- **Ansible Documentation**: https://docs.ansible.com
- **Ansible Lightspeed**: https://www.redhat.com/en/technologies/management/ansible/ansible-lightspeed
- **Ansible Best Practices**: https://docs.ansible.com/ansible/latest/tips_tricks/ansible_tips_tricks.html
- **YAML Specification**: https://yaml.org/spec/

## 📞 Contact

- **Documentation Issues**: [GitHub Issues](#)
- **Technical Questions**: [GitHub Discussions](#)
- **General Inquiries**: [Contact Form](#)

## 📄 License

This documentation is licensed under [MIT License](LICENSE).

---

**Documentation Version**: 1.0  
**Last Updated**: November 7, 2025  
**Maintained by**: Ansai Community

