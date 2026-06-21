<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project workflow

- Do not push to GitHub unless the user explicitly asks to push.
- For site changes, implement locally first and keep the local dev server available for review.
- Wait for the user to inspect the local version and approve the result before committing/pushing deployment changes.
- Do not perform extra/unrequested cleanup, refactors, or deployment actions.
