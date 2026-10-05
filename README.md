# AI Agentic Verse | Be The Expert Your Market Sees Every Day

For Coaches And Founders. We Turn What You Know Into Daily Content In Your Own Face And Voice. First Post Live In 7 Days, Or Your First Month Is Free.

---

## ✦ Page Architecture (Title Case With Brand Name Applied)

### 1. Meta & Dynamic SEO
- **Title**: `AI Agentic Verse | Be The Expert Your Market Sees Every Day`
- **Description**: `For Coaches And Founders. We Turn What You Know Into Daily Content In Your Own Face And Voice. First Post Live In 7 Days, Or Your First Month Is Free.`
- Dynamically managed via `SEO.tsx` and synchronized in `index.html` and `metadata.json`.

### 1.1 Cohesive Section & Heading Reveal System (`SectionTransition.tsx` & `TitleReveal.tsx`)
- **SectionTransition**: Encapsulates sections with an exact 800ms slide-up and fade-in entry (`opacity: 0 -> 1`, `y: 20 -> 0`) using the brand's unified editorial cubic-bezier easing `[0.22, 1, 0.36, 1]`.
- **SectionHeadingReveal / TitleReveal**: Dedicated Framer Motion components that wrap section headings and eyebrow tags to apply a coordinated subtle slide-up and fade-in reveal as they enter the viewport (`margin: '0px 0px -40px 0px'`).
- **Complete Consistency**: Every section heading, eyebrow tag, and content block adheres to identical easing curve (`EDITORIAL_EASING`), duration (`0.8s`), and viewport threshold triggers.
- **Accessibility**: Automatically falls back to instantaneous rendering when `prefers-reduced-motion` is detected via `useReducedMotion()`.

### 2. Navigation (`Navigation.tsx`)
- **Logo**: `AI Agentic Verse` with official brand mark (`src/assets/images/logo.png`)
- **Links**:
  - `Our Work` (`#our-work`)
  - `How It Works` (`#how-it-works`)
  - `Who We Serve` (`#who-we-serve`)
  - `About` (`#about`)
- **Button**: `Book A Call` (Pill capsule button linking smoothly to `#book`)

### 3. Hero (`HeroSection.tsx`)
- **Tag**: `For Coaches And Founders Who Sell On Trust`
- **Headline**: `Be The Expert Your Market Sees Every Day. Without Filming, Editing, Or Posting.`
- **Subtext**: `We Turn What You Already Know Into Daily Content, In Your Own Face And Voice. You Approve It. We Do The Rest. Your First Post Goes Live In 7 Days, Or Your First Month Is Free.`
- **Button**: `Book A Strategy Call` (links to `#book`)
- **Scarcity Notice**: `We Take Four Clients A Quarter. Every Client Gets The Team That Sold Them.`
- **Interactive Switcher**: Live interactive preview comparing "Real You" (Phone footage) vs "AI Avatar" (Autonomous twin).

### 4. Our Work (`OurWorkSection.tsx` / `#our-work`)
- **Tag**: `Our Work`
- **Heading**: `Don't Take Our Word For It. Watch It.`
- **Subheading**: `Real Posts We Made For Real Clients. Same Voice. Same Face. None Of Their Time.`
- **Client Videos with Captions**:
  - `Client Video 1, Caption: [Elena Vance, Executive Leadership Coach]`
  - `Client Video 2, Caption: [David Sterling, B2B Enterprise SaaS Founder]`
  - `Client Video 3, Caption: [Maya Lin, High-Ticket Sales Consultant]`
- Features interactive theatre modal (`VideoModal.tsx`) with playable preview streams.

### 5. The Problem (`TheProblemSection.tsx`)
- **Tag**: `The Problem`
- **Heading**: `The Best Expert Doesn't Win. The Most Visible One Does.`
- **Paragraphs**:
  - *You're Better At What You Do Than Most People Posting About It. But They Show Up Every Day, And You Don't. So When A Buyer Is Ready, They Think Of Them First.*
  - *It's Not That You Don't Know Content Works. It's That Content Eats Your Week. Scripts, Filming, Editing, Captions, Posting. You Keep It Up For Two Weeks. Then Client Work Takes Over And Your Page Goes Quiet Again.*
- **Punchline**: *“Every Quiet Week Is A Week Someone Less Skilled Gets The Client Who Should Have Been Yours.”*

### 6. What Changes (`WhatChangesSection.tsx`)
- **Tag**: `What Changes`
- **Heading**: `You Get The Reach Of A Daily Creator. On The Schedule Of A Busy Expert.`
- **Four Transformation Cards**:
  1. **Buyers Find You First**: Daily Posts Built Around The Questions Your Buyers Already Ask. When They're Ready, Your Name Is The One They Know.
  2. **Built On What Already Works**: We Study What Is Winning Attention In Your Market Before We Write A Word. Then We Review Your Numbers Every Week And Make More Of What Works.
  3. **Live In 7 Days**: No Three Month Setup. Your First Post Goes Live 7 Days After We Get Your Files. If It Doesn't, Your First Month Is Free.
  4. **Almost Nothing On Your Side**: A Few Phone Clips When It Suits You. Or One Recording Session, Ever, With The AI Avatar. You Approve. We Handle Everything Else.

