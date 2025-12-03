# Design Guidelines for Namakkal Self Drive Cars Website

## Design Approach
**Mobile-First Reference-Based Design** - Drawing inspiration from modern car rental and travel booking platforms with emphasis on conversion-focused design optimized for Indian mobile users.

## Core Design Principles
- **Mobile-First Priority**: 90% of visitors on mobile - thumb-friendly interactions, fast loading
- **Conversion-Focused**: Every section pushes users toward WhatsApp booking CTAs
- **Premium Yet Accessible**: Professional appearance that builds trust while remaining approachable
- **Performance-Optimized**: Clean, fast-loading design with subtle, purposeful animations

## Typography
- **Primary Font**: Poppins (Google Fonts) across all elements
- **Hierarchy**:
  - Hero headline: Bold, large, immediately readable on mobile
  - Tagline: Medium weight, clear supporting message
  - Section headers: Bold, clear visual breaks
  - Body text: Regular weight, optimized for mobile readability
  - Pricing: Bold, prominent display

## Color Palette
- **Primary**: Deep Blue (#0d6efd) - trust, reliability
- **Accent**: Green (WhatsApp brand color) - CTAs and action buttons
- **Backgrounds**: White and light gray for section alternation
- **Subtle gradients**: Use sparingly for depth and premium feel

## Layout System
- **Spacing**: Bootstrap 5 spacing utilities (p-3, p-4, mb-4, etc.)
- **Mobile Grid**: Single column layouts, stack everything vertically
- **Desktop Grid**: 2-4 columns for services and fleet sections
- **Section Padding**: Generous breathing room between sections

## Component Library

### Navigation
- **Fixed top navbar**: Logo left, Instagram icon right, minimal and clean
- **Mobile behavior**: Stays visible, doesn't obstruct content

### Hero Section
- **Full viewport height on mobile**
- **Layered composition**: HD background image of car on Tamil Nadu highway (sunrise/sunset), dark overlay for text readability
- **Content stack**: Logo/brand → headline → tagline → 4 check-bullet features → dual WhatsApp CTAs
- **Buttons with blurred backgrounds** for readability over images

### Service Cards (4 cards)
- **Mobile**: 1 column stack
- **Desktop**: 2x2 or 4-column grid
- **Card structure**: Icon → title → brief description → action hint
- **Special highlight**: International Booking card distinguished visually

### Fleet Showcase
- **Mobile**: Vertical card scroll or 1-column grid
- **Desktop**: 3-4 column responsive grid
- **Card elements**: HD car photo (dominant) → model name → starting price (prominent) → WhatsApp booking button

### Why Choose Us
- **6 icon-based benefits in grid**
- **Mobile**: 2 columns
- **Desktop**: 3 columns or 6-column single row
- **Style**: Icon (Font Awesome) → short benefit text

### CTAs & Floating Elements
- **Dual WhatsApp buttons** throughout (alternating between two numbers)
- **Floating WhatsApp widget**: Bottom-right desktop, bottom-center mobile, always accessible
- **Instagram integration**: Navbar + footer prominence

### Footer
- **WhatsApp numbers** with click-to-chat buttons
- **Instagram profile link** with visual button/widget
- **Final conversion push** before page end

## Animations
- **Subtle and purposeful only**:
  - Fade-in on scroll (Intersection Observer) for sections
  - Gentle hover effects on cards and buttons
  - Subtle button pulse on primary CTAs (not overwhelming)
  - Optional light parallax on hero background
- **Performance**: Keep animations lightweight, no complex effects

## Icons
- **Font Awesome** via CDN for all icons (check marks, service icons, benefits, social media)

## Images
All images must be high-quality, HD, professional stock photos:

### Hero Background
- **Large HD image**: Car on scenic Tamil Nadu highway with sunrise/sunset lighting
- **Mood**: Premium, aspirational, travel-ready
- **Treatment**: Subtle dark overlay for text contrast

### Fleet Section (8-10 car images)
- **Models**: Swift, Dzire, Ertiga, Innova Crysta, and similar popular Indian rental cars
- **Style**: Clean, modern cars in attractive settings
- **Lighting**: Well-lit, professional product photography style

### Service Cards
- **Supporting visuals**: Indian roads, travel scenes, driver images
- **Quality**: Premium stock photography aesthetic

### Technical Image Requirements
- Use actual HD image URLs (Unsplash/Pexels style)
- Lazy loading for performance
- WebP format preferred where possible
- Logo placeholder: `logo.png` (user will upload)

## Accessibility & Mobile Optimization
- **Thumb-friendly tap targets**: Minimum 44x44px for mobile
- **Fast loading**: Optimized images, minimal JavaScript
- **Smooth scrolling**: Native smooth scroll behavior
- **Clear hierarchy**: Easy scanning on small screens
- **WhatsApp integration**: One-tap to open chat with pre-filled message

## Key Differentiators
- **International booking service** highlighted prominently
- **Dual WhatsApp contact** system for redundancy
- **Instagram presence** integrated throughout
- **Tamil Nadu-specific** imagery and messaging
- **Local trust signals**: 24/7 support, insurance, sanitization