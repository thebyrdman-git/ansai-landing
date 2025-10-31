# Ansai Landing Page

**Landing page for ansai.dev** - Ansible automation for AI development

## 🚀 Deployment

This site is deployed to GitHub Pages at **ansai.dev**

### Setup

1. **Create GitHub Repository:**
   ```bash
   # Create repo on GitHub: ansai-landing (or any name)
   # Make it public
   ```

2. **Push Code:**
   ```bash
   cd /home/jbyrd/repos/ansai-landing
   git init
   git add .
   git commit -m "Initial landing page for ansai.dev"
   git branch -M main
   git remote add origin git@github.com:thebyrdman-git/ansai-landing.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Pages section
   - Source: Deploy from branch `main` / root
   - Custom domain: `ansai.dev` (already in CNAME file)
   - Wait 1-2 minutes for deployment

4. **Configure Email Signup (Formspree):**
   - Go to https://formspree.io
   - Create free account
   - Create new form
   - Copy form ID
   - Update `index.html` line with form action:
     ```html
     <form class="signup-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
     ```

## 📝 Files

- `index.html` - Main landing page
- `style.css` - Styles (modern, minimal, responsive)
- `script.js` - Interactive features
- `CNAME` - Custom domain configuration for GitHub Pages

## 🎨 Brand Colors

- Primary: #3b82f6 (Blue)
- Secondary: #8b5cf6 (Purple)
- Gradient: Blue → Purple

## ✏️ Editing

### Update Content

Edit `index.html` to change:
- Hero title/subtitle
- Features
- Use cases
- Contact email

### Update Styles

Edit `style.css` for design changes.

### Deploy Updates

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Pages will auto-deploy in ~1 minute.

## 🔗 DNS

DNS already configured in Cloudflare:
- CNAME: ansai.dev → thebyrdman-git.github.io
- Proxied through Cloudflare (free SSL)

## 📧 Email Collection

Emails will be sent to your Formspree account. You can:
- Export to CSV
- Connect to Mailchimp
- Connect to ConvertKit
- Get email notifications

## 🎯 Next Steps

- [ ] Create GitHub repo
- [ ] Push code
- [ ] Enable GitHub Pages
- [ ] Set up Formspree
- [ ] Test email signup
- [ ] Share on social media!

---

**Built for the AI community** 🤖⚡

