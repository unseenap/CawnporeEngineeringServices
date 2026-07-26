# Software Requirements Specification

## Cawnpore Engineering Services Corporate Website

**Version:** 1.1  
**Date:** 26 July 2026  
**Application type:** Responsive corporate website  
**Frontend:** React.js  
**Company:** Cawnpore Engineering Services  
**Tagline:** Your Climate. Our Commitment.  
**Implementation status:** Requirements specification only

---

## 1. Purpose

This document specifies the business, content, functional, design, animation,
illustration, technical, accessibility, performance and acceptance requirements
for the Cawnpore Engineering Services website.

The website will present the company as a professional HVAC engineering partner
serving commercial, residential and industrial environments across India. It
must explain the company's complete capabilities, demonstrate credibility using
the supplied project assets, and generate qualified enquiries.

The website must have:

- A separate route for every major information section.
- A persistent navbar and footer on every page.
- Smooth, purposeful animations.
- HVAC-specific illustrations and diagrams.
- Scroll-triggered animation where it improves storytelling.
- A modern, distinctive and responsive interface.
- A separate colour-theme file.
- Separate JSON data files for every major content domain.
- Reusable React components.
- Adapted React Bits and Magic UI components where appropriate.

---

## 2. Source Material

The approved source folder is:

`Cawnpore Sources/`

It contains:

- `logo.png`
- `Company_profile.pdf`
- `Cawnpore_Engineering_Services_Company_Profile.pptx`
- `sourceimage1.png`
- `sourceimage2.png`
- `sourceimage3.png`
- `sourceimage4.png`
- Project and client images under `workedfor/`

The PDF and PowerPoint company profiles are the primary content sources. The
logo and supplied images must be reused where suitable. No project statistics,
testimonials, certifications, capacities or outcomes may be invented.

---

## 3. Company Information

### 3.1 Company Snapshot

- Company name: Cawnpore Engineering Services
- Industry: HVAC — Heating, Ventilation and Air Conditioning
- Founded: 2021
- Headquarters: Kanpur
- Operations: Pan-India
- Tagline: Your Climate. Our Commitment.
- Positioning: Professional HVAC solutions for commercial, residential and
  industrial environments.

### 3.2 Brand Promise

Reliable engineering, tailored comfort, improved air quality and sustainable
system performance.

### 3.3 Mission

Deliver exceptional HVAC solutions that enhance comfort, improve air quality
and optimize energy efficiency while exceeding customer expectations through
innovation and service excellence.

### 3.4 Vision

Be India's most trusted HVAC service provider, recognized for technical
expertise, customer-centric delivery and sustainable practices shaping
climate-control technology.

### 3.5 Values

- Integrity
- Excellence
- Innovation
- Sustainability
- Customer satisfaction
- Quality

---

## 4. Website Goals

1. Explain the complete CES HVAC capability within 60 seconds.
2. Present every major section on its own dedicated page.
3. Demonstrate technical competence through diagrams, illustrations and
   project evidence.
4. Build trust using company facts, leadership experience and supplied client
   assets.
5. Generate qualified project, service, maintenance and consultation enquiries.
6. Create a distinctive digital experience that does not resemble a generic
   construction website template.
7. Make future content and brand-theme updates possible without editing
   individual React components.

---

## 5. User Groups

### 5.1 Facility and Operations Managers

They need information about reliability, preventive maintenance, emergency
support, energy performance and system optimization.

### 5.2 Architects, Consultants and Contractors

They need evidence of design, engineering, installation, coordination,
commissioning and documentation capability.

### 5.3 Industrial and Commercial Buyers

They need information about execution capacity, sector experience, technical
capabilities, schedule reliability and lifecycle value.

### 5.4 Residential Developers and Homeowners

They need information about comfort, indoor air quality, energy efficiency,
installation and maintenance.

### 5.5 Potential Partners and Recruits

They need information about the company's direction, leadership, values,
operating coverage and credibility.

---

## 6. Number of Pages

The first release should contain **13 routes**.

Seven routes will appear as top-level navbar items. Five service-detail routes
will appear under the Services dropdown. One system route will handle invalid
URLs.

