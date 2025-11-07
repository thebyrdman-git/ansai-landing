# 🔧 Fix Netlify Repository Connection

## Issue Found

Your Netlify site `ansai.dev` is connected to the **WRONG repository**:

```
❌ Current:  github.com/thebyrdman-git/ansai-demo
✅ Should be: github.com/thebyrdman-git/ansai-landing
```

This is why the documentation isn't updating!

---

## Solution: Update Repository in Netlify

### Method 1: Via Netlify Dashboard (Recommended)

1. **Go to**: https://app.netlify.com/sites/ansai-enterprise/configuration/general

2. **Build & deploy** → **Link repository**
   - Click "Link to a different repository"
   - Or go to: **Site configuration** → **Build & deploy** → **Link site to Git**

3. **Select new repository**: `thebyrdman-git/ansai-landing`

4. **Configure build settings**:
   - Base directory: (leave empty)
   - Build command: (leave empty)
   - Publish directory: `.`

5. **Save** and **trigger new deploy**

---

### Method 2: Via Netlify CLI

```bash
cd /home/jbyrd/repos/ansai-landing

# Link this repo to the existing site
netlify link --id d9fd11b9-64df-45f6-9b83-4d93f61061c8

# Trigger a deploy
netlify deploy --prod
```

---

### Method 3: Quick Fix - Deploy Directly

If you just want to deploy NOW without changing the repo connection:

```bash
cd /home/jbyrd/repos/ansai-landing

# Deploy directly to the site
netlify deploy --prod --site ansai-enterprise

# Or with site ID
netlify deploy --prod --site d9fd11b9-64df-45f6-9b83-4d93f61061c8
```

---

## What Happens After Fix?

Once you update the repository connection:

1. ✅ Future pushes to `ansai-landing` will auto-deploy
2. ✅ Documentation will appear at `ansai.dev/docs/`
3. ✅ Landing page will update automatically
4. ✅ Everything will work as expected!

---

## Quick Links

- **Netlify Dashboard**: https://app.netlify.com/sites/ansai-enterprise
- **Site Settings**: https://app.netlify.com/sites/ansai-enterprise/configuration/general
- **Deploys**: https://app.netlify.com/sites/ansai-enterprise/deploys
- **Domain**: https://ansai.dev

---

## Site Details

- **Site Name**: `ansai-enterprise`
- **Site ID**: `d9fd11b9-64df-45f6-9b83-4d93f61061c8`
- **URL**: https://ansai.dev
- **Current Repo**: github.com/thebyrdman-git/ansai-demo ❌
- **Should Be**: github.com/thebyrdman-git/ansai-landing ✅

---

## Verification

After updating, verify:

```bash
# Check site status
netlify status

# Check what's deployed
curl -I https://ansai.dev/docs/

# Verify content
curl -s https://ansai.dev/docs/ | grep "Ansai Automation Framework"
```

---

## Need Help?

The quickest fix is to go to:
https://app.netlify.com/sites/ansai-enterprise/configuration/deploys

And update the "Repository" to point to `ansai-landing` instead of `ansai-demo`.

