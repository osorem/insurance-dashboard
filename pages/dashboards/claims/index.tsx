import Head from 'next/head';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import DashboardClaimsContent from 'src/content/DashboardPages/claims';

function DashboardClaims() {
  return (
    <>
      <Head>
        <title>Claims Dashboard</title>
      </Head>
      <DashboardClaimsContent />
    </>
  );
}

DashboardClaims.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default DashboardClaims;
