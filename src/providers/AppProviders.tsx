import { CssBaseline } from '@mui/material';

import '@/i18n/i18n';

import { I18nProvider } from '@/i18n/I18nContext';
import { MainLayoutProvider } from '@/ui/MainLayout/MainLayoutProvider';
import { ThemeProvider } from '@/ui/theme/ThemeContext';

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <I18nProvider>
      <ThemeProvider>
        <CssBaseline />
        <MainLayoutProvider>{children}</MainLayoutProvider>
      </ThemeProvider>
    </I18nProvider>
  );
}
