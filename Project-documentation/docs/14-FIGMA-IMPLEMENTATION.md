# 14 — Figma-to-Code Implementation Guide

## Goal

Convert the supplied PassKarlo Figma design into production-quality Next.js UI without losing visual fidelity.

## Step 1 — Inspect the Figma completely

Before coding:
- Inspect all pages/frames relevant to V1.
- Identify homepage frames.
- Identify desktop and mobile variants.
- Identify career category/detail frames.
- Identify institute cards/profile frames.
- Identify Add Your Institute modal.
- Inspect component variants.
- Inspect typography.
- Inspect spacing.
- Inspect colors.
- Inspect borders/radii/shadows.
- Inspect image assets.
- Inspect icon assets.
- Inspect hover/focus/active states where provided.

## Step 2 — Build an asset inventory

Create a simple inventory before implementation:
- Asset name
- Figma location
- Intended component
- Desktop/mobile usage
- Crop/object-position requirements
- Whether the asset is decorative or meaningful

Use actual Figma assets rather than replacing them with arbitrary stock imagery.

## Step 3 — Establish design tokens

Extract only tokens that are actually represented by Figma:
- Font families
- Font sizes
- Font weights
- Line heights
- Colors
- Spacing
- Radius
- Border widths
- Shadows
- Container widths
- Breakpoints

Do not invent a new design system that conflicts with Figma.

## Step 4 — Component mapping

Map repeated Figma elements to reusable React components.

Example candidates:
- Header
- Navigation
- Button
- Badge
- SearchBar
- ScholarshipCard
- InstituteCard
- CareerCard
- Grid
- Modal

Do not make every small wrapper a separate component.

## Step 5 — Page composition

Build pages from reusable components rather than duplicating large blocks of markup.

Keep page-specific content separate from reusable presentation where practical.

## Step 6 — Search behavior

The search bar is visual only in V1.

It should look and behave like the design, but clicking Search must not trigger:
- Database queries
- API requests
- Filtering
- Search state in URL
- Autocomplete
- Search suggestions

## Step 7 — Add Your Institute

The CTA opens the informational popup/modal.

The modal is not a submission form.

It should communicate the external process defined in `04-BUSINESS-RULES.md`.

## Step 8 — Responsive verification

For each relevant Figma frame:
- Match viewport dimensions.
- Compare container widths.
- Compare spacing.
- Compare typography.
- Compare image crop.
- Compare card dimensions.
- Compare stacking/order.
- Compare navigation behavior.

## Step 9 — Visual QA

Use screenshots of the implementation and compare them with Figma.

Fix visual mismatches before adding polish not represented in Figma.

## Step 10 — Scope QA

Before completion verify:
- No backend search exists.
- No payment gateway exists.
- No public institute submission exists.
- No owner dashboard exists.
- No speculative database entities were introduced.
- No AI product feature was introduced.
