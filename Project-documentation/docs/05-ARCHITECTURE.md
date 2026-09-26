# 05 — Technical Architecture

## Stack

Preferred:
- Next.js
- App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Drizzle ORM
- PostgreSQL
- Neon PostgreSQL

## Architectural style

Use a scalable modular monolith.

Do not split into microservices prematurely.

## Separation of concerns

UI / Presentation
↓
Application / Use Cases
↓
Domain
↓
Data Access
↓
Infrastructure / Database

## Presentation layer

Responsible for:
- Page composition
- Components
- Responsive layout
- Accessibility
- Visual states
- User interaction at the UI level

Do not put database queries directly in visual components.

## Application layer

Responsible for:
- Use cases
- Orchestration
- Application-level workflows

Only introduce use cases for functionality that actually exists.

## Domain layer

Responsible for:
- Core business concepts
- Business rules
- Domain-level validation

Keep future concepts out until needed.

## Data access layer

Responsible for:
- Repositories/data-access abstractions
- Database reads/writes
- Query implementation

## Infrastructure

Responsible for:
- PostgreSQL/Neon connection
- Drizzle configuration
- External infrastructure integrations when actually required

## V1 architecture

The immediate UI phase should remain lightweight.

Do not create:
- Payment services
- Search services
- Search indexing
- Submission services
- Verification services
- Owner dashboards
- Webhook handlers

merely as placeholders.

## Suggested implementation organization

Use the project's existing structure if one already exists. Do not restructure solely to match this example.

A reasonable modular structure is:

`app/`
- routes/pages/layouts

`components/`
- shared UI
- feature UI

`features/`
- feature-specific presentation/use-case code when complexity warrants it

`domain/`
- business entities/rules

`data/`
- repositories/data access

`db/`
- Drizzle schema/configuration when the database phase begins

The actual repository structure must follow the existing codebase if already established.

## Server/client strategy

Prefer Server Components by default.

Use Client Components only where interactivity requires them, such as:
- Modal open/close state
- Interactive navigation
- Client-side visual controls

The V1 search bar does not need a search state or backend query.

## Component philosophy

Prefer reusable components such as:
- SearchBar
- InstituteCard
- InstituteGrid
- CareerCard
- CareerGrid
- CareerSection
- InstituteProfile
- AddInstituteModal
- Button
- Badge
- Filter
- Pagination

Only build components that are actually needed by the current Figma screens.

## Figma implementation

Figma is the visual source of truth. Inspect:
- Desktop frames
- Mobile frames
- Component variants
- Typography
- Spacing
- Assets
- Icons
- Image treatments
- Hover/focus states
- Modal states

Do not create a generic approximation when Figma provides the actual specification.
