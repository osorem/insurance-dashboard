import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import TopNavigationLayout from 'src/layouts/TopNavigationLayout';

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
    <TopNavigationLayout>{page}</TopNavigationLayout>
  </Authenticated>
);

export default DashboardParser;
