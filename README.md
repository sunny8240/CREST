# CREST - Cybersecurity Club Website

A modern, responsive website for the CREST Cybersecurity Club featuring events, resources, team information, and community engagement.

---

## 📁 Project Structure

```
creats/
├── index.html                 # Homepage
├── assect/                    # Assets folder
│   ├── logo.png              # Club logo
│   ├── leaders/              # Leadership team images
│   └── members/              # Member profiles
├── css/                       # Stylesheets
│   ├── styles.css            # Global styles
│   ├── home.css              # Homepage styles
│   ├── about.css             # About page styles
│   ├── event.css             # Event page styles
│   ├── resource.css          # Resource page styles
│   └── [other styles]        # Additional stylesheets
├── js/                        # JavaScript files
│   ├── script.js             # Main script
│   ├── home.js               # Homepage functionality
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
