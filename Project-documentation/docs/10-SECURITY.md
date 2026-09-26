# 10 — Security Requirements

## V1 security posture

Even during UI implementation:
- Never commit secrets.
- Never hardcode credentials.
- Keep environment variables out of source control.
- Avoid exposing internal implementation details unnecessarily.
- Use dependency versions appropriate to the project.
- Keep server-only concerns on the server.
- Validate any future server-side input.
- Do not expose admin functionality publicly.

## Admin security

When the admin phase is implemented:
- Admin authentication is required.
- Institute create/edit/publish operations must be authorized.
- Authorization must be enforced server-side, not only hidden in the UI.
- Admin routes/actions must not rely on client-side checks alone.

## Payment

V1 has no payment integration and therefore should not collect or store payment credentials or create payment webhooks.

## Future user data

When accounts/enquiries/reviews/notifications are added:
- Minimize collected personal data.
- Define authorization boundaries.
- Validate input.
- Protect sensitive operations.
- Log important administrative actions where required by the actual product design.

Do not build privacy/security infrastructure for features that are not yet active, but do not weaken the architecture to make future security impossible.
