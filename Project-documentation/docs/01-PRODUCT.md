# 01 — Product Definition

## Product

**PassKarlo**

## One-line definition

PassKarlo is a modern education discovery platform for discovering institutes, careers, courses and teachers, with admin-managed institute listings and a future-ready search/AI architecture—while keeping the initial implementation deliberately simple and design-focused.

## Product direction

The conceptual direction is:

> TargetStudy-like breadth + modern PassKarlo UX + structured scalable architecture.

TargetStudy is a conceptual information-architecture reference, not a UI/content source to copy.

## Primary product areas

### Search & Discovery
- Schools
- Colleges
- Institutes
- Teachers

### Careers
- Career Categories
- Career Details

### Institutes
- Institute Profiles

### Add Your Institute
- Informational popup
- External payment
- PassKarlo team receives information
- Admin manually creates institute
- Admin publishes institute

## Future product relationships

A long-term education information graph can connect:

Career
→ Required Course
→ Colleges / Institutes
→ Location
→ Enquiry

Career pages can eventually connect to:
- Related courses
- Related institutes
- Related careers

## Institute profile concept

An institute profile may eventually contain:
- Institute name
- Institute type
- Logo
- Cover image
- Gallery
- Description
- Address
- City
- State
- Pincode
- Phone
- Email
- Website
- Facilities
- Courses
- Admission information
- Fees
- Principal/Director message
- Announcements
- SEO title
- SEO description
- Slug

Only implement fields required by the current Figma/V1 feature set. Do not build the full future model merely because it is listed here.

## Career detail concept

Eventually a career page can contain:
- Career overview
- Why choose this career?
- Benefits
- Eligibility
- Required skills
- Educational requirements
- How to enter the career
- Career path
- Job opportunities
- Career prospects
- Salary information
- Related courses
- Related institutes
- Related careers

## Design principles

PassKarlo should be:
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

The previously discussed warm visual direction includes `#FEF0E7`, but the Figma must override this if the actual design differs.

## Books platform

`books.passkarlo.com` is a separate platform. It may eventually support used-book selling, book donation, book requests, student verification and support for underprivileged students. Do not unnecessarily couple this platform to the main PassKarlo application.
