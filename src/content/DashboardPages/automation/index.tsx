import { useState } from 'react';

import { Grid, Box } from '@mui/material';

import Search from 'src/content/Dashboards/Parser/Search';
import Table from 'src/content/Dashboards/Parser/Table';

function DashboardParserContent() {
  let [searchText, setSearchText] = useState('');

  return (
    <>
      <Box p={4}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
          columns={12}
        >
          <Grid item xs={12} lg={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Search setSearchText={setSearchText} />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Table searchText={searchText} />
              </Grid>
              <Grid item xs={12} xl={12}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default DashboardParserContent;