### 7. How You Show Up (`HowYouShowUpSection.tsx`)
- **Tag**: `How You Show Up`
- **Heading**: `Film When You Want To. Or Never Film Again.`
- **Two Pathways**:
  - **Real You**: Film Short Clips On Your Phone, Whenever It Fits Your Day. We Turn Them Into Scripted, Edited, Captioned Posts For Every Platform.
    - *Your Real Face And Energy*
    - *No Set, No Crew, No Editing*
  - **AI Avatar**: Send Us One 5 Minute HD Video And One 10 To 15 Minute Voice Recording. Once. We Build A Clone Of Your Face And Voice, And Every Post Comes From It.
    - *You Never Film Again*
    - *You Approve A Test Video First, Or You Don't Pay*
- **Switch Notice**: *Most Clients Start With Real You And Switch To The Avatar Once They See Results. Switch Any Month, No Penalty.*

### 8. Who We Serve (`WhoWeServeSection.tsx` / `#who-we-serve`)
- **Tag**: `Who We Serve`
- **Heading**: `Two Kinds Of Experts. One Goal: Be The Obvious Choice.`
- **Cards**:
  - **Coaches**: Fill Your Calendar With People Who Already Trust You Before The First Call. Keep Your Hours For Coaching, Not Content. (`See The Coach Offer →` -> `coach.html`)
  - **Founders**: Build A Following On LinkedIn And X That Brings In Customers, Hires, And Investors. In Your Words, Without Your Evenings. (`See The Founder Offer →` -> `founder.html`)

### 9. How It Works (`HowItWorksSection.tsx` / `#how-it-works`)
- **Tag**: `How It Works`
- **Heading**: `From First Call To Daily Posts In Four Steps`
- **Steps**:
  1. **Strategy Call**: Thirty Minutes On Your Goals, Your Buyers, And The Platforms That Matter. You Leave With A Written Game Plan, Whether Or Not We Work Together.
  2. **Your Content Blueprint**: We Research Your Market And Map Your Angles, Platforms, And Posting Volume.
  3. **We Produce, You Approve**: Done For You: Our Team Runs Production. Done With You: We Build The System And Train Your Team To Run It.
  4. **Double Down On Winners**: A Weekly Report Shows What Worked. The Next Batch Is Built Around It.

### 10. Our Promise (`OurPromiseSection.tsx`)
- **Tag**: `Our Promise`
- **Heading**: `Live In 7 Days, Or Your First Month Is Free.`
- **Guarantees**:
  - *Your First Post Goes Live 7 Days After We Get Your Footage Or Avatar Files. If It Doesn't, You Don't Pay For Month One.*
  - *Choosing AI Avatar? You See A Test Video Before Anything Goes Live. If It Doesn't Look And Sound Like You, You Don't Pay.*

### 11. About Us (`AboutSection.tsx` / `#about`)
- **Tag**: `About Us`
- **Heading**: `Small On Purpose`
- **Narrative**: Four clients a quarter, senior team runs your account.
- **Founder Story Card**:
  - `[Add Your Founder Story Here: Who You Are, Why You Started, And One Result You're Proud Of.]`

### 12. Fit / Not A Fit (`FitAnalysisSection.tsx`)
- **We're A Fit If**:
  - You're A Coach Or Founder With A Real Offer
  - You Want To Be Seen Every Day, Not Go Viral Once
  - You'd Rather Spend Your Time On Clients Than Content
- **We're Not A Fit If**:
  - You Want Overnight Fame
  - You Won’t Send The Clips Or Avatar Files We Ask For
  - You Want The Cheapest Option, Not The Best One

### 13. Final Call To Action (`FinalCtaSection.tsx` / `#book`)
- **Tag**: `Four Clients A Quarter`
- **Heading**: `Three Months From Now, You'll Either Be Posting Every Day Or Still Planning To.`
- **Subtext**: `Book A 30 Minute Strategy Call. You Leave With A Written Game Plan, Even If We Never Work Together.`
- **Button**: `Book A Strategy Call` (Link: `YOUR_BOOKING_LINK` with fallback interactive intake modal)
- **Notice**: `First Post Live In 7 Days, Or Your First Month Is Free.`

### 14. Footer (`Footer.tsx`)
- Links: `Coaches` (`coach.html`) | `Founders` (`founder.html`)
- `© [Current Year, Auto-Filled By Script] AI Agentic Verse. All Rights Reserved.`

---

## ✦ Dedicated Standalone Landing Pages
- `public/coach.html`: Deep-dive offer page for high-ticket coaches.
- `public/founder.html`: Deep-dive offer page for founders, operators & CEOs.
