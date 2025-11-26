import { Trans } from 'react-i18next';

import { Box, Card, CardContent, Link, Typography, useTheme } from '@mui/material';

export function Intro() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: theme.spacing(2)
      }}
    >
      <Card
        sx={{
          width: {
            xs: '90%',
            sm: '70%',
            md: '70%',
            lg: '35%'
          },
          border: `2px solid ${theme.palette.primary.main}`,
          borderRadius: '24px',
          backgroundColor: theme.palette.background.paper
        }}
      >
        <CardContent sx={{ margin: theme.spacing(4) }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              color: theme.palette.primary.main,
              marginBottom: theme.spacing(2)
            }}
          >
            <Trans i18nKey="components.intro.title" />
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.primary
            }}
            style={{ whiteSpace: 'pre-line' }}
          >
            <Trans i18nKey="components.intro.body" style={{ whiteSpace: 'pre-line' }} />
            <Link
              href="https://www.lamoncloa.gob.es/consejodeministros/resumenes/Documents/2025/Informe-no-confidencial-Comite-de-analisis-28A.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Trans i18nKey="components.intro.reportLink" />
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
