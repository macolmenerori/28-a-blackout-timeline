import { useTranslation } from 'react-i18next';

import { Box, Button, Typography } from '@mui/material';

interface ErrorApiProps {
  refetch: () => void;
}

export function ErrorApi({ refetch }: ErrorApiProps) {
  const { t } = useTranslation();
  return (
    <Box textAlign="center" margin={4}>
      <Typography>{t('components.errorApi.message')}</Typography>
      <Button variant="contained" onClick={() => refetch()} sx={{ marginTop: 2 }}>
        {t('components.errorApi.reload')}
      </Button>
    </Box>
  );
}