| No. | Route | Page | Navbar position |
|---:|---|---|---|
| 1 | `/` | Home | Home |
| 2 | `/about` | About | About |
| 3 | `/services` | Services Overview | Services |
| 4 | `/services/design-engineering` | HVAC Design & Engineering | Services dropdown |
| 5 | `/services/installation-commissioning` | Installation & Commissioning | Services dropdown |
| 6 | `/services/maintenance-repair` | Maintenance & Repair | Services dropdown |
| 7 | `/services/retrofitting-upgrades` | Retrofitting & Upgrades | Services dropdown |
| 8 | `/services/specialized-hvac` | Specialized HVAC | Services dropdown |
| 9 | `/industries` | Industries | Industries |
| 10 | `/projects` | Projects and Clients | Projects |
| 11 | `/sustainability` | Sustainability | Sustainability |
| 12 | `/contact` | Contact | Contact |
| 13 | `*` | Not Found / 404 | Not shown |

### 6.1 Persistent Navbar

The desktop navbar must contain:

1. Home
2. About
3. Services
4. Industries
5. Projects
6. Sustainability
7. Contact

The Contact item must also be presented as a visually prominent
**Request a Consultation** button.

The Services item must open an accessible dropdown or mega menu containing all
five service-detail pages.

### 6.2 Mobile Navigation

- Use an accessible mobile drawer.
- Preserve the same information hierarchy.
- Allow Services to expand and collapse.
- Lock background scrolling while the drawer is open.
- Close the drawer using its close button, Escape key, backdrop click or route
  selection.
- Return keyboard focus to the menu trigger after closing.

---

## 7. Global Layout Requirements

Every page must contain:

- Persistent header.
- Company logo linked to Home.
- Accessible primary navigation.
- Active-page indication.
- Main content landmark.
- Page-specific hero section.
- At least one relevant illustration or diagram.
- Page-specific information.
- Contextual call to action.
- Shared footer.
- Contact details.
- Links to all important pages.
- Privacy and legal link placeholders.

Pages must not be thin copies of the Home page. Each route must provide unique
information for its subject.

---

## 8. Page Requirements

## 8.1 Home Page

### Purpose

Introduce CES, communicate the brand promise and direct visitors to the correct
service or enquiry path.

### Required Sections

1. Hero section
2. Company snapshot
3. Commercial, residential, industrial and sustainable solution segments
4. Core services overview
5. Technical capability map
6. Industries preview
7. Why choose CES
8. Selected projects and clients
9. Sustainability preview
10. Final consultation call to action

### Hero Content

- Cawnpore Engineering Services
- Your Climate. Our Commitment.
- Professional HVAC solutions for commercial, residential and industrial
  environments.
- Primary CTA: Request a Consultation
- Secondary CTA: Explore Our Services

### Illustration Direction

- Animated HVAC airflow through a technical building cutaway.
- Temperature and air-quality particles.
- Blueprint grid.
- Duct, vent or cooling-system elements.
- Theme-aware SVG artwork where possible.

### Animation Direction

- Staged hero text reveal.
- Slowly moving airflow paths.
- Subtle ambient particles.
- Counters that animate once when entering the viewport.
- Staggered service-card entrance.
- Scroll-triggered section transitions.
- Project cards revealed through masks or controlled fades.

---

## 8.2 About Page

### Required Sections

- Company story
- Founded in 2021
- Kanpur headquarters
- Pan-India operations
- Mission
- Vision
- Values
- Quality, sustainability, innovation and customer-focus pillars
- Leadership
- Consultation CTA

### Leadership Content

**Aditya Singh**  
Co-Founder and Marketing Head  
10+ years of HVAC industry experience, especially in Sales and Marketing, with
a focus on service quality and customer satisfaction.

**Sudhir Prajapati**  
Co-Founder and Chief Technical Officer  
10+ years of experience across Product Development, Design and Supply Chain
Management, supporting strategic development and efficient operations.

### Illustration Direction

- Kanpur-to-India operating coverage map.
- Blueprint or engineering-team visual.
- Value-pillar icons.

### Animation Direction

- Animated company timeline.
- Map route drawing.
- Staggered value cards.
- Subtle leadership-card depth.

Leadership photos must not be invented. Use an approved photo or a neutral,
non-deceptive illustration placeholder.

---

## 8.3 Services Overview Page

### Required Sections

- Services hero
- Complete delivery lifecycle
- Five service-category cards
- Technical capabilities
- Suitable project segments
- Related industries
- Emergency-support note, after confirmation
- Consultation CTA

### Illustration Direction

- Exploded HVAC-system diagram.
- Design-to-maintenance lifecycle.
- Connected service icons.

### Animation Direction

- Scroll-linked lifecycle progress.
- Animated connector lines.
- Step-by-step diagram assembly.
- Service-card hover and focus transitions.

