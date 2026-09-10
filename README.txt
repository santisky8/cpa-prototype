CPA CANADA CONCEPT REDESIGN (internal prototype)
================================================

WHAT THIS IS
Five-page interactive concept: index.html, become-a-cpa.html, learn.html,
resources.html, article.html, plus shared styles, scripts and logo assets.
Full English/French toggle, dark mode, scripted "CPA Assist" chatbot,
pathway-finder wizard, and a filterable course catalogue (the unified
CPAstore concept). Language and theme choices persist between pages.

HOW TO PUT IT ONLINE
Netlify repository settings:
- Build command: leave empty
- Publish directory: .
- Base directory: leave empty
- Production branch: `release`

The included netlify.toml applies these settings automatically when this
repository is connected to Netlify. The site is also compatible with Netlify
Drop: upload this folder's contents, including index.html at the top level.

RELEASE CADENCE
Use `main` for local work and set Netlify's production branch to `release`.
Changes pushed to `main` will not publish the website. When you are ready to
publish, run this from the repository root no more than once every 48 hours:

  git fetch origin
  git switch release
  git merge main
  git push origin release
  git switch main

Netlify will deploy only the `release` branch. Change the production branch in
Netlify under Project configuration > Build & deploy > Continuous deployment.

NOTES
- The chatbot is a scripted demo by default. The deployed prototype now
  includes optional GitHub-main retrieval, file attachments for the current
  browser session, and a secure Netlify Function integration for AI.
- All photos are labelled placeholder slots showing where imagery goes.
- Content is mock content for demonstration. Not affiliated with or
  endorsed by CPA Canada. Keep the URL unlisted and take it down after
  the pitch.
- Have a francophone review the French copy before wider sharing.

OPTIONAL AI CONFIGURATION
Set these Netlify environment variables for live AI answers:
- OPENAI_API_KEY: server-side provider key; never put this in HTML or JS
- OPENAI_MODEL: optional model name, default gpt-4o-mini
- OPENAI_BASE_URL: optional OpenAI-compatible chat completions endpoint

Optional repository variables:
- GITHUB_REPOSITORY: owner/name, default santisky8/cpa-prototype
- GITHUB_REF: branch or tag, default main
- GITHUB_TOKEN: optional for private repositories or higher API limits

Without OPENAI_API_KEY, repository loading and file attachments still work,
but the assistant uses its built-in scripted responses.
