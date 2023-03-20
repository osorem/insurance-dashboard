import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import BoxedSidebarLayout from 'src/layouts/BoxedSidebarLayout';

import DashboardParserContent from 'src/content/DashboardPages/parser';

function DashboardParser() {
  return (
    <>
      <Head>
        <title>Parser Dashboard</title>
      </Head>
      <DashboardParserContent />
    </>
  );
}

DashboardParser.getLayout = (page) => (
  <Authenticated>
    <BoxedSidebarLayout>{page}</BoxedSidebarLayout>
  </Authenticated>
);

export default DashboardParser;
