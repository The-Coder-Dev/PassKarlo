# PassKarlo — Project Documentation

> **Document Status:** Current / Canonical
> **Version:** V1 Architecture
> **Last Updated:** September 2026

---

# 1. Project Overview

PassKarlo is an education-focused discovery platform designed to help users discover:

* Schools
* Colleges
* Teachers
* Courses
* Careers
* Books and educational resources

The primary functionality of PassKarlo is **discovery and information access**.

Users should be able to search and browse educational institutions, teachers, courses, careers, and other educational content through the public website.

PassKarlo is **not a public user-generated directory**.

Schools, colleges, and teachers are not added directly by visitors.

Instead, the PassKarlo team communicates with institutions/teachers through phone, Gmail, or other direct communication channels. After receiving the required information and completing any applicable payment process, the PassKarlo team manually creates and publishes the listing through the CMS.

---

# 2. Core Product Model

The platform has two fundamentally different sides:

## Public Website

Used by visitors to:

* Search for schools
* Search for colleges
* Search for teachers
* Browse courses
* Explore careers
* View detailed profiles/pages
* Submit enquiries

## Internal Content Management

Used by the PassKarlo team to:

* Add schools
* Add colleges
* Add teachers
* Add courses
* Add careers
* Edit existing content
* Upload images
* Publish/unpublish content
* Manage featured school/college listings
* Maintain educational information

The internal management system will be powered by **Sanity Studio** rather than a custom-built admin dashboard.

---

# 3. V1 Architecture

The V1 architecture is intentionally lightweight.

```text
                         PASSKARLO
                             │
              ┌──────────────┴──────────────┐
              │                             │
       PUBLIC WEBSITE                  SANITY STUDIO
              │                             │
          Next.js                     PassKarlo Team
              │                             │
       Search / Pages              Create / Edit / Publish
              │                             │
              └──────────────┬──────────────┘
                             │
                           SANITY
                             │
              ┌──────────────┼──────────────┐
              │              │              │
          Institutes       Teachers       Careers
              │              │              │
          Courses                          Site Content
                             │  
                           Assets

Enquiries:
Visitor → Next.js Server → Email Service → PassKarlo Team
```

---

# 4. Technology Stack

## Frontend

* Next.js
* App Router
* TypeScript
* Tailwind CSS
* shadcn/ui

## CMS

* Sanity
* Sanity Studio
* GROQ for content queries

## Content Assets

* Sanity Asset Pipeline initially

Cloudinary is **not required initially**.

It may be introduced later if PassKarlo's image/media requirements exceed what the Sanity asset system provides.

## Email

Use the project's configured transactional email provider.

The current architecture expects enquiries to be sent to the PassKarlo team through email rather than being stored in a database.

## Database

### V1

No dedicated application database is required.

Do not introduce:

* Neon
* PostgreSQL
* Drizzle ORM

unless a real application-data requirement appears.

### Future

Neon + PostgreSQL + Drizzle can be introduced when PassKarlo requires transactional or relational application data.

---

# 5. Important Architectural Principle

## Sanity is the source of truth for published PassKarlo content.

Do not duplicate the same institute, teacher, career, course, or book content into another database during V1.

For example:

```text
Institute
    ↓
Sanity
    ↓
Next.js
    ↓
Public Institute Page
```

Do not create a second `institutes` table in Neon simply for the sake of having a database.

---

# 6. Public Website

The public website is responsible for displaying published Sanity content.

Potential public areas include:

```text
/
├── Search
├── Schools
├── Colleges
├── Teachers
├── Courses
├── Careers
└── ...
```

The exact route structure should follow the existing project design and documentation.

---

# 7. Search

Search is one of PassKarlo's primary features.

Users should be able to discover relevant content from the public website.

## Initial Search Architecture

```text
User
 ↓
Search UI
 ↓
Next.js
 ↓
Sanity query
 ↓
Published content
 ↓
Search results
```

Do not introduce a dedicated search engine initially.

Potential future solutions include:

* Meilisearch
* Typesense
* Algolia
* OpenSearch/Elasticsearch

A dedicated search engine should only be introduced when actual data volume, query complexity, or performance requirements justify it.

---

# 8. Institute Content

Schools and colleges should be represented using an `Institute` content model.

An institute should contain only fields required by the actual PassKarlo product requirements.

Potential structure:

```text
Institute
├── Name
├── Type
├── Slug
├── Logo
├── Gallery
├── Short Description
├── Full Description
├── Location
│   ├── State
│   ├── City
│   └── Pincode
├── Address
├── Contact Information
├── Website
├── Courses
├── Facilities
├── Admission Information
├── Affiliation
├── Established Year
├── Accreditation
├── Map/Location
├── Featured Information
├── Publishing Status
└── SEO
```

The final schema must be based on the official PassKarlo requirements/documentation rather than assumptions.

---

# 9. Schools vs Colleges

Schools and colleges should initially use a common `Institute` content model with a type field:

```text
type:
- school
- college
```

If their requirements become substantially different later, separate content models can be introduced.

---

# 10. Teacher Content

Teachers are a separate content type.

Potential structure:

```text
Teacher
├── Name
├── Slug
├── Profile Image
├── Short Introduction
├── Biography
├── Subjects
├── Qualifications
├── Experience
├── Languages
├── Teaching Mode
├── Location
├── Contact Information
├── Availability
├── Publishing Status
└── SEO
```

The exact fields must be finalized from the PassKarlo requirements.

---

# 11. Career Content

Careers are informational/educational content.

A career should support structured sections rather than one giant text field.

Potential structure:

```text
Career
├── Title
├── Slug
├── Category
├── Overview
├── Eligibility
├── Process
├── Career Prospects
├── Salary
├── Skills Required
├── Top Recruiters
├── Related Careers
└── SEO
```

The public career page may present these sections as tabs or another suitable UI.

Example:

```text
Career: Software Developer

[ Overview ]
[ Eligibility ]
[ Process ]
[ Prospects ]
[ Salary ]
```

The tab system is a frontend presentation decision. The underlying content remains structured in Sanity.

---

# 12. Career — Eligibility

Eligibility should support structured information where useful.

Possible fields:

* Educational qualification
* Required subjects
* Minimum marks
* Age requirements
* Additional requirements

Do not create fields that are not required by the product.

---

# 13. Career — Process

The career process should support an ordered list of steps.

Example:

```text
1. Complete required education
2. Choose the appropriate course
3. Develop required skills
4. Gain experience
5. Apply for relevant opportunities
```

The number of steps must not be hardcoded.

Sanity should support a repeatable list.

---

# 14. Career — Prospects

Career prospects can include:

* Career opportunities
* Job roles
* Industries
* Further education
* Growth paths

The exact content structure should remain flexible.

---

# 15. Career — Salary

Salary information should be editable through Sanity.

Potential sections:

```text
Entry Level
Mid Level
Experienced
```

Salary information should include an appropriate "last updated" field where necessary because salary data changes over time.

Do not hardcode salary information in the frontend.

---

# 16. Future Entrance Exam System

Entrance exams are a planned future feature.

Do not implement the complete entrance exam system in V1 unless explicitly required.

The Career schema should, however, be designed so careers can later reference entrance exam documents.

Future structure:

```text
Career
   ↓
Entrance Exams
   ├── JEE Main
   ├── NEET
   ├── CUET
   └── Other exams
```

A future `Entrance Exam` content type may contain:

```text
Entrance Exam
├── Name
├── Conducting Body
├── Description
├── Eligibility
├── Exam Pattern
├── Syllabus
├── Application Process
├── Important Dates
├── Fees
├── Participating Institutes
└── Official Website
```

---

# 17. Course Content

Courses are primarily informational content.

Courses should not initially have a paid "featured course" or promotional system.

Potential course information may include:

* Course name
* Description
* Duration
* Eligibility
* Subjects
* Career opportunities
* Related careers
* Related institutes

The final structure must follow the product requirements.

---

# 18. Book Content

Books are an important but separate part of PassKarlo.

Books should have their own content model.

Potential fields may include:

```text
Book
├── Title
├── Author
├── ISBN
├── Cover
├── Description
├── Category
├── Language
├── Edition
├── Condition
├── Location
└── Availability
```

The final schema should follow the actual PassKarlo book requirements.

## Important:

Books should **not** participate in the institute/college featured-listing monetization model.

Do not add:

* Featured book
* Sponsored book
* Paid book placement

unless the business model explicitly changes in the future.

---

# 19. Featured Listings

Featured listings are primarily intended for:

* Schools
* Colleges

A school or college may request a featured listing through the PassKarlo team.

## V1 Workflow

```text
School / College
      ↓
Contacts PassKarlo
      ↓
Provides details
      ↓
Payment
      ↓
PassKarlo verifies details/payment
      ↓
PassKarlo Team opens Sanity Studio
      ↓
Marks institute as Featured
      ↓
Sets feature duration
      ↓
Website displays featured listing
```