---

## 8.4 HVAC Design & Engineering Page

### Required Information

- Load calculations
- System selection
- Energy modelling
- Detailed engineering drawings
- Project discovery
- Design process
- Required client inputs
- Deliverables
- Related industries
- Related projects
- Frequently asked questions
- Enquiry CTA

### Illustration

Interactive or animated HVAC blueprint showing airflow, equipment zones and
load calculations.

---

## 8.5 Installation & Commissioning Page

### Required Information

- Equipment installation
- Ductwork
- Piping
- Testing
- Balancing
- Validation
- Performance checks
- Site coordination
- Handover
- Related industries and projects
- Enquiry CTA

### Illustration

HVAC assembly cutaway with equipment, ducts and piping appearing in sequence.

---

## 8.6 Maintenance & Repair Page

### Required Information

- Preventive maintenance
- Maintenance plans
- Emergency repair
- Diagnostics
- Performance optimization
- Inspection process
- Suitable system types
- Related projects
- Enquiry CTA

### Illustration

Diagnostic dashboard, system-health diagram or technician workflow.

The site may state “24/7 emergency repair” only after CES confirms that the
service is currently available and defines the applicable coverage.

---

## 8.7 Retrofitting & Upgrades Page

### Required Information

- System modernization
- Efficiency upgrades
- Refrigerant conversion
- Existing-system assessment
- Upgrade planning
- Installation impact
- Performance verification
- Related sectors
- Enquiry CTA

### Illustration

Interactive before-and-after system comparison with a draggable or
keyboard-accessible reveal.

---

## 8.8 Specialized HVAC Page

### Required Information

- Industrial process cooling
- Clean-room HVAC
- Industrial ventilation
- Residential indoor-air-quality systems
- Project requirements
- Technical process
- Suitable industries
- Enquiry CTA

### Illustration

Clean-room or process-cooling cutaway with airflow direction, filtration and
temperature-control zones.

---

## 8.9 Industries Page

The page must cover:

- Retail and malls
- Healthcare
- Manufacturing
- Commercial offices
- Residential developments
- Schools, colleges and government
- Pharmaceutical clean rooms
- Data centres
- Hotels
- Food processing facilities

Each industry section must state:

1. Typical climate-control challenge
2. Relevant CES solution
3. Related service
4. Suitable CTA

### Illustration

A modular building or campus cutaway with selectable industry zones.

### Animation

- Keyboard-accessible industry filters or tabs.
- Selected-zone highlighting.
- Section reveal.
- Animated but restrained airflow paths.

---

## 8.10 Projects and Clients Page

### Required Features

- Filter by sector.
- Responsive project grid.
- Project or client cards.
- Accessible image previews.
- Clear labels for client, sector and location when verified.
- CTA to request a similar solution.

### Supplied Project/Client Assets

- MES Hospital, Udhampur
- Varun Beverages
- Bhavani Pharmaceuticals
- Mogambo Game Zone
- Z Square Mall
- Emaar Housing / Gomti Greens
- Ester Industries, Uttarakhand
- Rajkot Airport
- Chandigarh University, subject to approval

Project images may be displayed only when CES confirms publication permission.
Cards must not imply unsupported project outcomes.

### Animation

- Staggered gallery reveal.
- Smooth filter reflow.
- Image-mask transitions.
- Accessible modal or detail drawer if used.

---

## 8.11 Sustainability Page

### Required Sections

- Energy-efficient HVAC strategy
- Energy modelling
- Performance optimization
- Reduced operating-cost approach
- Efficiency upgrades
- Refrigerant conversion
- Sustainable system performance
- Green-building alignment
- Measurement principles
- Energy-review CTA

### Illustration

- Building energy-flow model.
- Efficiency gauge.
- Heat-recovery loop.
- Energy-consumption comparison.

No numerical energy-saving claim may be published unless CES supplies and
approves supporting evidence.

---

## 8.12 Contact Page

### Required Content

- Enquiry form
- Leadership contact details
- Kanpur headquarters
- Pan-India service coverage
- Click-to-call actions
- Click-to-email actions
- Service-interest selector
- Success and failure messages

### Form Fields

| Field | Rule |
|---|---|
| Full name | Required; 2–80 characters |
| Phone | Required; plausible Indian or international format |
| Email | Required; standard email validation |
| Company or organization | Optional |
| City and state | Required |
| Service interest | Required |
| Project segment | Optional |
| Message | Required; 20–2,000 characters |
| Consent | Required |

