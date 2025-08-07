# Overview

Jakintza Ruha: Academy of Remembrance is a mystical learning platform designed as a sacred academy of magic, memory, and mastery for both children and adults. The application features an immersive fantasy-themed interface with two distinct learning pathways: "The 7 Realms" for children and an adult pathway focused on elemental wisdom and cosmic remembrance. The platform emphasizes storytelling, sacred play, and mystical learning experiences through a beautifully designed portal-based navigation system.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Framework**: Custom design system built on Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring mystical color schemes and animations
- **Typography**: Custom font integration (Cinzel Decorative, EB Garamond) for fantasy theming

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with `/api` prefix routing
- **Development Setup**: Vite middleware integration for seamless development experience
- **Error Handling**: Centralized error middleware with structured error responses

## Data Storage Solutions
- **ORM**: Drizzle ORM with PostgreSQL dialect configuration
- **Database**: PostgreSQL via Neon Database serverless connection
- **Schema Management**: Type-safe schema definitions with Zod validation
- **Migrations**: Drizzle Kit for database migrations and schema evolution
- **Storage Interface**: Abstracted storage layer with both memory and database implementations

## Authentication and Authorization
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **User Schema**: Basic user model with username/password authentication
- **Security**: Prepared for secure session handling and credential management

## External Dependencies
- **Database Provider**: Neon Database (@neondatabase/serverless) for PostgreSQL hosting
- **UI Components**: Comprehensive Radix UI component library for accessible interface elements
- **Development Tools**: 
  - Replit-specific plugins for development environment integration
  - Runtime error overlay for enhanced debugging
  - Cartographer plugin for code mapping
- **Build Tools**: esbuild for production bundling, TypeScript compiler for type checking
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer

## Design Philosophy
The application embraces a mystical, academy-themed aesthetic with:
- Portal-based navigation metaphors
- Starfield backgrounds with aurora effects
- Sacred geometry and runic design elements
- Responsive design optimized for both desktop and mobile experiences
- Accessibility-first approach using Radix UI primitives
- Performance-optimized with modern React patterns and query caching