import { Grid, Box } from '@mui/material';

import PageHeader from 'src/content/Dashboards/ClaimsTable/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import Table from 'src/content/Dashboards/ClaimsTable/Table';

const ClaimsTable = () => {
  return (
    <Box>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
        sx={{
          p: 4
        }}
      >
        <Table />
      </Grid>

      <Grid
        xs={12}
        sx={{
          bottom: 0,
          marginTop: '120px'
        }}
      >
        <Footer />
      </Grid>
    </Box>
  );
};

export default ClaimsTable;
