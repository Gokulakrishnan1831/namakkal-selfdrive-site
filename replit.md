# Namakkal Self Drive Cars

## Overview

A single-page marketing website for a car rental business in Namakkal, Tamil Nadu. The site promotes self-drive car rentals with a unique international booking feature allowing NRIs to book from the UK/Europe and pick up vehicles in Tamil Nadu. Built as a mobile-first, conversion-focused landing page with WhatsApp integration for bookings.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Stack**
- React 18 with TypeScript for type safety and component-based UI
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (single page application)
- TanStack Query for server state management and data fetching

**UI Component System**
- Shadcn/ui component library built on Radix UI primitives (New York style variant)
- Tailwind CSS for utility-first styling with custom theme configuration
- CSS variables for design tokens enabling theme customization
- Mobile-first responsive design approach (targeting 90% mobile visitors)

**Styling Strategy**
- Custom Tailwind theme with brand colors (Deep Blue primary, WhatsApp green accents)
- Font: Poppins (Google Fonts) for all typography
- Elevation and shadow system for subtle depth
- Bootstrap 5-inspired spacing utilities
- Hover and active state animations for interactive elements

**Design System Decisions**
The application uses a comprehensive design system based on the `design_guidelines.md` file, prioritizing:
- Mobile-first layouts with single-column stacking on mobile
- Conversion-focused design pushing users toward WhatsApp CTAs
- Premium yet accessible visual language
- Performance optimization with minimal, purposeful animations

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server
- Custom middleware for JSON parsing and URL-encoded request bodies
- Request logging middleware tracking method, path, status, and duration
- Modular route registration system separating concerns

**Architecture Pattern**
- Separation of concerns: routes, storage, and server initialization are modular
- Storage abstraction layer with interface-based design (IStorage)
- In-memory storage implementation (MemStorage) for development
- Prepared for database migration through storage interface

**Build System**
- ESBuild for server-side bundling with selective dependency bundling
- Allowlist strategy for commonly-used dependencies to reduce syscalls and improve cold start
- Separate client and server build processes
- Production vs development environment handling

### Data Storage

**Current Implementation**
- In-memory storage using Map data structures
- User entity with UUID primary keys
- Schema-first approach using Drizzle ORM schema definitions

**Database Configuration**
- PostgreSQL configuration prepared via Drizzle Kit
- Schema definitions in `shared/schema.ts` for type sharing between client/server
- Migration system configured but using in-memory storage currently
- Drizzle Zod integration for runtime validation from database schemas

**Schema Design**
- Users table with username (unique), password, and UUID id
- Extensible schema structure prepared for additional entities
- Type inference from schema for compile-time type safety

### External Dependencies

**UI Component Libraries**
- Radix UI primitives for accessible, unstyled components (accordion, dialog, dropdown, etc.)
- Embla Carousel for touch-friendly image carousels
- Lucide React for consistent iconography
- React Hook Form with Zod resolvers for form validation
- Date-fns for date manipulation
- CMDK for command palette interfaces

**Database & ORM**
- Drizzle ORM for type-safe database queries
- Neon Database serverless PostgreSQL driver
- Connect-pg-simple for PostgreSQL session storage (configured but not actively used)

**Development Tools**
- Replit-specific plugins (cartographer, dev-banner, runtime-error-modal) for enhanced DX
- TypeScript for static type checking
- Path aliases configured (@/ for client, @shared for shared code, @assets for assets)

**Third-Party Integrations**
- WhatsApp Web API for direct messaging CTAs (two phone numbers: +91 80565 57212, +91 87547 16212)
- Instagram integration (link to @namakkal.selfdrivecars)
- Font Awesome 6.5.1 for icons
- Google Fonts (Poppins) for typography

**Asset Management**
- Unsplash images for high-quality stock photography
- HD car images and scenic Tamil Nadu highway backgrounds
- Logo placeholder (logo.png) for brand identity