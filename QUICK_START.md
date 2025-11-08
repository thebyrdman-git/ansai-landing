# Quick Start: Consolidated Repository

## Run This Command

```bash
cd /home/jbyrd/repos/ansai-landing
bash consolidate.sh
```

This will:
- Copy docs from `/home/jbyrd/ansai/docs` → `/home/jbyrd/repos/ansai-landing/docs`
- Commit all changes
- Push to GitHub

## After Pushing, Update Netlify

Go to: `https://app.netlify.com/sites/ansai-enterprise/configuration/deploys`

1. Click **"Link to a different repository"**
2. Select: `thebyrdman-git/ansai-landing`
3. Update **Build settings**:
   - **Build command**: `pip install mkdocs-material mkdocs-git-revision-date-localized-plugin mkdocs-print-site-plugin && python -m mkdocs build`
   - **Publish directory**: `site`
4. Save and trigger a new deploy

## Result

- ✅ `ansai.dev` - Landing page (from root)
- ✅ `docs.ansai.dev` - Documentation (from site/)
- ✅ Single repository to maintain
- ✅ No more broken logo icons!

See `CONSOLIDATED_SETUP.md` for full documentation.

