#!/bin/bash
set -e

echo "=========================================="
echo "Consolidating Ansai Landing + Docs"
echo "=========================================="

cd /home/jbyrd/repos/ansai-landing

echo ""
echo "Step 1: Copy docs directory..."
if [ -d "docs" ]; then
  echo "  Removing existing docs directory..."
  rm -rf docs
fi
cp -r /home/jbyrd/ansai/docs .
echo "  ✓ Copied $(ls -1 docs | wc -l) items"

echo ""
echo "Step 2: Verify files..."
ls -la docs/ | head -10
echo "  ..."
echo "  ✓ mkdocs.yml exists: $([ -f mkdocs.yml ] && echo 'YES' || echo 'NO')"
echo "  ✓ docs/ exists: $([ -d docs ] && echo 'YES' || echo 'NO')"
echo "  ✓ .gitignore exists: $([ -f .gitignore ] && echo 'YES' || echo 'NO')"

echo ""
echo "Step 3: Git status..."
git status --short | head -20

echo ""
echo "Step 4: Add all files..."
git add -A

echo ""
echo "Step 5: Commit..."
git commit -m "Consolidate landing page and documentation into single repo

- Added mkdocs.yml for documentation build
- Added docs/ directory with all documentation source
- Added netlify-docs.toml as reference for docs.ansai.dev
- Updated netlify.toml with build command
- Added .gitignore for site/ directory
- See CONSOLIDATED_SETUP.md for deployment instructions
" || echo "No changes to commit"

echo ""
echo "Step 6: Push to GitHub..."
git push origin main

echo ""
echo "=========================================="
echo "✅ CONSOLIDATION COMPLETE"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Update docs.ansai.dev Netlify site repository to 'ansai-landing'"
echo "2. Set build command: pip install mkdocs-material mkdocs-git-revision-date-localized-plugin mkdocs-print-site-plugin && mkdocs build"
echo "3. Set publish directory: site"
echo ""
echo "See CONSOLIDATED_SETUP.md for detailed instructions"

