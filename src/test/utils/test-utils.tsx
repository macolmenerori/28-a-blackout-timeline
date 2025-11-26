import { ReactElement } from 'react';

import { render, RenderOptions } from '@testing-library/react';

import { AppProviders } from '@/providers/AppProviders';

/**
 * Custom render function that wraps components with AppProviders
 * Includes I18nProvider, ThemeProvider, CssBaseline, and MainLayoutProvider
 *
 * @example
 * import { render, screen } from '@/test/utils/test-utils';
 *
 * render(<MyComponent />);
 * expect(screen.getByText('Hello')).toBeInTheDocument();
 */
export function renderWithProviders(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: AppProviders, ...options });
}

// Re-export everything from @testing-library/react
export * from '@testing-library/react';

// Override the default render with our custom renderWithProviders
export { renderWithProviders as render };
