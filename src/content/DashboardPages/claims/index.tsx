import { Box, Grid } from '@mui/material';

import PageHeader from 'src/content/Dashboards/Claims/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import ClaimTimeline from '@/content/Dashboards/Claims/Timeline';
import Block1 from '@/content/Dashboards/Claims/Block1';
import Block2 from '@/content/Dashboards/Claims/Block2';
import { useWindowSize } from '@/hooks/useWindowSize';

const Claims = () => {
  const size = useWindowSize();

  return (
    <Grid minWidth={350} overflow="scroll">
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>

      <Grid
        container
        direction="row"
        justifyContent="center"
        spacing={3}
        px={size.width > 600 ? 4 : 2}
        mb={8}
      >
        <Grid item xs={12} sm={8}>
          <Block1 />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Block2 />
        </Grid>
      </Grid>

      <Box minWidth={450} overflow="scroll">
        <ClaimTimeline />
      </Box>
    </Grid>
  );
};

export default Claims;