### Service Interest Options

- HVAC Design & Engineering
- Installation & Commissioning
- Maintenance & Repair
- Retrofitting & Upgrades
- Specialized HVAC
- General Enquiry

### Animation

- Smooth label and validation-state transitions.
- Success confirmation.
- Subtle map pulse.
- No motion that shifts fields while the user is typing.

---

## 8.13 Not Found Page

### Required Content

- Clear 404 message.
- Link to Home.
- Link to Services.
- Link to Contact.
- Branded HVAC illustration.

### Illustration

A broken airflow or disconnected duct that reconnects during a short entrance
animation.

---

## 9. Core Services

### 9.1 HVAC Design & Engineering

Load calculations, system selection, energy modelling and detailed engineering
drawings.

### 9.2 Installation & Commissioning

Equipment installation, ductwork, piping, testing and balancing.

### 9.3 Maintenance & Repair

Preventive maintenance, emergency repair and performance optimization.

### 9.4 Retrofitting & Upgrades

System modernization, efficiency upgrades and refrigerant conversion.

### 9.5 Specialized HVAC

Industrial process cooling, clean rooms, ventilation and residential
indoor-air-quality systems.

---

## 10. Technical Capability Map

### Design

- Load calculations
- System selection
- Engineering drawings

### Energy

- Energy modelling
- Optimization
- Efficiency upgrades

### Installation

- Ductwork and piping
- Equipment installation

### Commissioning

- System testing
- Balancing
- Performance checks

### Specialized

- Clean-room HVAC
- Process cooling
- Industrial ventilation

### Service

- Maintenance plans
- Emergency repair
- Modernization

---

## 11. Visual Design Requirements

### 11.1 Design Direction

The interface must combine industrial precision with human comfort.

The visual language should use:

- Technical grids
- Blueprint details
- Airflow lines
- Temperature gradients
- Pressure and filtration concepts
- Ductwork and piping
- Building cutaways
- Energy paths
- Strong typography
- Generous whitespace
- Controlled shadows and gradients

### 11.2 Design Restrictions

Avoid:

- Generic construction templates
- Unrelated stock illustrations
- Excessive glassmorphism
- Decorative neon effects
- Random gradient blobs
- Continuous distracting movement
- Heavy parallax
- Scroll hijacking
- Autoplay video with sound
- Decorative animation without meaning

### 11.3 Illustration Requirement

Illustration and visual storytelling are high-priority requirements.

- Every major page hero must have an HVAC-related illustration.
- Every long page must have at least one additional technical diagram or
  illustration.
- Illustrations must explain service, system flow, industry context, energy use
  or engineering process.
- SVG should be preferred for theme-aware technical illustrations.
- Supplied source images should be optimized and used where contextually
  appropriate.

---

## 12. Colour Theme Architecture

All colours must be controlled through one dedicated theme file.

### Required File

`src/styles/theme.css`

No React component may contain repeated hard-coded brand hex values.

### Required Theme Token Groups

```css
:root {
  /* Brand */
  --color-brand-primary: #000000;
  --color-brand-secondary: #000000;
  --color-brand-accent: #000000;

  /* Surfaces */
  --color-bg-page: #ffffff;
  --color-bg-section: #ffffff;
  --color-bg-card: #ffffff;
  --color-bg-inverse: #000000;

  /* Text */
  --color-text-primary: #000000;
  --color-text-secondary: #000000;
  --color-text-muted: #000000;
  --color-text-inverse: #ffffff;

  /* Borders and focus */
  --color-border-default: #000000;
  --color-border-strong: #000000;
  --color-focus-ring: #000000;

  /* Status */
  --color-success: #000000;
  --color-warning: #000000;
  --color-error: #000000;

  /* Gradients */
  --gradient-hero: linear-gradient(...);
  --gradient-airflow: linear-gradient(...);

  /* Shadows */
  --shadow-card: ...;
  --shadow-floating: ...;
}
```

The placeholder values must be replaced during implementation using a palette
derived from the supplied CES logo and approved by CES.

### Additional Style Files

| File | Responsibility |
|---|---|
| `src/styles/theme.css` | All brand and semantic colour tokens |
| `src/styles/motion.css` | Durations, easing, distances and reduced-motion rules |
| `src/styles/typography.css` | Font families, sizes, line heights and text styles |
| `src/styles/globals.css` | Reset, containers, focus states and global utilities |