Potential Institute fields:

```text
isFeatured
featuredFrom
featuredUntil
```

The website should automatically stop treating a listing as featured after `featuredUntil`.

---

# 20. Featured Placement

Featured institutes may appear in designated locations such as:

* Homepage featured section
* Search results featured section
* Other explicitly defined promotional placements

Featured listings should not silently distort every search result.

Where appropriate, the UI should clearly distinguish featured/promoted listings from normal results.

---

# 21. Teachers and Featured Listings

Teachers should not automatically be included in the institute featured-listing system.

Teacher promotion should only be implemented if the business requirements explicitly define such a service.

Do not build a generic "pay to promote anything" architecture.

---

# 22. Enquiries

PassKarlo will initially use an email-based enquiry system.

Example flow:

```text
Visitor
 ↓
Enquiry Form
 ↓
Next.js Server Action/API
 ↓
Validation
 ↓
Email Service
 ↓
PassKarlo Team Email
```

Enquiries are not stored in a database in V1.

Potential enquiry types:

* Institute enquiry
* Teacher enquiry
* Course enquiry
* General enquiry

The exact types should follow the product requirements.

---

# 23. Enquiry Security

Enquiry forms must:

* Validate input server-side
* Use Zod or equivalent validation
* Keep email credentials server-side
* Include spam protection/rate limiting where appropriate
* Sanitize/validate user-provided content
* Never expose private API keys to the browser

Do not send emails directly from client-side code using secret credentials.

---

# 24. Admin / CMS

There will not be a custom-coded PassKarlo admin dashboard in V1.

Instead:

```text
PassKarlo Team
       ↓
Sanity Studio
       ↓
Create / Edit / Publish
```

Sanity Studio is the internal content-management interface.

The PassKarlo team should be able to manage:

* Institutes
* Teachers
* Careers
* Courses
* Books
* Images
* Site content
* SEO fields
* Featured institute status

---

# 25. Publishing Model

Content should support a clear publishing workflow.

Conceptually:

```text
Draft
  ↓
Review
  ↓
Published
  ↓
Archived / Unpublished
```

Only published content should appear on the public website.

The exact implementation should use Sanity's publishing capabilities where possible.

---

# 26. Images and Assets

Sanity Assets are the initial media solution.

Typical assets:

* Institute logos
* Institute gallery images
* Teacher profile photos
* Career images
* Course images
* Book covers
* Website content images

Images should use Sanity's image optimization capabilities.

Cloudinary should not be introduced unless there is a concrete requirement that Sanity Assets cannot satisfy efficiently.

---

# 27. Authentication

## Public Website

No public account system is required for V1.

Visitors do not need to:

* Register
* Log in
* Create profiles
* Maintain accounts

## Internal Team

Sanity Studio authentication protects internal content management.

If PassKarlo later develops a separate application dashboard requiring custom authentication, an authentication system can be introduced at that point.

---

# 28. Payments

Payment is initially handled outside the application's technical infrastructure.

Example:

```text
Client
 ↓
PassKarlo Team
 ↓
Payment
 ↓
Team verifies payment
 ↓
Sanity listing is created/updated
```

Automated payment integration is a future feature.

When automated payments are introduced, a relational database such as Neon/PostgreSQL may become useful for storing:

* Payment IDs
* Payment status
* Amount
* Customer/reference information
* Plan
* Start/end dates
* Transaction metadata

---

# 29. Future Database Architecture

Neon and Drizzle are intentionally deferred.

When application data requires a relational database, the architecture can become:

```text
                         PASSKARLO
                             │
                ┌────────────┴────────────┐
                │                         │
             Sanity                     Neon
                │                         │
         CMS / Content            Application Data
                │                         │
       ┌────────┼────────┐          Drizzle ORM
       │        │        │                │
   Institutes Teachers Careers       Payments
   Courses    Books    Content        Enquiries
                                      Applications
                                      Users
                                      Transactions
```

Do not duplicate Sanity content unnecessarily in Neon.

Each system should have a clearly defined source of truth.

---

# 30. Future Search Architecture

V1:

```text
Next.js
   ↓
Sanity
   ↓
Search results
```

If PassKarlo grows significantly:

```text
Sanity
   ↓
Search Index
   ↓
Meilisearch / Typesense / Algolia / OpenSearch
   ↓
Next.js
```

A dedicated search engine should only be introduced when justified by actual requirements.

---

