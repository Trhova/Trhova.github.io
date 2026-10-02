# Personal website refresh 2 October 2026

## Follow-up: preserve the original content

At Troels’ request, the homepage now returns to the original name, tagline, biography, areas of work and post wording. The oversized illustrated hero and newly written research sections were removed. The portrait is 180 pixels on desktop and 128 pixels on mobile. Resource descriptions were restored, and the CV page returns to a simple request link instead of the unsolicited expanded biography. The AI-training claims and added AI positioning were removed from the rendered site. The refreshed palette, typography, responsive navigation and updated publication records remain.

The production build passed. Chromium checks of the four changed pages at 1440, 390 and 320 pixels passed without overflow, broken images or runtime errors. The homepage passed automated axe A/AA checks. Desktop and mobile screenshots were visually inspected before publishing. [Revised desktop preview](assets/revised-home-desktop-2026-10-02.png), [revised mobile preview](assets/revised-home-mobile-2026-10-02.png), [revision checks](assets/revision-checks-2026-10-02.json).

The initial design and review below are retained as historical context; the follow-up above describes the published revision.

The initial site refresh presents Troels' research, current Co-PI role and scientific output through a new homepage and consistent supporting pages. The design uses a plum, coral and warm-paper palette, an original microbial illustration, a personal portrait, and a publication list grouped by year. The reference was [Pinilla-Redondo Lab](https://pinillaredondolab.com/); its illustrations, photographs, branding and text were not reused.

## Content

- Updated the biography and replaced the CV placeholder with research experience and education from Troels' current CV. The site includes his AI work alongside experimental biology and computational analysis. The job-specific application and its private supporting notes are not published here.
- Retained existing writing, resources, reading recommendations and the RNA-seq guide. Simplified their presentation and removed unpublished guide teasers from the landing page, while retaining the guide registry for future additions.
- Added the 2026 Gut Microbes and Frontiers in Immunology papers. Replaced the yeast-comparison preprint with its final iScience publication, giving ten distinct journal articles. Each citation links to its DOI, and Troels' name is highlighted in author lists.

## Publication checks

| Record | Decision and primary evidence |
| --- | --- |
| Gut Microbes 18, 2690687 | Added the published article, dated 30 June 2026. Title, authors and DOI checked against [the paper in PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC13336259/) and Crossref. |
| Frontiers in Immunology 17, 1925200 | Added the final publication from 29 September 2026. Used the final full-text title, which differs from the earlier abstract page and preprint. Checked [the publisher's full text](https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2026.1925200/full) and Crossref. |
| iScience 29(5), 115706 | Replaced the 2025 bioRxiv entry. Title, author order, volume, issue and DOI checked against [DTU's final publication record](https://orbit.dtu.dk/en/publications/genomic-and-phenotypic-comparisons-reveal-lineage-specific-traits/) and the PubMed record. |
| Existing papers | Retained the seven existing journal articles. Checked identifiers against the CV and Crossref where available, and filled in the MASLD article's volume and pages. Crossref rate-limited the EMBO Reports and iScience requests; the relevant publisher/institutional records supplied the verification. |

## Implementation and review

Navigation now works on mobile, with an explicit toggle, Escape handling and a skip link. The theme preference persists correctly across reloads. The sitemap includes every public page. The portrait and artwork are local assets; the original schematic is labelled as an illustration rather than experimental data.

Browser testing uncovered pre-existing invalid paragraph nesting in the RNA-seq MDX guide. The redundant wrappers were removed without changing its text. Narrow-screen layout fixes allow the pipeline overview to wrap and keep wide tables within their scrollable containers.

Validation completed against the production build before committing and publishing:

- `npm run build` passed, including TypeScript and lint checks.
- Chromium checked nine routes at 1440, 820, 390 and 320 pixels wide: all 36 checks passed, with no horizontal overflow, broken images or runtime errors. All ten homepage internal links returned successfully. Mobile navigation, Escape handling and theme persistence passed. See [browser results](assets/browser-review-2026-10-02.json).
- Automated axe checks found no WCAG A/AA violations on the nine routes. This is an automated check, not a complete accessibility certification. See [accessibility results](assets/accessibility-2026-10-02.json).
- Desktop and mobile screenshots were inspected visually, including the homepage, publications, CV and guide. Portrait cropping, narrow-screen typography and guide layout issues found during review were corrected.
- The ten publication DOI identifiers are unique. Removing redundant paragraph wrappers left the scientific guide's text unchanged. `git diff --check` passed.

Saved previews: [full desktop homepage](assets/home-desktop-2026-10-02.png), [mobile homepage](assets/home-mobile-2026-10-02.png), and [publications](assets/publications-2026-10-02.png).

## Scope of repository changes

The pre-existing untracked `MAINTENANCE_NOTES.md` is preserved and excluded from this change. No persistent agent instructions, deployment permissions, dependencies or automation schedules are changed.
