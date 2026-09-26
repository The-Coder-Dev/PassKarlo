# 07 — API Strategy

## V1

No public search API is required.

No payment API is required.

No institute submission API is required.

No owner API is required.

The V1 UI should not fabricate backend endpoints merely because future features may need them.

## Future API areas

When functionality is activated, APIs/use cases may eventually support:
- Institute CRUD for admins
- Career CRUD for admins
- Institute profiles
- Search/discovery
- Filters
- Location-based discovery
- Enquiries
- User features

These should be defined when their corresponding product phase begins.

## Search API — future only

Potential conceptual flow:

User Query
→ Search Intent
→ Entity Detection
→ Filters
→ Search Service
→ Database / Search Index
→ Ranking
→ Results

Do not implement this API during the initial UI phase.

## Payment — future only

Do not create payment endpoints, webhook endpoints, transaction models or automated verification in V1.

Payment is external to the application for V1.

## API principles

When APIs are introduced:
- Validate input at boundaries.
- Authorize admin-only mutations.
- Keep business rules out of route-handler boilerplate where a use-case layer is appropriate.
- Return predictable typed responses.
- Avoid leaking internal/database details.
- Keep public and admin capabilities clearly separated.
