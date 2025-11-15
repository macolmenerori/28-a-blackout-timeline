import { PaletteMode } from '@mui/material';
import { createTheme, Theme } from '@mui/material/styles';

// Define the color palette for light mode
export const lightPalette = {
  primary: {
    main: '#1976d2',
    light: '#4ca9ff',
    dark: '#00439f',
    contrastText: '#ffffff'
  },
  secondary: {
    main: '#dc004e',
    contrastText: '#ffffff'
  },
  error: {
    main: '#f44336'
  },
  warning: {
    main: '#ff9800'
  },
  info: {
    main: '#2196f3'
  },
  success: {
    main: '#4caf50'
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
    main: '#ffa726',
    light: '#ffda59',
    dark: '#cc7400',
    contrastText: 'rgba(0, 0, 0, 0.87)'
  },
  secondary: {
    main: '#f48fb1',
    contrastText: 'rgba(0, 0, 0, 0.87)'
  },
  error: {
    main: '#f44336'
  },
  warning: {
    main: '#ff9800'
  },
  info: {
    main: '#29b6f6'
  },
  success: {
    main: '#66bb6a'
  },
  background: {
    default: '#1a2332',
    paper: '#27303f'
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
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
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
