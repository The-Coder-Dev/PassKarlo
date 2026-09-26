# 06 — Database Direction

## Database technology

Preferred:
- PostgreSQL
- Neon PostgreSQL
- Drizzle ORM

## V1 conceptual core

The documented core model is:

- `Institution`
- `InstitutionImage`
- `InstitutionCourse`
- `InstitutionAnnouncement`

However, Phase 1 is design/presentation focused. Do not introduce database tables solely to support future concepts if the current implementation does not need them.

## Future conceptual entities

Potential future entities include:
- User
- Profile
- Teacher
- Course
- Location
- Career
- Enquiry
- SavedItem
- Review
- Notification
- Subscription
- Payment
- Verification
- AdminAction

These are not automatic V1 requirements.

## Explicitly excluded V1 entities

Do not create these unless requirements change:
- InstituteSubmission
- InstituteOwner
- ClaimRequest
- PaymentWebhook
- PaymentTransaction
- InstituteApplication

## Institute lifecycle

Initial lifecycle:

`Draft → Published`

## Database principles

- Use explicit relationships.
- Keep data access outside presentation components.
- Avoid speculative tables.
- Avoid storing payment data in PassKarlo V1.
- Keep fields extensible without inventing unsupported business semantics.
- Add indexes based on actual query requirements when backend functionality is introduced.

## Search

No search index is required in V1.

Future search may use structured institute/course/location relations and eventually a search index, but implementation should wait until Phase 3.