If Tailwind CSS is used, its configuration must reference CSS variables instead
of duplicating the colour palette.

Illustrations should use `currentColor` or CSS custom properties wherever
possible so changing the theme also updates the artwork.

---

## 13. Separate JSON Data Architecture

Content must be stored separately from React presentation components.

Each major content domain must have its own JSON file. One large combined data
file must not be used.

### Required Data Files

```text
src/
└── data/
    ├── site.json
    ├── navigation.json
    ├── company.json
    ├── home.json
    ├── services.json
    ├── industries.json
    ├── projects.json
    ├── sustainability.json
    ├── leadership.json
    ├── contact.json
    ├── faqs.json
    ├── seo.json
    └── social-links.json
```

### 13.1 `site.json`

Must contain:

- Site name
- Tagline
- Public base URL
- Default language
- Logo paths
- Favicon paths
- Default share image
- Organization summary

### 13.2 `navigation.json`

Must contain:

- Top-level navbar items
- Services dropdown items
- Mobile navigation labels
- Footer navigation groups
- CTA label and route

### 13.3 `company.json`

Must contain:

- Company snapshot
- Founding year
- Headquarters
- Operating coverage
- Mission
- Vision
- Values
- Brand promise
- Why-choose-us items

### 13.4 `home.json`

Must contain:

- Hero copy
- CTA labels
- Section headings
- Solution-segment summaries
- Homepage proof points
- Home-page illustration references

### 13.5 `services.json`

Must contain an array of the five services.

Every service record must support:

```json
{
  "id": "design-engineering",
  "slug": "design-engineering",
  "title": "HVAC Design & Engineering",
  "shortDescription": "",
  "heroDescription": "",
  "deliverables": [],
  "process": [],
  "capabilities": [],
  "suitableIndustries": [],
  "relatedProjectIds": [],
  "faqIds": [],
  "illustration": {
    "type": "svg",
    "src": "",
    "alt": ""
  },
  "seoKey": "service-design-engineering"
}
```

### 13.6 `industries.json`

Every industry record must support:

- ID
- Slug
- Name
- Typical challenge
- CES response
- Related service IDs
- Related project IDs
- Icon or illustration
- CTA

### 13.7 `projects.json`

Every project record must support:

```json
{
  "id": "",
  "client": "",
  "projectName": "",
  "sector": "",
  "location": "",
  "image": "",
  "imageAlt": "",
  "services": [],
  "summary": "",
  "verifiedFacts": [],
  "featured": false
}
```

Unsupported fields must remain empty or be omitted. Data must never be filled
with invented project claims.

### 13.8 `leadership.json`

Must contain:

- Name
- Position
- Approved biography
- Phone
- Email
- Approved image or null
- Social link, if approved

### 13.9 `contact.json`

Must contain:

- Public phone numbers
- Public email addresses
- Headquarters
- Operating coverage
- Form service options
- Form submission configuration key
- Emergency-support wording

Secrets and private API keys must never be stored in JSON files delivered to the
browser.

### 13.10 `seo.json`

Must contain route-specific:

- Page title
- Meta description
- Canonical path
- Open Graph title
- Open Graph description
- Open Graph image
- Indexing rule
- Structured-data type

---

## 14. React Project Structure

```text
src/
├── app/
│   ├── App.jsx
│   ├── router.jsx
│   └── providers.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ServicesPage.jsx
│   ├── ServiceDetailPage.jsx
│   ├── IndustriesPage.jsx
│   ├── ProjectsPage.jsx
│   ├── SustainabilityPage.jsx
│   ├── ContactPage.jsx
│   └── NotFoundPage.jsx
├── components/
│   ├── navigation/
│   ├── sections/
│   ├── cards/
│   ├── forms/
│   ├── illustrations/
│   ├── motion/
│   └── ui/
├── data/
├── hooks/
├── lib/
├── styles/
├── assets/
│   ├── brand/
│   ├── illustrations/
│   ├── projects/
│   └── images/
└── tests/
```

TypeScript is strongly recommended even if the final source files use `.jsx`
instead of `.tsx`.

---

## 15. Animation and Motion Requirements

### 15.1 Motion Principles

Animation must communicate:

- Hierarchy
- Airflow
- System process
- State change
- Technical sequence
- User feedback

### 15.2 Motion Tokens

Motion values must be stored in:

`src/styles/motion.css`

Example:

```css
:root {
  --motion-duration-fast: 160ms;
  --motion-duration-normal: 360ms;
  --motion-duration-slow: 700ms;
  --motion-ease-standard: cubic-bezier(...);
  --motion-ease-emphasized: cubic-bezier(...);
  --motion-distance-small: 8px;
  --motion-distance-medium: 24px;
  --motion-distance-large: 48px;
}
```

### 15.3 Duration Guidance

- Micro-interactions: 120–220 ms
- Component entrances: 300–550 ms
- Section choreography: 500–900 ms
- Ambient loops: 8–20 seconds

### 15.4 Scroll Animation

- Use Intersection Observer or a proven animation library.
- Do not use unthrottled scroll event listeners.
- Animate transform, opacity and SVG stroke where possible.
- Pause off-screen animation.
- Pause ambient animation when the tab is not visible.
- Do not delay content availability while waiting for animation.

### 15.5 Reduced Motion

The site must respect `prefers-reduced-motion`.

When reduced motion is enabled:

- Content must appear without staged delay.
- Parallax must be disabled.
- Ambient loops must stop.
- Smooth scrolling must become immediate.
- No information may be lost.
- State changes must remain understandable.

---

## 16. React Bits and Magic UI

React Bits and Magic UI may be used for:

- Text entrances
- Card interactions
- Background grid effects
- Animated borders
- Marquees
- Timeline patterns
- Spotlight effects
- Number counters
- Reveal patterns
- Subtle cursor-independent interactions

Every imported component must:

1. Match the CES design direction.
2. Use the semantic theme variables.
3. Support keyboard interaction where interactive.
4. Support reduced motion.
5. Avoid unnecessary client-side JavaScript.
6. Be tested on mobile.
7. Be adapted instead of copied with default styling.
8. Have its source and license recorded.

React Bits or Magic UI must not determine the sitemap, page content or brand
identity.

---

## 17. Functional Requirements

| ID | Requirement |
|---|---|
| FR-01 | All pages must use the shared header and footer. |
| FR-02 | The navbar must indicate the active route. |
| FR-03 | The Services menu must be accessible using keyboard and touch. |
| FR-04 | Direct loading and browser refresh must work for every route. |
| FR-05 | Invalid routes must show the branded 404 page. |
| FR-06 | The contact form must validate required fields. |
| FR-07 | The form must prevent accidental duplicate submissions. |
| FR-08 | The form must show loading, success and failure states. |
| FR-09 | Phone and email actions must use `tel:` and `mailto:` links. |
| FR-10 | Project filtering must work without reloading the page. |
| FR-11 | Filtered project items must remain accessible to keyboard and assistive technology. |
| FR-12 | Images must use responsive sizes and explicit dimensions. |
| FR-13 | Every route must have unique SEO metadata. |
| FR-14 | The site must provide Organization and Service structured data using approved facts only. |
| FR-15 | Analytics hooks must support CTA, phone, email, form and service-page events. |
| FR-16 | The application must detect and respect reduced-motion preference. |
| FR-17 | Components must read content from separate JSON files. |
| FR-18 | Components must read colours from the centralized theme file. |
| FR-19 | Network and form errors must provide a visible recovery path. |
| FR-20 | Production must contain no unsupported placeholder claims. |

---

## 18. Non-Functional Requirements

### 18.1 Performance

- Target Lighthouse Performance score: 90 or higher.
- Largest Contentful Paint: 2.5 seconds or less.
- Cumulative Layout Shift: 0.1 or less.
- Interaction to Next Paint: 200 ms or less at the 75th percentile where field
  data exists.
- Initial route JavaScript target: 200 KB compressed or less, excluding
  consent-gated analytics.
- Mobile hero media target: 350 KB or less.
- Desktop hero media target: 700 KB or less.
- Use route-level code splitting.
- Lazy-load below-the-fold media.
- Avoid continuous WebGL or Canvas unless an approved prototype meets battery,
  CPU and accessibility requirements.

### 18.2 Accessibility

Target WCAG 2.2 Level AA.

The website must include:

- Semantic HTML landmarks.
- Correct heading hierarchy.
- Skip-to-content link.
- Complete keyboard support.
- Visible focus styles.
- Accessible navigation menus.
- Accessible form labels and errors.
- Meaningful image alt text.
- Empty alt text for decorative images.
- Minimum 4.5:1 contrast for normal text.
- Minimum 3:1 contrast for large text and UI boundaries where applicable.
- Reduced-motion support.
- No flashing animation.

### 18.3 Responsive Design

