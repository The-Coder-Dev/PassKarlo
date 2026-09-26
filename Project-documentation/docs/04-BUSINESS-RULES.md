# 04 — Business Rules

## Institute data

Only authorized admins can create, edit or publish institute profiles.

## Payment

Payment is external to PassKarlo V1.

PassKarlo does not automatically:
- Process payment
- Verify payment
- Receive payment webhooks
- Convert payment into publication

## Publication

An institute is published only after the PassKarlo team manually creates/reviews it.

## V1 lifecycle

Keep the initial lifecycle simple:

`Draft → Published`

Do not introduce Review/Archived/etc. unless the product requirement changes.

## Paid/promoted listings

If paid/promoted listings are introduced later, paid placement must be explicitly separated from organic relevance/ranking.

## Data trust

PassKarlo should avoid presenting unverified claims as verified facts.

## Add Your Institute

V1 is an informational popup only.

The popup explains:
- What information is needed
- That payment happens externally
- That the PassKarlo team handles the information
- That the team/admin creates the listing
- That publication occurs after internal review

Do not invent payment-provider details, prices, guarantees, SLAs or automated processes.

## Deferred requirements

Do not implement a feature simply because it appears in a future conceptual model. A feature must be explicitly moved into the active scope before implementation.
