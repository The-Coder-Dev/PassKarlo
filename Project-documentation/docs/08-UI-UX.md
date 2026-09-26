# 08 — UI/UX Specification

## Source of truth

The actual PassKarlo Figma file is authoritative for visual implementation.

Figma:
https://www.figma.com/design/EdGmdM3nTgwOgDtfYlBA2l/PassKarlo

Do not treat the supplied screenshot as a replacement for the full Figma file. Use the screenshot as an additional visual reference.

## Supplied homepage visual reference

The provided homepage screenshot shows a desktop composition with:

### Header
- White navigation container
- PassKarlo logo at left
- Navigation items toward the right
- Donate Book CTA at far right
- Rounded outer container with a subtle light border/background treatment

### Hero
- Large rounded hero container
- Left side: dark navy content panel
- Right side: educational classroom image
- Campaign badge
- Large white heading
- Supporting copy
- Explore GK Details button

Visible hero copy:
- `Passkarlo Talent Search 26–27`
- `PassKarlo Talent Search 26–27 General Knowledge`
- `Build global awareness with curated capsules, current affairs digests, and reasoning drills tailored for PassKarlo Talent Search 25–26.`
- `Explore GK Details`

### Search
A large white search container overlaps the lower edge of the hero.

Visible content:
- Search icon
- `Search by City and Pincode (e.g., Mathura, 281001)`
- Search button

Search must remain placeholder-only in V1.

### Cards
Four visible cards are shown in the supplied screenshot.

The cards contain:
- Green briefcase-style icon
- `BBA • BCA • B.Com Scholarships`
- `SCHOLARSHIPS UP TO 30%`
- `Merit-linked Scholarships and loan support for India’s leading BBA, BCA & B.Com Colleges.`

The exact final content, card count, dimensions and responsive behavior must be verified against Figma.

## Visual direction

Documented desired characteristics:
- Modern
- Premium
- Minimal
- Trustworthy
- Education-focused
- Clean
- Responsive
- Fast

Avoid:
- Bloated dashboards
- Excessive cards
- Excessive rounded containers
- Unnecessary gradients
- Generic AI-looking UI
- Overly complicated navigation

## Colors

A previously discussed warm visual direction included:
`#FEF0E7`

This is only a prior direction. If Figma uses different colors, Figma wins.

## Responsive behavior

Do not merely shrink desktop.

Inspect mobile Figma frames and reproduce:
- Navigation behavior
- Hero stacking
- Image cropping
- Search placement
- Card stacking/grid behavior
- Typography scale
- Spacing
- Modal sizing

## Accessibility

Implement:
- Semantic headings
- Buttons for actions
- Labels/accessible names for controls
- Keyboard-accessible modal
- Visible focus states
- Sufficient contrast
- Responsive text sizing
- Meaningful image alt text where applicable

## Component guidance

Build reusable primitives and feature components, but do not over-componentize simple static markup.

Candidate components:
- Header
- Navigation
- Hero
- SearchBar
- ScholarshipCard
- InstituteCard
- CareerCard
- InstituteGrid
- CareerGrid
- AddInstituteModal
- Button
- Badge

The exact component tree should be determined after inspecting Figma and the existing codebase.
