import { PaletteMode } from '@mui/material';
import { createTheme, Theme } from '@mui/material/styles';

// Define the color palette for light mode
export const lightPalette = {
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#ffffff'
  },
  secondary: {
    main: '#26a69a',
    light: '#4db6ac',
    dark: '#00695c',
    contrastText: '#ffffff'
  },
  background: {
    default: '#fafafa',
    paper: '#ffffff'
  },
  text: {
    primary: '#212121',
    secondary: '#757575',
    tertiary: '#9e9e9e',
    disabled: '#bdbdbd'
  }
};

// Define the color palette for dark mode
export const darkPalette = {
  primary: {
    main: '#90caf9',
    light: '#e3f2fd',
    dark: '#42a5f5',
    contrastText: 'rgba(0, 0, 0, 0.87)'
  },
  secondary: {
    main: '#4db6ac',
    light: '#b2dfdb',
    dark: '#26a69a',
    contrastText: 'rgba(0, 0, 0, 0.87)'
  },
  background: {
    default: '#121212',
    paper: '#1e1e1e'
  },
  text: {
    primary: '#ffffff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    tertiary: 'rgba(255, 255, 255, 0.6)',
    disabled: 'rgba(255, 255, 255, 0.38)'
  }
};

// Common theme settings regardless of light/dark mode
export const commonThemeSettings = {
  typography: {
    fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none' as const,
          borderRadius: 8,
          padding: '8px 16px'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
        }
      }
    }
  }
};

// Function to create a theme based on mode (light/dark)
export const createAppTheme = (mode: PaletteMode): Theme => {
  return createTheme({
    palette: {
      mode,
      ...(mode === 'light' ? lightPalette : darkPalette)
    },
    ...commonThemeSettings
  });
};
