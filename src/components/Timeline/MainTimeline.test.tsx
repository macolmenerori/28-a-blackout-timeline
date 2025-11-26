import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MainTimeline } from './MainTimeline';

import { mockTimelineDataEn, mockTimelineDataEs } from '@/test/mocks/timelineData';
import { mockUseSWR } from '@/test/setup';
import { render, screen, waitFor } from '@/test/utils/test-utils';

describe('MainTimeline', () => {
  const mockMutate = vi.fn();

  beforeEach(() => {
    mockMutate.mockClear();
  });

  describe('Loading State', () => {
    it('should display loading spinner when data is being fetched', () => {
      // Arrange: Mock loading state
      mockUseSWR.mockReturnValue({
        data: undefined,
        error: undefined,
        isLoading: true,
        mutate: mockMutate,
        isValidating: false
      } as any);

      // Act: Render component
      render(<MainTimeline />);

      // Assert: Loading spinner is visible
      const spinner = screen.getByRole('progressbar');
      expect(spinner).toBeInTheDocument();

      // Assert: No error or timeline content displayed
      expect(screen.queryByRole('button', { name: /reload/i })).not.toBeInTheDocument();
    });

    it('should not display error or timeline content during loading', () => {
      mockUseSWR.mockReturnValue({
        data: undefined,
        error: undefined,
        isLoading: true,
        mutate: mockMutate
      } as any);

      render(<MainTimeline />);

      // No timeline data should be visible
      expect(screen.queryByText('Sistema estable')).not.toBeInTheDocument();
      expect(screen.queryByText('Stable system')).not.toBeInTheDocument();
    });
  });

  describe('Success State - Spanish', () => {
    it('should display timeline events when data is loaded (Spanish)', () => {
      // Arrange: Mock success state with Spanish data
      mockUseSWR.mockReturnValue({
        data: mockTimelineDataEs,
        error: undefined,
        isLoading: false,
        mutate: mockMutate
      } as any);

      // Act: Render component
      render(<MainTimeline />);

      // Assert: Timeline events are displayed
      expect(screen.getByText('Sistema estable - Operación nocturna')).toBeInTheDocument();
      expect(
        screen.getByText('Cambio programado en interconexión con Francia')
      ).toBeInTheDocument();
      expect(screen.getByText('PRIMERA OSCILACIÓN MAYOR')).toBeInTheDocument();

      // Assert: Event details are visible
      expect(screen.getByText(/Tensiones con variabilidad normal/i)).toBeInTheDocument();
      expect(screen.getByText(/Reducción de exportación/i)).toBeInTheDocument();

      // Assert: No loading or error state
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /reload/i })).not.toBeInTheDocument();
    });

    it('should pass correct data to Timeline component', () => {
      mockUseSWR.mockReturnValue({
        data: mockTimelineDataEs,
        error: undefined,
        isLoading: false,
        mutate: mockMutate
      } as any);

      render(<MainTimeline />);

      // Verify all event titles are rendered
      mockTimelineDataEs.forEach((event) => {
        expect(screen.getByText(event.title)).toBeInTheDocument();
      });
    });
  });

  describe('Success State - English', () => {
    it('should display timeline events in English when English data is provided', () => {
      // Arrange: Mock success state with English data
      mockUseSWR.mockReturnValue({
        data: mockTimelineDataEn,
        error: undefined,
        isLoading: false,
        mutate: mockMutate
      } as any);

      // Act: Render component
      render(<MainTimeline />);

      // Assert: English content is displayed
      expect(screen.getByText('Stable system - Night operation')).toBeInTheDocument();
      expect(screen.getByText('Scheduled change in France interconnection')).toBeInTheDocument();
      expect(screen.getByText('FIRST MAJOR OSCILLATION')).toBeInTheDocument();

      // Assert: English event details are visible
      expect(screen.getByText(/Voltages with normal variability/i)).toBeInTheDocument();
      expect(screen.getByText(/Reduction of export/i)).toBeInTheDocument();

      // Assert: Spanish content is not present
      expect(screen.queryByText('Sistema estable - Operación nocturna')).not.toBeInTheDocument();
    });

    it('should render all English events correctly', () => {
      mockUseSWR.mockReturnValue({
        data: mockTimelineDataEn,
        error: undefined,
        isLoading: false,
        mutate: mockMutate
      } as any);

      render(<MainTimeline />);

      // Verify all English event titles are rendered
      mockTimelineDataEn.forEach((event) => {
        expect(screen.getByText(event.title)).toBeInTheDocument();
      });
    });
  });

  describe('Error State', () => {
    it('should display error message when fetch fails', () => {
      // Arrange: Mock error state
      const errorMessage = 'Failed to fetch timeline data: 500 Internal Server Error';
      mockUseSWR.mockReturnValue({
        data: undefined,
        error: new Error(errorMessage),
        isLoading: false,
        mutate: mockMutate
      } as any);

      // Act: Render component
      render(<MainTimeline />);

      // Assert: Error component is displayed with reload button
      const reloadButton = screen.getByRole('button', { name: /reload/i });
      expect(reloadButton).toBeInTheDocument();

      // Assert: No timeline or loading state
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
      expect(screen.queryByText(/Sistema estable/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Stable system/i)).not.toBeInTheDocument();
    });

    it('should handle different error types', () => {
      // Arrange: Mock with plain object error
      mockUseSWR.mockReturnValue({
        data: undefined,
        error: { message: 'Network error' },
        isLoading: false,
        mutate: mockMutate
      } as any);

      // Act: Render component
      render(<MainTimeline />);

      // Assert: Error component should still render
      expect(screen.getByRole('button', { name: /reload/i })).toBeInTheDocument();
    });

    it('should not display timeline content when there is an error', () => {
      mockUseSWR.mockReturnValue({
        data: undefined,
        error: new Error('Fetch failed'),
        isLoading: false,
        mutate: mockMutate
      } as any);

      render(<MainTimeline />);

      // Timeline should not be visible
      expect(screen.queryByText('Sistema estable')).not.toBeInTheDocument();
      expect(screen.queryByText('PRIMERA OSCILACIÓN MAYOR')).not.toBeInTheDocument();
    });
  });

  describe('Refetch Functionality', () => {
    it('should call mutate when refetch button is clicked', async () => {
      const user = userEvent.setup();

      // Arrange: Mock error state
      mockUseSWR.mockReturnValue({
        data: undefined,
        error: new Error('Fetch failed'),
        isLoading: false,
        mutate: mockMutate
      } as any);

      // Act: Render component
      render(<MainTimeline />);

      // Find and click refetch button
      const refetchButton = screen.getByRole('button', { name: /reload/i });
      await user.click(refetchButton);

      // Assert: mutate was called
      expect(mockMutate).toHaveBeenCalledTimes(1);
    });

    it('should transition from error to loading state after refetch', async () => {
      const user = userEvent.setup();

      // Start with error
      mockUseSWR.mockReturnValue({
        data: undefined,
        error: new Error('Fetch failed'),
        isLoading: false,
        mutate: mockMutate
      } as any);

      const { rerender } = render(<MainTimeline />);

      // Click refetch
      const refetchButton = screen.getByRole('button', { name: /reload/i });
      await user.click(refetchButton);

      // Simulate loading state after refetch
      mockUseSWR.mockReturnValue({
        data: undefined,
        error: undefined,
        isLoading: true,
        mutate: mockMutate
      } as any);

      rerender(<MainTimeline />);

      // Assert: Loading state is shown
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /reload/i })).not.toBeInTheDocument();
    });

    it('should transition from error to success state after successful refetch', async () => {
      const user = userEvent.setup();

      // Start with error
      mockUseSWR.mockReturnValue({
        data: undefined,
        error: new Error('Fetch failed'),
        isLoading: false,
        mutate: mockMutate
      } as any);

      const { rerender } = render(<MainTimeline />);

      // Click refetch
      const refetchButton = screen.getByRole('button', { name: /reload/i });
      await user.click(refetchButton);

      // Simulate successful data load
      mockUseSWR.mockReturnValue({
        data: mockTimelineDataEs,
        error: undefined,
        isLoading: false,
        mutate: mockMutate
      } as any);

      rerender(<MainTimeline />);

      // Assert: Timeline data is now visible
      await waitFor(() => {
        expect(screen.getByText('Sistema estable - Operación nocturna')).toBeInTheDocument();
      });
      expect(screen.queryByRole('button', { name: /reload/i })).not.toBeInTheDocument();
    });
  });

  describe('SWR Configuration', () => {
    it('should use correct SWR key based on current language', () => {
      mockUseSWR.mockReturnValue({
        data: mockTimelineDataEs,
        error: undefined,
        isLoading: false,
        mutate: mockMutate
      } as any);

      render(<MainTimeline />);

      // Verify useSWR was called with a timeline key and fetcher function
      // The language could be 'es' or 'en' depending on browser language detection
      expect(mockUseSWR).toHaveBeenCalledWith(
        expect.stringMatching(/\/data\/timeline_(es|en)\.json/),
        expect.any(Function)
      );
    });

    it('should call useSWR with a fetcher function', () => {
      mockUseSWR.mockReturnValue({
        data: mockTimelineDataEs,
        error: undefined,
        isLoading: false,
        mutate: mockMutate
      } as any);

      render(<MainTimeline />);

      // Verify useSWR was called with key and fetcher
      expect(mockUseSWR).toHaveBeenCalledWith(
        expect.stringContaining('/data/timeline_'),
        expect.any(Function)
      );
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty data array', () => {
      mockUseSWR.mockReturnValue({
        data: [],
        error: undefined,
        isLoading: false,
        mutate: mockMutate
      } as any);

      render(<MainTimeline />);

      // Should render Timeline component even with empty array
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /reload/i })).not.toBeInTheDocument();
    });

    it('should not render timeline when data is undefined but no error', () => {
      mockUseSWR.mockReturnValue({
        data: undefined,
        error: undefined,
        isLoading: false,
        mutate: mockMutate
      } as any);

      render(<MainTimeline />);

      // Should not render timeline or error when data is undefined
      expect(screen.queryByText('Sistema estable')).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /reload/i })).not.toBeInTheDocument();
    });
  });
});
