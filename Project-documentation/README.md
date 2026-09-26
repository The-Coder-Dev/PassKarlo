# PassKarlo

PassKarlo is a modern education discovery platform for discovering institutes, careers, courses and teachers, with admin-managed institute listings and a future-ready search/AI architecture.

## Current implementation goal

The immediate goal is the initial UI implementation from the Figma design.

V1 prioritizes:
- Figma-faithful UI
- Homepage
- Navigation
- Placeholder search UI
- Institute cards
- Career UI
- Career detail UI
- Add Your Institute informational popup
- Responsive design
- Premium visual polish

V1 deliberately excludes:
- Backend search
- Payment integration
- Public institute submission
- Institute-owner accounts
- Automated publication workflows
- Unnecessary architecture

## Preferred stack

- Next.js
- App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui where appropriate
- Drizzle ORM
- PostgreSQL
- Neon PostgreSQL as the current preferred database direction

## Architecture

Use a scalable modular monolith with clear separation:

UI / Presentation
→ Application / Use Cases
→ Domain
→ Data Access
→ Infrastructure / Database

## Design

Figma is the visual authority.

Figma design:
https://www.figma.com/design/EdGmdM3nTgwOgDtfYlBA2l/PassKarlo

Embed:
https://embed.figma.com/design/EdGmdM3nTgwOgDtfYlBA2l/PassKarlo?node-id=0-1&embed-host=share

TargetStudy is an information-architecture reference only. PassKarlo must not be a direct UI/content clone.

## Related domain

Primary website: `passkarlo.com`

Separate books platform: `books.passkarlo.com`

The books platform should remain separate from the primary PassKarlo architecture.

## Source of truth order

1. Explicit project/business rules
2. Figma for visual decisions
3. Existing project implementation/documentation
4. General engineering judgment only where the sources are silent

When sources do not specify something, do not silently turn an assumption into a product requirement.
