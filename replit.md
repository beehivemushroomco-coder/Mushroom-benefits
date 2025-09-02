# Mushroom Health Website (mushroomhealth.co)

## Overview

This is a modern, mobile-first React application called "Mushroom Health" (mushroomhealth.co) that showcases information about 25 medicinal and gourmet mushrooms. The website serves as a comprehensive guide featuring detailed mushroom profiles, health benefits, traditional uses, active compounds, and safety information. Users can browse through mushroom cards on the home page, search across all mushroom data, and view detailed information pages for individual mushrooms.

The application is built with a focus on natural, vibrant design aesthetics with automatic dark mode support based on user system preferences. It includes advertising integration through Google AdSense and affiliate marketing capabilities for mushroom-related products.

## Recent Changes

### September 2, 2025 - Rebranding to mushroomhealth.co
- Updated site title from "Mushroom Benefits" to "Mushroom Health" 
- Changed branding across header, footer, and page titles
- Updated copyright to mushroomhealth.co
- Added meta tags and SEO optimization for new domain
- Created privacy policy and disclaimer pages
- Removed social media icons from footer
- Removed Categories column from footer
- Updated tagline to "mushroomhealth.co - Your Source for Mushroom Health Information"

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses React 18 with TypeScript, built on top of a modern Vite development environment. The frontend follows a component-based architecture with:

- **Routing**: wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Type Safety**: Full TypeScript coverage with shared schemas using Zod

### Backend Architecture
The backend is a RESTful Express.js server with:

- **API Structure**: RESTful endpoints for mushroom data operations
- **Data Layer**: Memory-based storage (MemStorage) that loads from JSON files
- **Middleware**: CORS, request logging, and error handling
- **Development**: Vite middleware integration for hot reloading

### Data Storage Solutions
Currently uses file-based storage with mushrooms data loaded from JSON files into memory:

- **Primary Storage**: In-memory Map data structure for fast lookups
- **Data Source**: JSON file (`client/src/lib/mushrooms.json`) with mushroom information
- **Database Ready**: Drizzle ORM configured for PostgreSQL migration when needed
- **Schema Validation**: Zod schemas ensure data consistency across client and server

### API Design
RESTful API endpoints:
- `GET /api/mushrooms` - Retrieve all mushrooms
- `GET /api/mushrooms/:id` - Get specific mushroom by ID  
- `GET /api/mushrooms/search/:query` - Search mushrooms by name, benefits, or compounds

### Theme System
Implements a sophisticated theming system:
- **CSS Variables**: Dynamic theming with CSS custom properties
- **Auto Detection**: System preference detection for dark/light mode
- **Color Palette**: Nature-inspired colors (greens, earth tones) with neutral accents

### Component Architecture
- **Shared Components**: Header, Footer, Search overlay, Sidebar
- **Page Components**: Home page with mushroom grid, detailed mushroom pages
- **UI Components**: Complete shadcn/ui component library
- **Layout**: Responsive design with mobile-first approach

## External Dependencies

### Core Framework Dependencies
- **React 18**: Modern React with hooks and concurrent features
- **Express.js**: Node.js web application framework
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking across the entire application

### Database & Validation
- **Drizzle ORM**: Type-safe ORM with PostgreSQL support (configured but not yet implemented)
- **Neon Database**: Serverless PostgreSQL integration ready for deployment
- **Zod**: Runtime type validation and schema definition

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible, unstyled UI primitives for complex components
- **shadcn/ui**: Pre-built components based on Radix UI
- **Lucide React**: Modern icon library
- **class-variance-authority**: Type-safe styling variants

### Data Fetching & State
- **TanStack Query**: Powerful data synchronization for server state
- **React Hook Form**: Form handling with validation

### Development & Build Tools
- **ESBuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution engine for development
- **Replit Integration**: Development environment integration with error overlays

### Potential Integrations
- **Google AdSense**: Advertisement integration (placeholder components ready)
- **Affiliate Marketing**: Product recommendation system (schema prepared)
- **Analytics**: User interaction tracking capabilities
- **CDN**: Image hosting for mushroom photographs

The architecture is designed to scale from the current JSON-based storage to a full PostgreSQL database while maintaining the same API contracts and user experience.