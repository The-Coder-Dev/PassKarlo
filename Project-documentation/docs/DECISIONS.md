# PassKarlo — Decision Log

## D-001 — Figma is visual source of truth

**Status:** Confirmed

The Figma design controls visual decisions. The implementation must follow the supplied Figma rather than inventing a different UI.

## D-002 — Search is placeholder-only in V1

**Status:** Confirmed

The search bar is implemented visually only. Search functionality is deferred.

## D-003 — Add Your Institute is informational in V1

**Status:** Confirmed

The CTA opens an informational popup/modal. There is no public submission workflow.

## D-004 — Payment is external in V1

**Status:** Confirmed

PassKarlo does not process or automatically verify payments in the initial implementation.

## D-005 — Institute creation is admin-managed

**Status:** Confirmed

After external payment and information collection, the PassKarlo team manually creates and reviews the institute through the admin panel.

## D-006 — Simple publication lifecycle

**Status:** Confirmed

Initial lifecycle is:

`Draft → Published`

## D-007 — Modular monolith

**Status:** Confirmed

Use a modular monolith rather than prematurely introducing microservices.

## D-008 — Documentation-first development

**Status:** Confirmed

Antigravity should read documentation before significant changes and should not invent requirements already addressed by documentation.

## D-009 — AI product features are future scope

**Status:** Confirmed

AI may eventually power discovery/recommendation/search, but it is not a random V1 UI feature.

## D-010 — Books platform remains separate

**Status:** Confirmed

`books.passkarlo.com` is a separate platform and should not unnecessarily complicate the primary PassKarlo application.

## Decision template

When a new architectural/product decision is made:

### D-XXX — Title

**Status:** Proposed / Confirmed / Superseded

**Context:** Why the decision is needed.

**Decision:** What was decided.

**Consequences:** What this changes or prevents.

**Scope:** V1 / Future / Both
