import { useState } from 'react';

import { ThemeSwitch } from '@macolmenerori/component-library';
import { AppBar, Box, MenuItem, Select, SelectChangeEvent, Toolbar } from '@mui/material';

import { useTheme } from '@/ui/theme/ThemeContext';

export function Header() {
  const { mode, toggleTheme } = useTheme();
  // TODO: Connect to i18n when implemented
  const [language, setLanguage] = useState<string>('ES');

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    setLanguage(event.target.value);
    // TODO: Integrate with i18n to change application language
  };

  const handleThemeChange = (isDark: boolean) => {
    // Only toggle if the incoming value is different from current mode
    const currentIsDark = mode === 'dark';
    if (isDark !== currentIsDark) {
      toggleTheme();
    }
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none'
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: '48px', sm: '56px' },
          paddingX: { xs: 2, sm: 3 },
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 2
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          <ThemeSwitch
            enableDarkMode={mode === 'dark'}
            setEnableDarkMode={handleThemeChange}
            size="small"
          />

          <Select
            value={language}
            onChange={handleLanguageChange}
            size="small"
            sx={{
              minWidth: '80px',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'text.secondary'
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'text.primary'
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'primary.main'
              }
            }}
          >
            <MenuItem value="ES">ES</MenuItem>
            <MenuItem value="EN">EN</MenuItem>
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
