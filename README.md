# Ejiga Peter: GitHub Pages portfolio

This is a plain HTML, CSS, and JavaScript website. No install, build step, API key,
or backend is needed.

## Publish these files

1. Extract this ZIP on your computer.
2. Upload its contents directly into your existing GitHub Pages publishing folder.
   `index.html` must be at that folder's top level, alongside `style.css`, `app.js`,
   and the `assets` folder. Upload the extracted files, not the ZIP itself.
3. Commit the changes to the branch your site already publishes from. Keep any
   existing custom-domain `CNAME` file and relevant repository configuration.
4. If Pages is not already configured, go to Settings > Pages > Build and
   deployment. Choose Deploy from a branch, select the branch containing these
   files, select /(root), and save.

Official instructions:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## File map

- index.html: profile, career history, eight projects, and 19 research outputs.
- style.css: responsive design, print layout, and reduced-motion preferences.
- app.js: navigation, project filters, project dialogs, publication search/year
  filters, and clipboard behavior.
- assets/: CV, profile photo, project figures, favicon, and social sharing card.
- .nojekyll: bypasses Jekyll processing for this static site.

## A single-file option is also available

The separately supplied standalone index.html embeds the styling, scripts, images,
and CV. To use that version, upload just that file in place of your existing
index.html. The separate-file ZIP is easier to maintain; the standalone file is
simpler to upload.

## Update your content

Edit index.html for the main content and research output records. Edit the
`projects` object in app.js for project overview text. The CV is the original
Ejiga_Peter_Resume.pdf supplied in this conversation.

Absolute social/identity metadata currently uses https://ejigsonpeter.github.io/.
If you publish under a different address or a project repository, change og:url,
og:image, and the Person JSON-LD url. All ordinary asset paths are relative and
work under either a root site or a project site.

## Sources and status

- Supplied CV and original portfolio content.
- Supplied Google Scholar screenshot: 121 citations, h-index 6, i10-index 5,
  and 19 listed outputs. Snapshot dated October 20, 2026; not live counters.
- Current public GitHub READMEs from Ejigsonpeter and essentric-coder.
- Direct publisher/arXiv links where resolved. Other research records link to a
  Google Scholar title search.

The current agent study is a journal manuscript in preparation. Its repository
reports approximately 3,300 rollouts across five model families and five domains.
This updates the earlier phase described in the CV. StopCheck is a scripted local
pilot without live-model or external stop experiments. Caliper is an evaluation
MVP. The synthetic CT project reports empirical privacy, not a formal DP guarantee.

Sources:
https://github.com/Ejigsonpeter/agent-failure-legibility
https://github.com/essentric-coder/stopcheck
https://github.com/Ejigsonpeter/caliper
https://github.com/Ejigsonpeter/SynPolySegNet
https://github.com/Ejigsonpeter/themis
https://github.com/Ejigsonpeter/Empirical-Privacy-Without-Differential-Privacy

No analytics, tracking pixels, external fonts, or simulated form submissions are
included. The email link opens a mail application. The copy button selects the
email for manual copying if clipboard permission is unavailable.

## Validation

JavaScript syntax, HTML resource/anchor/ARIA references, project overview mappings,
publication records, embedded-asset integrity, and CV byte identity are checked.
No interactive browser rendering was available in this environment.
