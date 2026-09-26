# PassKarlo — Antigravity Agent Instructions

## 1. Mission

Build PassKarlo as a modern, premium, responsive education discovery platform while preserving the project's documented business scope and the supplied Figma design.

The Figma design is the visual source of truth. The project documentation is the business and technical source of truth.

## 2. Mandatory operating rules

Before making significant changes:

1. Read `AGENTS.md`.
2. Read the relevant documentation under `docs/`.
3. Inspect the existing implementation before creating new components.
4. Reuse existing components instead of duplicating them.
5. Do not invent business requirements when documentation is silent.
6. Do not implement deferred functionality simply because it may be useful later.
7. Keep UI/presentation, application/use cases, domain, data access, and infrastructure concerns separated.
8. Keep database access out of presentation components.
9. Prefer server-side functionality where appropriate in Next.js App Router.
10. Keep the application responsive and accessible.
11. Avoid unnecessary dependencies.
12. Never place secrets in source code.
13. Use TypeScript.
14. Preserve the Figma design closely.
15. Do not replace Figma decisions with generic AI-generated UI.

## 3. V1 hard boundaries

### Search

The search bar is UI-only in V1.

Implement:
- Placeholder text
- Correct visual styling
- Correct dimensions
- Correct positioning
- Correct responsive behavior
- Reusable component structure

Do NOT implement:
- Search API
- Database search
- Search filtering
- Search ranking
- Search indexing
- AI search
- URL-based search state
- Backend search queries
- Search suggestions
- Autocomplete

The component should be structured so functionality can be added later without rebuilding its UI.

### Add Your Institute

V1 is an informational popup/modal only.

Flow:
Visitor → Add Your Institute → Information Popup → External Payment → PassKarlo Team → Admin Panel → Create Institute → Publish

Do NOT implement:
- Public institute submission form
- Institute owner registration
- Institute owner login
- Institute owner dashboard
- Automated payment integration
- Payment gateway
- Payment webhooks
- Automatic payment verification
- Institute claim system
- Public submission approval workflow
- Automatic publication
- Payment-to-publication pipeline

Payment remains outside the PassKarlo V1 application.

## 4. Scope discipline

If a requested change conflicts with these rules, stop and identify the conflict rather than silently expanding scope.

Do not create database entities merely because they might be useful someday.

Do not add AI-powered product features in V1 unless explicitly requested.

## 5. Visual implementation

Use the supplied Figma as the source of truth for:
- Layout
- Spacing
- Typography
- Colors
- Borders
- Radius
- Shadows
- Icons
- Images
- Responsive behavior
- Component states
- Content shown in the design

Do not infer a different design from the TargetStudy reference.

## 6. Quality

Every implemented page should be:
- Responsive
- Keyboard accessible
- Semantically structured
- Visually faithful to Figma
- Reusable where appropriate
- Free from unnecessary client-side state
- Free from console errors
- Type-safe

Before considering a UI task complete, compare the implementation against the supplied Figma frame at the intended viewport sizes.

## 7. Documentation discipline

When architecture or product decisions change:
- Update the relevant documentation.
- Record important decisions in `docs/DECISIONS.md`.
- Do not leave implementation-only assumptions undocumented if they materially affect future work.
