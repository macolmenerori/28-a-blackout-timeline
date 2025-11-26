import { afterEach, vi } from 'vitest';

import '@testing-library/jest-dom/vitest';

// Mock window.matchMedia for Material UI theme detection
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
});

// Mock IntersectionObserver for Timeline component animations
class IntersectionObserverMock {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock
});

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock
});

// Global SWR mock - available to all test files
vi.mock('swr', () => ({
  default: vi.fn()
}));

// Import and type the mocked useSWR for exporting
const { default: useSWRMock } = await import('swr');
export const mockUseSWR = vi.mocked(useSWRMock);

// Auto-cleanup: Clear all mocks after each test
afterEach(() => {
  vi.clearAllMocks();
});
