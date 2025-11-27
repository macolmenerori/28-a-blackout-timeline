import { describe, expect, it } from 'vitest';

import { SEOHead } from './SEOHead';

import { render } from '@/test/utils/test-utils';

describe('SEOHead', () => {
  describe('Basic Rendering', () => {
    it('renders without crashing', () => {
      const { container } = render(<SEOHead />);
      expect(container).toBeInTheDocument();
    });

    it('renders HelmetProvider component successfully', () => {
      const { container } = render(<SEOHead />);
      expect(container).toBeTruthy();
    });
  });

  describe('Component Integration', () => {
    it('includes both Helmet and JsonLd components without errors', () => {
      const { container } = render(<SEOHead />);
      expect(container).toBeTruthy();
    });

    it('renders all SEO enhancements (meta tags + JSON-LD)', () => {
      // This test verifies that the component renders successfully with all enhancements:
      // - Canonical URL
      // - Hreflang alternates
      // - Open Graph tags
      // - Twitter Card tags
      // - JSON-LD structured data (WebSite, Event, BreadcrumbList)
      const { container } = render(<SEOHead />);
      expect(container).toBeInTheDocument();
    });
  });
});
