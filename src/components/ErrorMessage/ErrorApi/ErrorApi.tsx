import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ErrorApiProps {
  refetch: () => void;
}

export function ErrorApi({ refetch }: ErrorApiProps) {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        textAlign: 'center',
        margin: 4
      }}
    >
      <Typography>{t('components.errorApi.message')}</Typography>
      <Button variant="contained" onClick={() => refetch()} sx={{ marginTop: 2 }}>
        {t('components.errorApi.reload')}
      </Button>
    </Box>
  );
}
