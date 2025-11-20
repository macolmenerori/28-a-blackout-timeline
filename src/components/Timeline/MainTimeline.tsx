import { useTranslation } from 'react-i18next';

import { Box, CircularProgress } from '@mui/material';
import useSWR from 'swr';

import Timeline from './Timeline/Timeline';

import { EventType } from '@/types/event';

export function MainTimeline() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch timeline data: ${res.status} ${res.statusText}`);
    }
    return res.json();
  };

  const { data, error, isLoading } = useSWR<EventType[]>(
    `/data/timeline_${currentLanguage}.json`,
    fetcher
  );

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress size="3rem" />
      </Box>
    );
  }

  // TODO: Improve
  if (error) {
    return <div>Error loading timeline: {error.message}</div>;
  }

  return <>{data && <Timeline events={data} />}</>;
}
