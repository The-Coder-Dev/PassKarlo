# 03 — User Flows

## 1. Institute discovery

Visitor
→ Institute/Search UI
→ Results
→ Institute Profile

### V1 interpretation

The search control is visual only. If a results screen exists in Figma, implement its UI as specified, but do not connect the search bar to a real search backend.

## 2. Career discovery

Visitor
→ Career Categories
→ Career
→ Career Details
→ Related Courses
→ Related Institutes

Implement only the screens/relationships represented in the current design and explicitly requested V1 scope.

## 3. Add Your Institute

Visitor
→ Add Your Institute
→ Information Popup
→ External Payment
→ Share Institute Information
→ PassKarlo Team
→ Admin Panel
→ Create Institute
→ Publish

### Critical interpretation

The website does not process the payment in V1.

The website does not collect the institute submission through an owner-facing workflow in V1.

The PassKarlo team receives the payment/details externally and an authorized admin manually creates the institute.

## 4. Future search flow

This is documentation for future extension only:

User Query
→ Search Intent
→ Entity Detection
→ Filters
→ Search Service
→ Database / Search Index
→ Ranking
→ Results

Example:

`BCA colleges in Mathura`

Could eventually resolve to:
- Intent: institute discovery
- Entity: college
- Course: BCA
- Location: Mathura

Do not implement this in V1.
