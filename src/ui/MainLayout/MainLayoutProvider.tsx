import { Box } from '@mui/material';

export interface MainLayoutProviderProps {
  children: React.ReactNode;
}

export function MainLayoutProvider({ children }: MainLayoutProviderProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh'
      }}
    >
      {children}
    </Box>
  );
}
