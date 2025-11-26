import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { App } from './App';

import * as I18nContext from '@/i18n/I18nContext';
import { mockTimelineDataEs } from '@/test/mocks/timelineData';
import { mockUseSWR } from '@/test/setup';
import { render, screen } from '@/test/utils/test-utils';
import * as ThemeContext from '@/ui/theme/ThemeContext';

describe('App', () => {
  it('should call toggleTheme when theme switch is clicked', async () => {
    // Mock the theme context
    const mockToggleTheme = vi.fn();
    vi.spyOn(ThemeContext, 'useTheme').mockReturnValue({
      mode: 'light',
      toggleTheme: mockToggleTheme
    });

    // Mock SWR to prevent loading states
    mockUseSWR.mockReturnValue({
      data: mockTimelineDataEs,
      error: undefined,
      isLoading: false,
      mutate: vi.fn()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);

    const user = userEvent.setup();
    render(<App />);

    // Find the theme switch by its role and accessible name
    const themeSwitch = screen.getByRole('button', { name: /switch to (dark|light) mode/i });

    // Click the theme switch
    await user.click(themeSwitch);

    // Verify toggleTheme was called
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  it('should call changeLanguage when language select is changed', async () => {
    // Mock the i18n context
    const mockChangeLanguage = vi.fn();
    vi.spyOn(I18nContext, 'useI18n').mockReturnValue({
      language: 'es',
      changeLanguage: mockChangeLanguage
    });

    // Mock the theme context
    vi.spyOn(ThemeContext, 'useTheme').mockReturnValue({
      mode: 'light',
      toggleTheme: vi.fn()
    });

    // Mock SWR to prevent loading states
    mockUseSWR.mockReturnValue({
      data: mockTimelineDataEs,
      error: undefined,
      isLoading: false,
      mutate: vi.fn()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);

    const user = userEvent.setup();
    render(<App />);

    // Find the language select by its role
    const languageSelect = screen.getByRole('combobox');

    // Click to open the select
    await user.click(languageSelect);

    // Find and click the EN option
    const enOption = screen.getByRole('option', { name: 'EN' });
    await user.click(enOption);

    // Verify changeLanguage was called with 'en'
    expect(mockChangeLanguage).toHaveBeenCalledTimes(1);
    expect(mockChangeLanguage).toHaveBeenCalledWith('en');
  });
});
