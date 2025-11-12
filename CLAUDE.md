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
- **UI Library**: Material UI 7.3.5
- **Styling**: Emotion (CSS-in-JS) 11.14.0
- **Icons**: Material UI Icons 7.3.5
- **Font**: Roboto (via @fontsource/roboto 5.2.8)

## Project Structure

```
28-a-blackout-timeline/
├── src/
│   ├── main.tsx                            # Application entry point
│   ├── App.tsx                             # Main App component
│   ├── App.css                             # App-specific styles
│   ├── index.css                           # Global styles
│   ├── providers/
│   │   └── AppProviders.tsx                # Root provider combining all providers
│   └── ui/
│       ├── theme/
│       │   ├── theme.ts                    # Theme configuration & palettes
│       │   └── ThemeContext.tsx            # Theme context & provider
│       └── MainLayout/
│           └── MainLayoutProvider.tsx      # Layout wrapper with responsive padding
├── index.html                              # HTML template
├── vite.config.ts                          # Vite configuration (with path aliases)
├── tsconfig.json                           # TypeScript configuration (path aliases: @/*)
└── package.json                            # Project dependencies and scripts
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

The development server is configured to run on **port 3000** (see `vite.config.ts:8-10`).

**Path Aliases**: Configured with `vite-tsconfig-paths` plugin to support TypeScript path aliases (vite.config.ts:3,7).

### TypeScript

TypeScript is configured via `tsconfig.json` with strict type checking enabled.

**Path Aliases**: The `@/*` alias maps to `src/*` for cleaner imports (tsconfig.json).
- Example: `import { useTheme } from '@/ui/theme/ThemeContext'`

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

## Material UI Theme System

The application implements a comprehensive theme system with light/dark mode support using Material UI 7.

### Architecture

The theme system consists of three main parts:

1. **Theme Configuration** (`src/ui/theme/theme.ts`)
   - Defines color palettes for light and dark modes
   - Configures typography, spacing, and component defaults
   - Exports `createAppTheme(mode)` factory function

2. **Theme Context** (`src/ui/theme/ThemeContext.tsx`)
   - Provides theme state management
   - Handles theme persistence (localStorage)
   - Detects and responds to system preferences
   - Exports `ThemeProvider` component and `useTheme()` hook

3. **Layout Provider** (`src/ui/MainLayout/MainLayoutProvider.tsx`)
   - Responsive layout wrapper
   - Accounts for fixed header height
   - Ensures full viewport height

### Theme Configuration Details

**Light Mode Palette:**
- Primary: `#1976d2` (Material Blue)
- Secondary: `#26a69a` (Teal)
- Background Default: `#fafafa`
- Background Paper: `#ffffff`
- Text Primary: `#212121`, Secondary: `#757575`, Tertiary: `#9e9e9e`

**Dark Mode Palette:**
- Primary: `#90caf9` (Light Blue)
- Secondary: `#4db6ac` (Light Teal)
- Background Default: `#121212`
- Background Paper: `#1e1e1e`
- Text Primary: `#ffffff`, Secondary: `rgba(255,255,255,0.7)`

**Common Settings:**
- Typography: Roboto font family
- Border Radius: 8px (consistent rounded corners)
- Component Overrides:
  - MuiButton: No text transform, 8px border radius, 8px 16px padding
  - MuiAppBar: Subtle box shadow

### Theme Context Features

**Initial Theme Detection:**
1. Checks `localStorage` for saved preference
2. Falls back to system preference (`prefers-color-scheme`)
3. Defaults to 'light' if no preference found

**Theme Persistence:**
- Automatically saves theme choice to `localStorage`
- Persists across browser sessions

**System Preference Listening:**
- Listens for OS-level theme changes
- Only updates if user hasn't manually set a preference
- Properly cleans up event listeners on unmount

**Custom Hook:**
```typescript
const { mode, toggleTheme } = useTheme();
// mode: 'light' | 'dark'
// toggleTheme: () => void - switches between light and dark
```

### Main Layout Provider

**Purpose:** Provides consistent layout spacing accounting for fixed AppBar.

**Features:**
- Desktop: 64px top padding (standard MUI AppBar height)
- Mobile (<600px): 56px top padding (mobile AppBar height)
- Full viewport height (`minHeight: '100vh'`)
- Responsive using MUI breakpoint system

### Provider Composition

**Order (outside to inside):**
1. `ThemeProvider` - Theme context and MUI theme
2. `CssBaseline` - MUI global style reset
3. `MainLayoutProvider` - Layout container
4. Application content

**Location:** `src/providers/AppProviders.tsx`

### Usage Examples

**Toggle Theme:**
```typescript
import { useTheme } from '@/ui/theme/ThemeContext';

function ThemeToggle() {
  const { mode, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {mode === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
}
```

**Access MUI Theme:**
```typescript
import { Box, useTheme } from '@mui/material';

function StyledComponent() {
  const theme = useTheme(); // MUI's theme hook

  return (
    <Box sx={{
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.paper,
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
      }
    }}>
      Content
    </Box>
  );
}
```

### Key Features

- ✅ Full dark mode support with appropriate contrast ratios
- ✅ User preference persistence (localStorage)
- ✅ System preference detection (OS-level dark mode)
- ✅ Dynamic theme switching without page reload
- ✅ Responsive design with breakpoint-aware layouts
- ✅ Type-safe throughout (TypeScript)
- ✅ Clean architecture with separated concerns
- ✅ Accessibility built-in (proper contrast ratios)
- ✅ CSS-in-JS via Emotion

## Next Steps

Consider adding:

- Timeline component for displaying events
- Data structure for blackout events
- Testing framework (Vitest, React Testing Library)
- API integration for event data
- Theme toggle button in the UI
- Additional Material UI components as needed
