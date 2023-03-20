import Head from 'next/head';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import DashboardClaimsTableContent from 'src/content/DashboardPages/claimsTable';

function DashboardClaimsTable() {
  return (
    <>
      <Head>
        <title>Claims Table Dashboard</title>
      </Head>
      <DashboardClaimsTableContent />
    </>
  );
}

DashboardClaimsTable.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default DashboardClaimsTable;
