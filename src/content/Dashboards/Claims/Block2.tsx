import {
  Box,
  Card,
  Grid,
  Typography,
  IconButton,
  useTheme
} from '@mui/material';

import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';

import { useTranslation } from 'react-i18next';

function Block2() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={8}>
      <Grid item xs={12} sm={12}>
        <Card
          sx={{
            p: 4,
            height: '310px',
            background: `${theme.colors.success.main}`
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            gap={4}
          >
            <Box>
              <IconButton size="small">
                <DashboardTwoToneIcon
                  sx={{
                    color: `#fff`,
                    fontSize: theme.typography.pxToRem(54),
                    padding: '4px 0px',
                    marginBottom: '14px'
                  }}
                />
              </IconButton>
              <Typography
                gutterBottom
                variant="h1"
                sx={{
                  color: `${theme.colors.alpha.trueWhite[100]}`,
                  marginBottom: '24px'
                }}
              >
                {t('Up Next')}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#fff',
                  fontSize: `${theme.typography.pxToRem(24)}`,
                  marginBottom: '24px'
                }}
              >
                Agency will contact client
              </Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block2;
