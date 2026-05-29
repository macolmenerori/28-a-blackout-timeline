import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { CustomCookieConsent } from './CustomCookieConsent';

import i18n from '@/i18n/i18n';
import { render, screen } from '@/test/utils/test-utils';

const EN_MESSAGE =
  "This website uses cookies to enhance the user experience. By clicking 'Accept', you consent to the use of cookies. You can decline the use of cookies by clicking 'Decline'.";
const EN_ACCEPT = 'Accept';
const EN_DECLINE = 'Decline';

const ES_MESSAGE =
  "Este sitio web utiliza cookies para mejorar la experiencia del usuario. Al hacer clic en 'Aceptar', das tu consentimiento para el uso de cookies. Puedes rechazar el uso de cookies haciendo clic en 'Rechazar'.";
const ES_ACCEPT = 'Aceptar';
const ES_DECLINE = 'Rechazar';

function clearConsentCookie() {
  document.cookie = 'cookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
}

beforeEach(async () => {
  clearConsentCookie();
  localStorage.setItem('app-language', 'en');
  await i18n.changeLanguage('en');
});

afterEach(() => {
  clearConsentCookie();
  localStorage.clear();
});

describe('CustomCookieConsent', () => {
  it('renders the consent message when no cookie is set', () => {
    render(<CustomCookieConsent />);
    expect(screen.getByText(EN_MESSAGE)).toBeInTheDocument();
  });

  it('renders both Accept and Decline buttons', () => {
    render(<CustomCookieConsent />);
    expect(screen.getByRole('button', { name: EN_ACCEPT })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: EN_DECLINE })).toBeInTheDocument();
  });

  it('hides the banner and sets cookie to true when Accept is clicked', async () => {
    const user = userEvent.setup();
    render(<CustomCookieConsent />);

    await user.click(screen.getByRole('button', { name: EN_ACCEPT }));

    expect(screen.queryByText(EN_MESSAGE)).not.toBeInTheDocument();
    expect(document.cookie).toContain('cookieConsent=true');
  });

  it('hides the banner and sets cookie to false when Decline is clicked', async () => {
    const user = userEvent.setup();
    render(<CustomCookieConsent />);

    await user.click(screen.getByRole('button', { name: EN_DECLINE }));

    expect(screen.queryByText(EN_MESSAGE)).not.toBeInTheDocument();
    expect(document.cookie).toContain('cookieConsent=false');
  });

  it('does not render when the consent cookie is already set', () => {
    document.cookie = 'cookieConsent=true';
    render(<CustomCookieConsent />);
    expect(screen.queryByText(EN_MESSAGE)).not.toBeInTheDocument();
  });

  it('renders with Spanish translations when language is set to es', async () => {
    localStorage.setItem('app-language', 'es');
    await i18n.changeLanguage('es');

    render(<CustomCookieConsent />);

    expect(screen.getByText(ES_MESSAGE)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: ES_ACCEPT })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: ES_DECLINE })).toBeInTheDocument();
  });
});
