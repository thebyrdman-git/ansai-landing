# 🔗 Link Repository to Netlify (Manual Step Required)

## Issue

The repository is **not linked** to your Netlify site yet. This is why the docs aren't deploying automatically.

## Solution: Link Repository to Netlify

### Option 1: Link via Netlify CLI (Recommended)

```bash
cd /home/jbyrd/repos/ansai-landing

# Link to existing site
netlify link

# When prompted, choose:
# 1. "Use current git remote origin"
# OR
# 2. "Search by full or partial project name" → search for "ansai"
# OR
# 3. If ansai.dev doesn't exist yet, create it:
netlify init
```

After linking, your future pushes to `main` will auto-deploy!

### Option 2: Link via Netlify Dashboard (Alternative)

1. **Go to**: https://app.netlify.com
2. **Click**: "Add new site" → "Import an existing project"
3. **Connect to Git**: Choose GitHub
4. **Select repository**: `thebyrdman-git/ansai-landing`
5. **Configure**:
   - Base directory: (leave empty)
   - Build command: (leave empty)  
   - Publish directory: `.`
   - Site name: `ansai` (or your preferred subdomain)
6. **Custom domain**: Add `ansai.dev` if not already configured
7. **Deploy**: Click "Deploy site"

---

## Option 3: Quick Deploy (Without Auto-Deploy)

If you just want to deploy NOW without setting up auto-deploy:

```bash
cd /home/jbyrd/repos/ansai-landing

# Deploy directly (one-time)
netlify deploy --prod --dir=. --site=ansai

# Or if you need to create the site first:
netlify deploy --prod --dir=.
```

---

## Verify After Linking

Once linked, check:

```bash
# Check link status
netlify status

# Trigger a deploy
netlify deploy --prod

# Or just push to GitHub (if auto-deploy is configured)
git push origin main
```

---

## Current Status

- ✅ Code is in GitHub: https://github.com/thebyrdman-git/ansai-landing
- ✅ Documentation is built and ready (`docs/` folder)
- ✅ `netlify.toml` configuration is in place
- ❌ **Repository not linked to Netlify site** ← **YOU ARE HERE**
- ⏳ Waiting for Netlify linkage

---

## What Happens After Linking?

1. ✅ Every push to `main` auto-deploys
2. ✅ Netlify builds and serves your site
3. ✅ `ansai.dev` will serve the landing page
4. ✅ `ansai.dev/docs/` will serve the MkDocs documentation

---

## Alternative: Use Ansai CLI After Linking

Once linked, you can use:

```bash
cd /home/jbyrd/repos/ansai-landing

# One command to deploy everything
./ansai netlify
```

This will:
- Build docs
- Sync to landing page
- Deploy to Netlify

---

## Need Help?

The Netlify CLI should be able to detect your existing ansai.dev site and link to it automatically. Just run:

```bash
cd /home/jbyrd/repos/ansai-landing
netlify link
```

And follow the prompts!