Support widths from 320 px to large desktop.

Mandatory validation widths:

- 360 px
- 768 px
- 1024 px
- 1440 px
- 1920 px

No page may produce unintended horizontal scrolling.

### 18.4 Browser Support

Support the latest two stable versions of:

- Chrome
- Edge
- Firefox
- Safari

Also support current mainstream Android and iOS browsers.

### 18.5 Security

- HTTPS in production.
- Server-side form validation.
- Input sanitization and output encoding.
- Spam and rate-limit protection.
- No secrets in the React bundle or JSON data.
- Security headers.
- Dependency vulnerability review.
- No untrusted HTML rendering.

### 18.6 Privacy

- Collect only the data necessary for responding to enquiries.
- Display a consent acknowledgement.
- Link to the privacy notice.
- Confirm data recipient, processor and retention period before launch.
- Use consent-aware analytics where legally required.

### 18.7 Maintainability

- Reusable components.
- Centralized theme tokens.
- Centralized motion tokens.
- Separate JSON data files.
- No repeated content embedded across page components.
- Linting and formatting.
- Component documentation.
- Route and form tests.

---

## 19. Image and Asset Requirements

### 19.1 Logo

- Use `logo.png`.
- Preserve the original aspect ratio.
- Do not stretch or distort.
- Maintain clear space.
- Create approved favicon and social-image derivatives.
- Do not destructively recolour the source.

### 19.2 Source Images

- Review `sourceimage1.png` through `sourceimage4.png` before placement.
- Use each image only where its subject matches the surrounding content.
- Provide alt text when informative.
- Use empty alt text when purely decorative.

### 19.3 Project Images

- Use responsive image sources.
- Use a consistent crop wrapper.
- Preserve focal points.
- Optimize into modern formats where supported.
- Add width and height attributes.
- Lazy-load below-the-fold images.
- Confirm publication rights before launch.

---

## 20. SEO Requirements

Every route must have:

- Unique page title.
- Unique meta description.
- Canonical URL.
- Open Graph title.
- Open Graph description.
- Open Graph image.
- Twitter/X sharing metadata.
- Correct heading hierarchy.
- Descriptive URL.

The site must provide:

- `sitemap.xml`
- `robots.txt`
- Organization or LocalBusiness structured data
- Service structured data
- Search-engine-friendly semantic HTML

Structured data must contain approved facts only.

---

## 21. Analytics Requirements

### Primary Conversion

- Successful enquiry submission

### Secondary Conversions

- Click-to-call
- Click-to-email
- Service CTA click
- Project CTA click
- Consultation-form start
- WhatsApp click, if approved

### Engagement Events

- Service-page visits
- Project-filter use
- Navigation menu use
- Form validation failure
- Form submission failure

Animation interaction must not be treated as an important business KPI unless it
supports a specific design decision.

---

## 22. Testing Requirements

### 22.1 Route Testing

- Test all 13 routes.
- Test direct URL loading.
- Test browser refresh.
- Test internal links.
- Test 404 recovery actions.

### 22.2 Navigation Testing

- Desktop menu.
- Services dropdown.
- Mobile drawer.
- Keyboard navigation.
- Escape-key closing.
- Focus return.
- Active route.
- Skip link.

### 22.3 Form Testing

- Required fields.
- Invalid email.
- Invalid phone.
- Minimum and maximum lengths.
- Loading state.
- Success state.
- Backend failure.
- Network failure.
- Duplicate submission.
- Spam protection.

### 22.4 Responsive Testing

- All mandatory widths.
- Portrait and landscape mobile.
- Long page titles.
- Long service names.
- Large text zoom.
- No clipped animation or illustration.

### 22.5 Accessibility Testing

- Automated accessibility scan.
- Keyboard-only walkthrough.
- Screen-reader spot check.
- Focus order.
- Form-error announcement.
- Colour contrast.
- Reduced-motion behavior.

### 22.6 Performance Testing

- Lighthouse.
- Production-build bundle analysis.
- Mobile network simulation.
- Image-size review.
- Animation CPU review.
- Layout-shift review.

---

## 23. Acceptance Criteria

