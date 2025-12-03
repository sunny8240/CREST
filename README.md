# CREST - Cybersecurity Club Website

![CREST](https://crestclub.vercel.app/assect/logo.png)

## 🎯 About CREST

CREST is a premier cybersecurity club dedicated to educating and inspiring the next generation of ethical hackers and cybersecurity professionals. We organize CTF (Capture The Flag) competitions, workshops, talks, and hackathons to help our community learn and master cybersecurity.

**Website**: https://crestclub.vercel.app

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Pages Overview](#pages-overview)
- [Development](#development)
- [Deployment](#deployment)
- [SEO & Analytics](#seo--analytics)
- [Contributing](#contributing)
- [Contact](#contact)

---

## ✨ Features

### 🎨 User Experience
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Modern UI** - Cyberpunk-inspired gradient design with smooth animations
- **Fast Loading** - Optimized assets and Vercel CDN for quick page loads
- **Mobile Navigation** - Smooth hamburger menu for mobile devices
- **Interactive Elements** - Grid canvas with mouse-over glow effects on homepage

### 🔍 SEO & Analytics
- **SEO Optimized** - Meta tags, structured data, and sitemap included
- **Open Graph** - Social media sharing optimized
- **Google Analytics Ready** - Setup instructions included
- **Search Console** - Robots.txt and sitemap.xml configured

### 🎪 Event Management
- **Event Showcase** - Dedicated events page with filtering and search
- **Registration Pages** - Separate registration forms for events and CTF
- **Event Details** - Comprehensive event information with meta details
- **Countdown Timers** - Live countdown for upcoming events
- **Category Filtering** - Filter events by type (CTF, Workshop, Talk, Hackathon)

### 📱 Pages
1. **Home** - Hero section with typing animation and interactive grid canvas
2. **About** - Club mission, values, and story
3. **Team** - Meet our leadership and core members
4. **Resources** - Learning materials and guides
5. **Events** - Upcoming events and CTF competitions
6. **Join** - Membership information and application
7. **Contact** - Get in touch with us

---

## 🛠 Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, animations, and flexbox/grid
- **JavaScript (Vanilla)** - No framework dependencies
- **Responsive Design** - Mobile-first approach

### Hosting & Deployment
- **Vercel** - Fast, serverless deployment with CDN
- **HTTPS** - Automatic SSL certificate
- **Auto-deploy** - GitHub integration for continuous deployment

### Performance
- **Optimized Images** - Compressed and served via CDN
- **Minified Assets** - CSS and JavaScript optimized
- **Caching Strategy** - Long-term caching for static assets
- **Fast TTFB** - Edge-optimized hosting

---

## 📁 Project Structure

```
crest/
├── index.html                         # Homepage with hero and typing animation
├── README.md                          # This file
├── robots.txt                         # Search engine crawling rules
├── sitemap.xml                        # XML sitemap for SEO
├── vercel.json                        # Vercel configuration (security headers, caching)
│
├── assect/                            # Assets folder
│   ├── logo.png                       # Club logo
│   ├── leaders/                       # Leadership team images
│   └── members/                       # Member profiles
│
├── css/                               # Stylesheets
│   ├── navbar.css                     # Unified navbar (used on all pages)
│   ├── home.css                       # Homepage specific styles
│   ├── about.css                      # About page styles
│   ├── contact.css                    # Contact page styles
│   ├── join.css                       # Join page styles
│   ├── resource.css                   # Resources page styles
│   └── team.css                       # Team page styles
│
├── js/                                # JavaScript files
│   ├── script.js                      # Global utilities and common functions
│   ├── home.js                        # Homepage interactivity (typing animation, grid canvas)
│   ├── about.js                       # About page functionality
│   └── resource.js                    # Resources page functionality
|   |__ team.js
│
└── pages/                             # Additional pages
    ├── about.html                     # About CREST page
    ├── team.html                      # Team/Leadership page
    ├── resource.html                  # Learning resources page
    ├── contact.html                   # Contact form page
    ├── join.html                      # Membership/Join page
    │
    └── event/                         # Event management pages
        ├── events.html                # Events listing with search/filter
        ├── events-styles.css          # Event cards and layout styles
        ├── events-script.js           # Event search and filtering logic
        ├── event-registration.html    # General event registration form
        ├── event-registration-script.js # Event registration logic
        ├── ctf-registration.html      # CTF competition registration
        ├── ctf-registration-script.js # CTF registration logic
        ├── registration-styles.css    # Registration form styles
        └── styles.css                 # Event page general styles
```

---

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required (static HTML/CSS/JS)
- Text editor for modifications (VS Code recommended)

### Installation

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/sunny8240/CREST.git
   cd crest
   ```

2. **Open Locally**
   - Double-click `index.html` in your file explorer, or
   - Use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```
   - Visit `http://localhost:8000`

3. **No Build Step Required**
   - All files are production-ready
   - Just edit HTML/CSS/JS and refresh browser

---

## 📄 Pages Overview

### 1. **Home** (`index.html`)
**Purpose**: Landing page with visual appeal and key information

**Key Features**:
- Animated hero section with typing animation (3 rotating words)
- Interactive grid canvas with mouse-tracking glow effects
- Call-to-action buttons for Events and Join
- Responsive design optimized for all devices

**Technologies**:
- CSS: Gradients, animations, flexbox
- JavaScript: Typing animation logic, grid canvas rendering
- Performance: Smooth animations with 60fps rendering

**Customization**:
- Edit typing words in `js/home.js` (search for `const words = [...]`)
- Modify hero text in the `<section class="hero">` tag
- Adjust colors in `css/home.css`

---

### 2. **About** (`pages/about.html`)
**Purpose**: Tell the CREST story and mission

**Key Sections**:
- Club mission and values
- History and achievements
- Why join CREST
- Current statistics

**Customization**:
- Update mission statement in HTML
- Modify about text in the `<section class="about-content">` tag
- Adjust colors and layout in `css/about.css`

---

### 3. **Team** (`pages/team.html`)
**Purpose**: Showcase leadership and core members

**Key Features**:
- Leadership section with core team members
- Member profiles with images
- Social links for each member
- Responsive grid layout

**Customization**:
- Add/remove team members in HTML
- Update member images in `assect/leaders/` or `assect/members/`
- Modify layout in `css/team.css`
- Update social links and descriptions

---

### 4. **Resources** (`pages/resource.html`)
**Purpose**: Provide learning materials and guides

**Key Features**:
- Categorized learning resources
- Links to tutorials and tools
- Recommended reading list
- Beginners' guides

**Customization**:
- Add/update resource links in HTML
- Modify categories and descriptions
- Style in `css/resource.css`

---

### 5. **Events** (`pages/event/events.html`)
**Purpose**: Showcase and manage club events

**Key Features**:
- Featured event spotlight
- Event search functionality
- Category filtering (CTF, Workshop, Talk, Hackathon)
- Event cards with detailed information
- Countdown timers for upcoming events
- Registration buttons for each event

**Event Card Details**:
- Event title and description
- Date, time, and location
- Difficulty level / Audience level
- Registration link
- Category badge
- Event image

**Search & Filter**:
- Search by event name
- Filter by category
- Real-time results

**Customization**:
- Add/edit events in the events array in HTML or JavaScript
- Modify event details in cards
- Adjust styling in `pages/event/events-styles.css`
- Update registration links to point to your forms

---

### 6. **Join** (`pages/join.html`)
**Purpose**: Encourage membership and provide application info

**Key Sections**:
- Membership benefits
- Application process steps
- Application form or link
- FAQ about membership

**Customization**:
- Update membership benefits
- Modify application process steps
- Link to your actual application form
- Update contact information

---

### 7. **Contact** (`pages/contact.html`)
**Purpose**: Enable communication and feedback

**Key Features**:
- Contact form
- Social media links
- Email and phone information
- Office location (if applicable)

**Customization**:
- Update contact email address
- Add social media links
- Modify form fields
- Update location information

---

### 8. **Event Registration** (`pages/event/event-registration.html`)
**Purpose**: Allow users to register for general events

**Key Features**:
- Registration form with validation
- Event selection dropdown
- Participant information collection
- Submission confirmation

**Customization**:
- Add/update event options in dropdown
- Modify form fields
- Update submission endpoint or email
- Adjust styling in `pages/event/registration-styles.css`

---

### 9. **CTF Registration** (`pages/event/ctf-registration.html`)
**Purpose**: Specialized registration for CTF competitions

**Key Features**:
- CTF-specific registration form
- Team formation options
- Skill level assessment
- Rules and guidelines

**Customization**:
- Add CTF competition options
- Modify skill level categories
- Update rules and guidelines
- Link to actual CTF platform

---

## 🔧 Development

### File Organization Best Practices

1. **CSS Files**:
   - `navbar.css` - Keep shared; don't edit unless updating global nav
   - Page-specific CSS - Edit freely for page styling
   - Event CSS - For event page improvements

2. **JavaScript Files**:
   - `script.js` - Global utilities and shared functions
   - Page-specific JS - For page-specific functionality
   - Keep functions modular and well-commented

3. **HTML Files**:
   - Keep semantic HTML structure
   - Use consistent class naming
   - Link all CSS and JS files correctly

### Common Tasks

**Add a New Page**:
1. Create `pages/newpage.html`
2. Create `css/newpage.css`
3. Link navbar.css: `<link rel="stylesheet" href="../css/navbar.css">`
4. Add navigation link to navbar in all pages
5. Include relevant meta tags for SEO

**Add Navigation Link**:
1. Open `css/navbar.css`
2. Find the `<nav class="navbar">` section
3. Add new link in the list
4. Update both desktop and mobile navigation

**Modify Event**:
1. Edit events array in `pages/event/events.html` or JavaScript
2. Update event card HTML structure if needed
3. Modify styling in `pages/event/events-styles.css`

**Update Contact Info**:
1. Edit `pages/contact.html`
2. Update email: search for "contact@crestclub.vercel.app"
3. Update phone numbers if applicable
4. Update address if applicable

### Code Quality Standards

- **HTML**: Use semantic tags (`<header>`, `<nav>`, `<section>`, `<footer>`)
- **CSS**: Group related properties, use consistent naming conventions
- **JavaScript**: Comment complex functions, use descriptive variable names
- **Mobile First**: Always test on mobile and desktop

### Testing

Test all pages and features before deployment:
- **Desktop**: Chrome, Firefox, Safari
- **Tablet**: iPad, Android tablets
- **Mobile**: iPhone, Android phones
- **Responsive**: Use browser DevTools to test various screen sizes
- **Performance**: Check page load times with Vercel dashboard

**Mobile Breakpoints**:
- 480px - Small phones
- 640px - Standard phones
- 768px - Tablets
- 1024px - Small desktops

---

## 🚀 Deployment

### Vercel Setup (Already Configured)

The site is deployed on Vercel at: **https://crestclub.vercel.app**

**Key Configuration** (`vercel.json`):
- Security headers (X-Content-Type-Options, X-Frame-Options, etc.)
- Caching: 1-year for static assets, 1-hour for HTML
- HTTPS automatic (enabled by default)

### Deploy Changes

**Automatic Deploy** (GitHub Connected):
1. Push changes to main branch:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```
2. Vercel automatically builds and deploys
3. Changes live within 1-2 minutes

**Manual Deploy**:
1. Visit https://vercel.com/dashboard
2. Select crest project
3. Click "Redeploy" if needed

### Environment Variables
- No environment variables currently used
- If adding backend/API: Create `.env.local` file (don't commit to git)

### Monitoring Deployment
- Vercel Dashboard: https://vercel.com/dashboard
- View build logs and deployment history
- Check performance metrics
- Monitor error rate

---

## 🔍 SEO & Analytics

### SEO Setup (Already Optimized)

The website includes comprehensive SEO configuration:

**Implemented Features**:
1. ✅ **Meta Tags** - Title, description, keywords on all 7 pages
2. ✅ **Open Graph** - Social media sharing optimized
3. ✅ **Twitter Cards** - Twitter-specific metadata
4. ✅ **Canonical URLs** - Prevents duplicate content issues
5. ✅ **Structured Data** - JSON-LD Organization schema on homepage
6. ✅ **Robots.txt** - Search engine crawling rules
7. ✅ **Sitemap.xml** - Complete page inventory (7 pages with priorities)
8. ✅ **Mobile Optimized** - Responsive design with viewport settings
9. ✅ **Fast Loading** - Optimized with CDN caching
10. ✅ **HTTPS** - Secure connection (Vercel automatic)

### Register with Search Engines

**Google Search Console**:
1. Visit https://search.google.com/search-console
2. Click "URL prefix" and enter `https://crestclub.vercel.app`
3. Verify ownership (choose any method)
4. Go to Sitemap and submit `https://crestclub.vercel.app/sitemap.xml`
5. Monitor indexing status and fix any errors

**Bing Webmaster**:
1. Visit https://www.bing.com/webmasters/
2. Add site: `https://crestclub.vercel.app`
3. Verify (use meta tag method)
4. Submit sitemap

**Performance Targets**:
- Lighthouse Score: 90+ (desktop), 85+ (mobile)
- Core Web Vitals: All green
- Page load: < 3 seconds
- Time to interactive: < 4 seconds

### Google Analytics

1. Create Google Analytics account
2. Set up property for `https://crestclub.vercel.app`
3. Copy tracking ID/measurement ID
4. Add to `index.html` and all pages:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'YOUR_MEASUREMENT_ID');
   </script>
   ```

### SEO Documentation

- See `SEO-GUIDE.md` for detailed setup instructions
- See `SEO-CHECKLIST.md` for implementation tracking
- See `SETUP-INSTRUCTIONS.md` for next steps

---

## 🎨 Design & Customization

### Color Scheme

**Primary Colors** (Used in gradients):
- Purple: `#a855f7` (accent)
- Dark Blue: `#0f172a` (background)
- Light Blue: `#1e293b` (foreground)
- Cyan: `#06b6d4` (highlights)

**Modify Colors**:
1. Open `css/navbar.css` or page-specific CSS
2. Find color values: `#a855f7`, `#0f172a`, etc.
3. Replace with your brand colors
4. Update all pages for consistency

### Fonts

**Current Fonts**:
- Headers: System fonts (Arial, Helvetica, sans-serif)
- Body: System fonts

**Add Custom Fonts**:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');

body {
  font-family: 'YourFont', sans-serif;
}
```

### Animations

- **Typing Animation** (homepage): Edit in `js/home.js`
- **Grid Canvas** (homepage): Edit in `js/home.js`
- **Card Hover Effects** (events): Edit in `pages/event/events-styles.css`
- **Navigation Transitions**: Edit in `css/navbar.css`

---

## 🐛 Troubleshooting

### Common Issues

**Mobile Menu Not Working**:
- Check if hamburger icon is visible (should appear on < 768px)
- Verify `navbar.css` is linked correctly
- Check browser console for JavaScript errors

**Images Not Loading**:
- Check path: `assect/` not `asset/` (custom spelling)
- Verify images exist in correct folder
- Check file names match exactly (case-sensitive)

**Styling Not Applied**:
- Clear browser cache (Ctrl+Shift+Del)
- Check CSS file is linked in HTML
- Verify no CSS typos
- Check for conflicting CSS rules

**Event Registration Not Working**:
- Verify form submission endpoint is correct
- Check form field names match server expectations
- Test form in browser console
- Verify no JavaScript errors

**SEO Not Showing Results**:
- Allow 4-6 weeks for indexing
- Submit sitemap to Google Search Console
- Check robots.txt allows crawling
- Verify no `noindex` tags in meta tags
- Use Google Search Console to request indexing

### Debug Mode

Enable debug console:
```javascript
// Add to script.js temporarily
window.DEBUG = true;
console.log = window.DEBUG ? console.log : () => {};
```

### Performance Issues

- Run Lighthouse audit in DevTools
- Check Vercel analytics dashboard
- Compress images if large
- Minimize CSS/JS if needed
- Review Core Web Vitals

---

## 📊 Performance Metrics

### Current Setup
- **Hosting**: Vercel (global CDN)
- **TTFB**: < 100ms (edge-optimized)
- **Cache**: 1 year for static, 1 hour for HTML
- **HTTPS**: Automatic
- **Compression**: Automatic gzip

### Target Metrics
- Lighthouse: 90+ (desktop), 85+ (mobile)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Core Web Vitals: All green

---

## 🤝 Contributing

### How to Contribute

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make changes and test thoroughly
4. Commit: `git commit -m "Add: description"`
5. Push: `git push origin feature/your-feature`
6. Create Pull Request

### Contribution Guidelines

- Test on mobile and desktop before submitting
- Follow code style (consistent naming, formatting)
- Update documentation if adding features
- Test SEO if adding pages
- Ensure no broken links or images
- Test accessibility (keyboard navigation, screen readers)

---

## 📧 Contact

**Email**: contact@crestclub.vercel.app

**Social Media**:
- Update social links in footer and team pages

**Website**: https://crestclub.vercel.app

---

## 📄 License

This project is open source. Modify and use freely for your club.

---

## 🙏 Acknowledgments

- Vercel for hosting
- Community members for feedback and improvements
- All contributors and members of CREST

---

## 📚 Related Documentation

- **SEO Guide**: `SEO-GUIDE.md` - Complete SEO setup and optimization
- **SEO Checklist**: `SEO-CHECKLIST.md` - Track SEO implementation
- **Setup Instructions**: `SETUP-INSTRUCTIONS.md` - Deployment next steps
- **SEO Verification**: `SEO-VERIFICATION.md` - Verify and monitor SEO

---

**Last Updated**: 2024
**Maintained By**: CREST Team
**Status**: ✅ Active and Maintained
│   ├── about.js              # About page functionality
│   ├── resource.js           # Resource page functionality
│   └── [other scripts]       # Additional scripts
├── pages/                     # Main pages
│   ├── about.html            # About us page
│   ├── contact.html          # Contact page
│   ├── resource.html         # Resources/Hacktivities
│   ├── team.html             # Team/Organization chart
│   ├── tutorial.html         # Tutorials page
│   └── event/                # Event management folder
│       ├── events.html       # Events listing & details
│       ├── ctf-registration.html      # CTF registration form
│       ├── event-registration.html    # General event registration
│       ├── styles.css        # Event styles
│       ├── events-styles.css # Events page specific styles
│       ├── registration-styles.css    # Registration form styles
│       ├── events-script.js  # Events functionality
│       ├── ctf-registration-script.js # CTF registration logic
│       └── event-registration-script.js # Event registration logic
└── README.md                 # This file
```

---

## 🌐 Pages Overview

### 1. **Homepage** (`index.html`)
- **Purpose**: Main landing page with hero section
- **Features**:
  - Interactive grid canvas animation
  - Typing text animation
  - Call-to-action buttons
  - Club information and mission statement
- **Navigation**: Full navbar with links to all sections

### 2. **About** (`pages/about.html`)
- **Purpose**: Learn about CREST
- **Sections**:
  - Hero with gradient text
  - Club story and journey
  - Core values and objectives
  - Membership benefits
- **Styling**: Modern gradient backgrounds with animations

### 3. **Events** (`pages/event/events.html`)
- **Purpose**: Display all club events
- **Features**:
  - Event categories (CTF, Workshops, Talks, Hackathons)
  - Featured event section with countdown timer
  - Event cards with details:
    - Event date and time
    - Location information
    - Participant count
    - Prize information
  - Event gallery with image filtering
- **Event Types**:
  - CTF Competitions
  - Workshops
  - Guest Talks
  - Hackathons

### 4. **Event Registration** (`pages/event/ctf-registration.html` & `event-registration.html`)
- **Purpose**: Registration forms for events
- **Features**:
  - Team-based registration
  - Participant information forms
  - Event details display
  - Confirmation system
- **Forms Include**:
  - Team name and details
  - Member information
  - Contact details

### 5. **Resources** (`pages/resource.html`)
- **Purpose**: Learning materials and tools
- **Features**:
  - Searchable resource library
  - Difficulty filters (Easy, Medium, Hard)
  - Categorized resources
  - Learning paths
  - Write-ups and walkthroughs

### 6. **Team** (`pages/team.html`)
- **Purpose**: Organization chart and team structure
- **Features**:
  - Leadership hierarchy
  - Team member profiles
  - Roles and responsibilities
  - Contact information

### 7. **Contact** (`pages/contact.html`)
- **Purpose**: Get in touch with the club
- **Features**:
  - Contact form
  - Multiple contact channels
  - Location information
  - Social media links
  - Response time expectations

### 8. **Tutorials** (`pages/tutorial.html`)
- **Purpose**: Step-by-step learning guides
- **Sections**:
  - Beginner tutorials
  - Intermediate guides
  - Advanced topics
  - Topic categories

---

## 🎨 Design System

### Color Scheme
```css
:root {
  --accent: #00ffd1;              /* Cyan - Primary highlight */
  --text-primary: #e2e8f0;        /* Light text */
  --text-secondary: #94a3b8;      /* Secondary text */
  --text-muted: #64748b;          /* Muted text */
  --border: rgba(71, 85, 105, 0.2); /* Border color */
}
```

### Background
- Gradient: `linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)`
- Dark cybersecurity aesthetic
- Glass-morphism effects on navbar

### Typography
- Font Family: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto`
- Main: Responsive font sizes
- Accent Color: Cyan (#00ffd1) for highlights

---

## 📱 Navigation Structure

### Main Navigation Links
| Link | URL | Location |
|------|-----|----------|
| Home | `/index.html` | All pages |
| About | `/pages/about.html` | All pages |
| Resources | `/pages/resource.html` | All pages |
| Events | `/pages/event/events.html` | All pages |
| Team | `/pages/team.html` | All pages |
| Contact | `/pages/contact.html` | All pages |

### Navbar Features
- **Fixed Position**: Stays at top while scrolling
- **Centered Logo**: 150x150px logo in center
- **Left Navigation**: Home, About, Resources
- **Right Navigation**: Events, Team, Contact
- **Mobile Menu**: Hamburger menu for responsive design
- **Active State**: Highlights current page

---

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, animations, transitions
- **JavaScript**: Interactive features and event handling
- **Responsive Design**: Mobile-first approach

### Key Features

#### 1. **Navbar**
```html
<nav class="navbar" id="navbar">
  <div class="nav-container">
    <div class="nav-left"><!-- Left links --></div>
    <div class="nav-center"><!-- Logo --></div>
    <div class="nav-right"><!-- Right links --></div>
    <button class="mobile-menu-btn"><!-- Hamburger --></button>
  </div>
  <div class="mobile-menu"><!-- Mobile menu items --></div>
</nav>
```

#### 2. **Event Cards**
- Date display
- Category badges
- Event metadata (time, location, participants)
- Call-to-action buttons

#### 3. **Animations**
- Hover effects on links and buttons
- Gradient text animations
- Smooth transitions
- Canvas-based animations on hero sections

---

## 📋 Event System

### Event Categories
1. **CTF Competitions**
   - Annual Championship (Dec 22)
   - Beginner-Friendly CTF (Feb 8)
   - Spring Jeopardy CTF (Mar 15)

2. **Workshops**
   - Web Security Workshop (Dec 15)
   - Penetration Testing Basics (Jan 12)
   - Cryptography & Encryption (Jan 19)

3. **Guest Talks**
   - Cloud Security Masterclass (Jan 5)
   - Industry expert sessions

4. **Hackathons**
   - Security Tools Hackathon (Jan 26)
   - 48-hour building challenge

### Event Details Included
- Date and time
- Location (Physical or Online)
- Event description
- Participant capacity
- Registration links
- Prize information (if applicable)

---

## 🎯 Key Sections

### Hero Sections
Each main page includes a hero section with:
- Gradient overlay
- Animated background (canvas)
- Clear heading and subheading
- Call-to-action buttons

### Content Areas
- Section headers with tags
- Styled containers
- Responsive grids
- Image galleries

### Forms
- Registration forms with validation
- Contact forms
- Search functionality

---

## 🔗 URL Routing

All URLs use absolute paths for cross-site navigation:
```
/index.html                    → Homepage
/pages/about.html              → About page
/pages/contact.html            → Contact page
/pages/resource.html           → Resources page
/pages/team.html               → Team page
/pages/tutorial.html           → Tutorials page
/pages/event/events.html       → Events listing
/pages/event/ctf-registration.html → CTF registration
/pages/event/event-registration.html → Event registration
```

---

## 📊 Events Statistics (Displayed)

- **12+** Upcoming Events
- **500+** Participants
- **25+** Competitions
- **$10K+** Prize Money

---

## 🚀 Getting Started

### Setup
1. Extract files to web server
2. Ensure all paths are correctly configured
3. Update asset paths if necessary
4. Test responsive design on mobile

### Customization
- Update colors in CSS variables
- Modify event data in HTML
- Add new pages following existing structure
- Update navigation in navbar

---

## 📝 File Naming Conventions

- **HTML**: Lowercase with hyphens (`about.html`, `ctf-registration.html`)
- **CSS**: Descriptive names (`event.css`, `registration-styles.css`)
- **JS**: Corresponding to pages (`events-script.js`)
- **Assets**: Lowercase in folders (`assect/logo.png`)

---

## 🎓 Content Areas

### Resources Page Features
- Search functionality
- Difficulty filters
- Category filters
- Resource cards with:
  - Title and description
  - Difficulty level
  - Category tags
  - Links to external resources

### Team Page Features
- Organizational hierarchy
- Member profiles
- Role descriptions
- Contact information

---

## 💻 Responsive Breakpoints

- **Desktop**: 1280px+ (Full layout)
- **Tablet**: 768px - 1280px (Optimized spacing)
- **Mobile**: < 768px (Mobile menu, single column)

---

## 🔐 Security Features

- Secure form handling
- Validated input fields
- CSRF protection ready
- Semantic HTML structure

---

## 📞 Contact Information

- **Email**: contact@crest-club.edu
- **Phone**: +1 (555) 123-4567
- **Location**: Computer Science Building, Room 405

---

## 📄 License

Copyright © 2024 CREST Cybersecurity Club. All rights reserved.

---

## 👥 Team Structure

- **Leadership**: President, Vice President
- **Organizers**: Event, Technical, Marketing teams
- **Members**: Active club members and participants

---

## 🎉 Events Calendar

### December 2024
- Dec 15: Web Security Workshop
- Dec 22: Annual CTF Championship

### January 2025
- Jan 5: Cloud Security Masterclass
- Jan 12: Penetration Testing Basics
- Jan 19: Cryptography & Encryption
- Jan 26: Security Tools Hackathon

### February 2025
- Feb 8: Beginner-Friendly CTF

### March 2025
- Mar 15: Spring Jeopardy CTF

---

## 📚 Learning Resources

- CTF write-ups
- Security tutorials
- Tool documentation
- Best practices guides
- Video walkthroughs

---

## 🔍 SEO Optimization

- Semantic HTML tags
- Descriptive page titles
- Meta descriptions
- Proper heading hierarchy
- Image alt attributes

---

**Last Updated**: December 1, 2025

---

*For more information, visit the website or contact the CREST team.*
