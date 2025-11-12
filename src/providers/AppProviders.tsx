import { CssBaseline } from '@mui/material';

import { MainLayoutProvider } from '@/ui/MainLayout/MainLayoutProvider';
import { ThemeProvider } from '@/ui/theme/ThemeContext';

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <CssBaseline />
      <MainLayoutProvider>{children}</MainLayoutProvider>
    </ThemeProvider>
  );
}
