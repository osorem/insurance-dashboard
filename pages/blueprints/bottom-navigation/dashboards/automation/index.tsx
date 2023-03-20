import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import BottomNavigationLayout from 'src/layouts/BottomNavigationLayout';

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
    <BottomNavigationLayout>{page}</BottomNavigationLayout>
  </Authenticated>
);

export default DashboardParser;
