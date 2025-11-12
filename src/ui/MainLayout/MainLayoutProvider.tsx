import { Box, useTheme } from '@mui/material';

export interface MainLayoutProviderProps {
  children: React.ReactNode;
}

export function MainLayoutProvider({ children }: MainLayoutProviderProps) {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          paddingTop: '64px',
          minHeight: '100vh',
          [theme.breakpoints.down('sm')]: {
            paddingTop: '56px'
          }
        }}
      >
        {children}
      </Box>
    </>
  );
}
