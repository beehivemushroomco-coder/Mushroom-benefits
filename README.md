# Mushroom Benefits Website

A comprehensive, modern web application dedicated to providing information about medicinal and gourmet mushrooms, their health benefits, traditional uses, and scientific research.

## Features

- **Comprehensive Mushroom Database**: Detailed information on various mushroom species
- **Search Functionality**: Quick search across all mushroom data
- **Mobile-First Design**: Responsive design optimized for all devices
- **Rich Content**: Benefits, usage guidelines, active compounds, and safety information
- **Scientific References**: Links to clinical studies and research
- **Dark/Light Theme**: User-preferred theme switching
- **SEO Optimized**: Meta tags and structured data for search engines

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling and development server
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Wouter** for client-side routing
- **TanStack Query** for data fetching and caching
- **React Hook Form** with Zod validation
- **Lucide React** for icons

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **Zod** for schema validation
- **In-memory storage** (configurable for database)

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions and data
│   │   ├── pages/          # Page components
│   │   └── ...
├── server/                 # Backend Express server
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Data storage layer
│   └── vite.ts             # Vite integration
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Zod schemas and TypeScript types
└── ...
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mushroom-benefits-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## API Endpoints

- `GET /api/mushrooms` - Get all mushrooms
- `GET /api/mushrooms/:id` - Get mushroom by ID
- `GET /api/mushrooms/search/:query` - Search mushrooms

## Data Schema

The application uses Zod schemas for type-safe data validation. Key schemas include:

- **Mushroom**: Core mushroom data with benefits, usage, compounds
- **Image**: Mushroom images with attribution and licensing
- **ActiveCompound**: Chemical compounds and their research links
- **ClinicalLink**: Scientific studies and research references

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Mushroom images and data sourced from various scientific and educational resources
- Built with modern web technologies for optimal performance and user experience