| ID | Acceptance criterion |
|---|---|
| AC-01 | All 13 routes exist and work on direct load. |
| AC-02 | The seven required top-level navbar items appear on every page. |
| AC-03 | The Services menu links to all five service-detail pages. |
| AC-04 | Every page contains unique and approved information. |
| AC-05 | Every major page hero contains an HVAC-related illustration. |
| AC-06 | Every long page contains an additional meaningful diagram or illustration. |
| AC-07 | Scroll animations are smooth and do not block reading. |
| AC-08 | Reduced-motion mode removes non-essential movement without losing content. |
| AC-09 | Changing values in `src/styles/theme.css` updates the entire website colour system. |
| AC-10 | Major content domains use separate JSON data files. |
| AC-11 | React components do not duplicate long-form business content. |
| AC-12 | React Bits and Magic UI components are adapted to CES styling and accessibility. |
| AC-13 | No serious or critical accessibility defects remain. |
| AC-14 | The site meets the agreed performance targets or has approved exceptions. |
| AC-15 | The contact form reaches the approved recipient or system. |
| AC-16 | All form states and errors are visible and understandable. |
| AC-17 | Supplied logos and images are optimized and not distorted. |
| AC-18 | All client names, claims, contact details and availability statements are approved. |
| AC-19 | Every route contains complete SEO metadata. |
| AC-20 | The production build contains no placeholder text, invented metrics or private keys. |

---

## 24. Delivery Phases

### Phase 1 — Discovery and Content Approval

- Approve sitemap.
- Confirm contact details.
- Confirm client-image permissions.
- Confirm project facts.
- Select form destination.
- Confirm privacy requirements.

### Phase 2 — Visual Direction

- Derive palette from the logo.
- Approve typography.
- Approve illustration language.
- Approve motion prototype.
- Approve Home hero direction.

### Phase 3 — Design System

- Build theme tokens.
- Build motion tokens.
- Build typography rules.
- Build navigation.
- Build cards, buttons and form components.
- Build illustration primitives.

### Phase 4 — Page Production

- Build all routes.
- Connect JSON data.
- Add illustrations.
- Add animation.
- Complete responsive layouts.

### Phase 5 — Integration and Quality Assurance

- Connect enquiry form.
- Add SEO metadata.
- Add analytics.
- Test accessibility.
- Test performance.
- Test browsers and devices.

### Phase 6 — Launch

- Deploy production build.
- Verify HTTPS.
- Verify route rewrites.
- Submit sitemap.
- Enable monitoring.
- Complete handover documentation.

---

## 25. Assumptions

- English is the first-release language.
- The supplied company profile is the current content authority.
- CES has permission to publish approved client and project assets.
- A CMS is not required for release 1.
- Content will remain separated from components for future CMS migration.
- “App” in the original brief refers to the public website experience.

---

## 26. Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Unverified claims | Legal and reputation risk | Formal content approval before launch |
| Unapproved client images | Legal and relationship risk | Asset-permission checklist |
| Excessive motion | Poor accessibility and performance | Motion budget and reduced-motion testing |
| Generic component appearance | Weak differentiation | CES-specific layouts, illustrations and theme adaptation |
| Large source images | Slow mobile experience | Responsive conversion and compression |
| Missing form-backend decision | Enquiries may fail | Select recipient or CRM during discovery |
| Hard-coded colours | Difficult rebranding | Mandatory centralized theme file |
| Content embedded in components | Difficult updates | Mandatory separate JSON data files |

---

## 27. Decisions Required from CES

1. Should “CES” be used prominently after the first full company-name mention?
2. Which phone number and email address should receive website enquiries?
3. Should both founders' direct details remain public?
4. Is 24/7 emergency repair currently available?
5. Does 24/7 support apply across India?
6. May all supplied client names and project images be published?
7. Is Chandigarh University an approved project or client?
8. Are project capacities, locations, completion years or results available?
9. Are approved testimonials available?
10. Should enquiries go to email, WhatsApp, a CRM or another system?
11. Which spam-protection approach should be used?
12. Is a privacy policy available?
13. What is the required lead-data retention period?
14. Is another language required in a future phase?

---

## 28. Final Recommendation

Proceed with the **13-route architecture**.

Keep the navbar limited to seven clear top-level choices:

**Home · About · Services · Industries · Projects · Sustainability · Contact**

Place the five individual service pages under the accessible Services menu.

Treat the following as mandatory implementation requirements:

1. A separate `theme.css` file for all colour values.
2. A separate `motion.css` file for animation tokens.
3. Separate JSON files for each major content domain.
4. HVAC-specific illustrations across all important pages.
5. Smooth, purposeful and accessible scroll animations.
6. Reduced-motion support.
7. Adapted React Bits and Magic UI components.
8. No invented company, project or performance claims.