# 31. SEO

PassKarlo is a discovery/content platform, so SEO is important.

Important areas include:

* Dynamic metadata
* Unique page titles
* Meta descriptions
* Canonical URLs
* Open Graph metadata
* Structured data where appropriate
* XML sitemap
* Robots.txt
* Clean slugs
* Indexable public pages
* Appropriate 404 handling

Institute, teacher, career, course, and other public content pages should be designed with SEO in mind.

---

# 32. Performance

The application should prioritize:

* Server-side data fetching where appropriate
* Next.js caching/revalidation
* Optimized Sanity image delivery
* Minimal client-side JavaScript
* Responsive images
* Lazy loading where appropriate
* Efficient GROQ queries
* Avoiding unnecessary dependencies

Do not turn every component into a Client Component.

---

# 33. Responsive Design

All public pages should work across:

* Mobile
* Tablet
* Desktop

The existing Home page design is considered complete.

Do not redesign the Home page unless explicitly requested.

Future development should integrate functionality into the existing design rather than replacing the established visual direction.

---

# 34. UI/UX Principles

PassKarlo should feel:

* Modern
* Clean
* Trustworthy
* Education-focused
* Easy to navigate
* Search-oriented
* Fast
* Content-focused

Avoid unnecessary:

* Excessive cards
* Excessive rounded containers
* Decorative UI without purpose
* Overly complex animations
* Unnecessary dashboards
* Feature bloat

---

# 35. Development Principles

When modifying the project:

1. Read the project documentation first.
2. Inspect the existing code before changing it.
3. Do not blindly rewrite existing components.
4. Reuse existing components where appropriate.
5. Do not duplicate functionality.
6. Do not introduce dependencies without a reason.
7. Keep TypeScript strict and maintainable.
8. Keep data models aligned with Sanity schemas.
9. Keep public content separate from application/transactional data.
10. Do not implement future infrastructure prematurely.
11. Preserve the existing Home page design.
12. Prefer incremental implementation over large rewrites.

---

# 36. Current Development Priority

The immediate development sequence is:

```text
1. Review PassKarlo documentation
        ↓
2. Finalize Sanity content models
        ↓
3. Set up Sanity project + Studio
        ↓
4. Connect Sanity to Next.js
        ↓
5. Create initial content
        ↓
6. Connect existing Home page to Sanity where required
        ↓
7. Build institute/teacher/career queries
        ↓
8. Implement search
        ↓
9. Build public detail pages
        ↓
10. Implement enquiry forms + email
        ↓
11. Implement featured institute functionality
        ↓
12. SEO + performance + production refinement
```

---

# 37. Deferred Features

The following are intentionally deferred:

* Neon
* Drizzle ORM
* PostgreSQL application database
* Automated payment processing
* Public user accounts
* Public listing submission
* Custom admin dashboard
* Dedicated search engine
* Advanced CRM
* Automated featured-listing payments
* Advanced book transaction system
* Entrance exam system
* Cloudinary

These features may be introduced when actual product requirements justify them.

---

# 38. Architectural Decision Summary

| Decision                  | V1                   |
| ------------------------- | -------------------- |
| Frontend                  | Next.js              |
| Language                  | TypeScript           |
| UI                        | Tailwind + shadcn/ui |
| CMS                       | Sanity               |
| Admin                     | Sanity Studio        |
| Content database          | Sanity               |
| Application database      | None initially       |
| PostgreSQL                | Deferred             |
| Neon                      | Deferred             |
| Drizzle                   | Deferred             |
| Images                    | Sanity Assets        |
| Cloudinary                | Deferred             |
| Search                    | Sanity queries       |
| Dedicated search engine   | Deferred             |
| Enquiries                 | Email                |
| Public accounts           | No                   |
| Public listing submission | No                   |
| Featured schools          | Yes                  |
| Featured colleges         | Yes                  |
| Featured teachers         | Not initially        |
| Featured courses          | No                   |
| Featured books            | No                   |
| Entrance exams            | Future               |
| Automated payments        | Future               |

---

# 39. Core Principle

PassKarlo should be built according to the following principle:

> **Start with the smallest architecture that completely supports the current product, and introduce infrastructure only when the product creates a genuine need for it.**

For V1:

**Next.js + Sanity + Email is enough.**

Sanity manages the content.

Next.js presents the content.

Email handles enquiries.

Future infrastructure such as Neon, Drizzle, payments, Cloudinary, and dedicated search can be introduced independently when PassKarlo actually needs them.
