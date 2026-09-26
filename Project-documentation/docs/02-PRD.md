# 02 — V1 Product Requirements Document

## Objective

Implement the initial PassKarlo UI accurately from Figma, with reusable components and responsive behavior, while intentionally keeping complex product functionality deferred.

## V1 requirements

### Navigation

Implement the navigation shown in the Figma design.

The supplied homepage screenshot shows:
- PassKarlo logo
- Home
- Exam Preparation
- Entrance Exam
- Career Options
- Contact
- Donate Book CTA

The exact final labels, order, spacing and states must be taken from the actual Figma file.

### Homepage

Implement the homepage sections present in Figma.

The supplied screenshot currently shows:
1. Header/navigation
2. Hero
3. Floating/overlapping search UI
4. Scholarship/course cards

Do not assume this screenshot represents every Figma frame. Inspect the complete Figma file before declaring the page complete.

### Search

UI only.

The placeholder shown in the supplied screenshot is:

`Search by City and Pincode (e.g., Mathura, 281001)`

The search button is visually present.

No search behavior is required in V1.

### Career UI

Build the career category/detail UI shown in Figma.

The documented conceptual career areas include:
- Agriculture
- Animation
- Arts
- Banking
- Basic Sciences
- Computer Science / IT
- Engineering
- Medicine
- Management
- Design
- Law
- Education
- Media
- Finance
- etc.

This taxonomy is not final and must not be hardcoded as a definitive product taxonomy unless Figma/product requirements explicitly confirm it.

### Institute UI

Build institute cards/grids/profiles shown in Figma.

The reusable component direction includes:
- `InstituteCard`
- `InstituteGrid`
- `InstituteProfile`

### Add Your Institute

Implement an informational modal/popup.

The popup should explain what information an institute needs to provide and how the process works.

The recommended process copy is conceptually:
1. Make the institute listing payment.
2. Share institute information with the PassKarlo team.
3. The team reviews the information.
4. The profile is created from the admin panel.
5. Once approved internally, the profile is published.

Do not add a public submission form or payment gateway.

### Responsive design

The UI must adapt to mobile and desktop according to Figma frames.

## Non-functional requirements

- TypeScript
- Next.js App Router
- Tailwind CSS v4
- shadcn/ui where appropriate
- Reusable components
- Accessible markup
- Responsive layouts
- Server-first approach where appropriate
- No unnecessary dependencies
- No secrets in source control

## Explicitly out of scope

- Functional search
- Search API
- Search indexing
- Search ranking
- Search suggestions
- Autocomplete
- AI search
- Payment gateway
- Payment webhooks
- Automated payment verification
- Public institute submission
- Institute-owner registration/login/dashboard
- Claim system
- Automated publication
- User accounts
- Saved institutes
- Enquiries
- Notifications
- Reviews

These may belong to later phases.

## Acceptance principle

A V1 feature is complete only when:
- It matches the relevant Figma frame closely.
- It works responsively.
- It uses appropriate reusable components.
- It does not introduce functionality outside V1 scope.
