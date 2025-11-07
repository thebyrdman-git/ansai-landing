# 🔧 Netlify Configuration Fix

## Issue

The `/docs/` path is serving a different React app instead of our MkDocs documentation.

## Solution

### Option 1: Update Netlify Site Settings (Recommended)

1. **Go to Netlify Dashboard**: https://app.netlify.com
2. **Select your ansai.dev site**
3. **Go to Site Settings → Build & Deploy → Build settings**
4. **Update settings**:
   - Base directory: (leave empty)
   - Build command: (leave empty)
   - Publish directory: `.` (root)
5. **Deploy Settings → Deploy notifications**: Enable if desired
6. **Trigger a new deploy**:
   - Go to "Deploys"
   - Click "Trigger deploy" → "Clear cache and deploy site"

### Option 2: Use netlify.toml (Already Added)

The `netlify.toml` file has been added with proper configuration. Just redeploy.

### Option 3: Check for Multiple Sites

If you have multiple Netlify sites:
- One for landing page (root)
- One for docs

**Merge them** by:
1. Delete the separate docs site
2. Use the single landing page site
3. Docs will be served from `/docs/` directory

## Quick Fix Commands

```bash
cd /home/jbyrd/repos/ansai-landing

# Force rebuild and redeploy
./ansai build
./ansai sync  
./ansai push "Fix Netlify docs configuration"

# Or use Netlify CLI
netlify deploy --prod --dir=.
```

## Verify

After redeploying, check:
- https://ansai.dev → Landing page
- https://ansai.dev/docs/ → MkDocs documentation

## Current Structure

```
ansai-landing/
├── index.html              ← Landing page (root)
├── style.css
├── script.js
├── docs/                   ← MkDocs documentation
│   ├── index.html          ← Should serve at /docs/
│   ├── 01-introduction/
│   ├── 18-lightspeed/
│   ├── 20-workflow-catalog/
│   └── ... (all docs)
└── netlify.toml            ← Netlify configuration
```

The docs should be accessible at `https://ansai.dev/docs/`.

## If Still Blank

1. **Check Netlify logs** for errors
2. **Verify deploy preview URL** works first
3. **Clear browser cache**
4. **Check for conflicting redirects** in Netlify settings

## Support

If the issue persists:
1. Check Netlify deploy logs
2. Verify the GitHub repository is connected
3. Ensure branch is set to `main`
4. Check for any custom deployment scripts

