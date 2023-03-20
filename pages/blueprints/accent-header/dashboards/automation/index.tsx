import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';

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
    <AccentHeaderLayout>{page}</AccentHeaderLayout>
  </Authenticated>
);

export default DashboardParser;
