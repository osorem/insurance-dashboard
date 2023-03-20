import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import CollapsedSidebarLayout from 'src/layouts/CollapsedSidebarLayout';

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
    <CollapsedSidebarLayout>{page}</CollapsedSidebarLayout>
  </Authenticated>
);

export default DashboardParser;
