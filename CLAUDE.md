# 28-A Blackout Timeline

## Project Overview

This project documents the full timeline of the blackout that affected Spain and Portugal on April 28, 2025. It's built as an interactive web application using React and TypeScript.

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.2
- **Package Manager**: PNPM 10.21.0
- **Node Version**: >=24.0.0
- **Code Quality**: ESLint 9.39.1 + Prettier 3.6.2

## Project Structure

```
28-a-blackout-timeline/
├── src/
│   ├── main.tsx        # Application entry point
│   ├── App.tsx         # Main App component
│   ├── App.css         # App-specific styles
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies and scripts
```

## Available Scripts

- `pnpm dev` - Start development server on port 3000
- `pnpm build` - Build for production (runs TypeScript compiler and Vite build)
- `pnpm preview` - Preview production build locally
- `pnpm lint` - ESLint with auto-fix
- `pnpm test` - Run tests (not yet configured)
- `prettify` - Prettier formatting
- `types` - TypeScript compiler check

## Development

To start developing:

```bash
pnpm install  # Install dependencies (if not already done)
pnpm dev      # Start dev server on http://localhost:3000
```

## Configuration

### Vite

The development server is configured to run on **port 3000** (see `vite.config.ts:7`).

### TypeScript

TypeScript is configured via `tsconfig.json` with strict type checking enabled.

### Code Quality

**ESLint** is configured with comprehensive rules for React, TypeScript, and accessibility:

- **React**: React-specific linting rules and React Hooks rules
- **TypeScript**: Full TypeScript ESLint support with recommended rules
- **Accessibility**: JSX accessibility rules (`jsx-a11y`) with strict mode enabled
- **Testing**: Jest DOM and Testing Library rules for better test quality
- **Import Sorting**: Automatic import organization with `simple-import-sort`
- **Prettier Integration**: Prettier runs as an ESLint rule for consistent formatting

Configuration files:

- `eslint.config.js` - ESLint configuration (package.json:19-20)
- `.prettierrc` - Prettier code style rules (package.json:21-22)
- `.prettierignore` - Files to exclude from formatting

## Next Steps

Consider adding:

- Timeline component for displaying events
- Data structure for blackout events
- Styling framework (Tailwind CSS, Material-UI, etc.)
- Testing framework (Vitest, React Testing Library)
- API integration for event data
- Responsive design
