# PassKarlo — Antigravity Handoff

## Read this first

1. `AGENTS.md`
2. `DOCUMENTATION-INDEX.md`
3. `docs/01-PRODUCT.md`
4. `docs/02-PRD.md`
5. `docs/04-BUSINESS-RULES.md`
6. `docs/05-ARCHITECTURE.md`
7. `docs/08-UI-UX.md`
8. `docs/14-FIGMA-IMPLEMENTATION.md`

Then inspect the actual Figma file before implementing the UI.

## Figma

https://www.figma.com/design/EdGmdM3nTgwOgDtfYlBA2l/PassKarlo

## Current target

Implement the initial PassKarlo UI.

### Must build

- Figma-faithful navigation
- Homepage
- Hero
- Visual search bar
- Institute UI shown in Figma
- Career UI shown in Figma
- Add Your Institute informational popup
- Responsive behavior
- Accessibility
- Reusable components
- Visual polish matching Figma

### Must not build

- Functional search
- Search API/backend
- Search indexing/ranking
- Autocomplete/suggestions
- Payment gateway
- Payment webhooks
- Automated payment verification
- Public institute submission
- Institute-owner account/dashboard
- Claim system
- Automated publication
- AI product features
- Speculative database tables

## Implementation sequence

1. Inspect repository.
2. Inspect Figma.
3. Inventory assets.
4. Map Figma components.
5. Establish only necessary design tokens.
6. Implement shared UI primitives.
7. Implement homepage.
8. Implement career/institute screens represented in Figma.
9. Implement Add Your Institute modal.
10. Implement responsive states.
11. Run visual QA against Figma.
12. Run type/build/lint checks.
13. Verify V1 scope boundaries.
14. Document any new material decisions.

## Critical principle

> Do not build complexity just because the product may need it someday.

Build today's requirement cleanly and leave clear extension points for tomorrow.
