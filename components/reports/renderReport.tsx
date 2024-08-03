'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Report from '@/components/reports/report';

// Import PDFViewer dynamically with no SSR (server-side rendering)
const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFViewer),
  { ssr: false }
);

const RenderReport = ({
  userData,
  microBiomeData
}: {
  userData: any;
  microBiomeData: any;
}) => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);

  const data = {
    date: '5 Oct 2023',
    name: 'John Doe',
    summary: 'Your overall assessment seems ok, but would need improvement.',
    assessment: 'You are in the top 50% of the users for your Biome score.'
    // Add other data as needed
  };

  return (
    client && (
      <div className="flex flex-col h-[100rem]">
        <PDFViewer className="flex-grow">
          <Report userData={userData} microBiomeData={microBiomeData} />
        </PDFViewer>
      </div>
    )
  );
};

export default RenderReport;
