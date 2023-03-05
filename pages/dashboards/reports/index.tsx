import Head from 'next/head';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import DashboardReportsContent from 'src/content/DashboardPages/reports';

function DashboardReports() {
  return (
    <>
      <Head>
        <title>Statistics Dashboard</title>
      </Head>
      <DashboardReportsContent />
    </>
  );
}

DashboardReports.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default DashboardReports;
