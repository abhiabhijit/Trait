'use client';
import ReportDetails from '@/components/reports/createReportDetails';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useCreateReportMutation from '@/utils/supabase/hooks/use-create-report';
import useCreateMicroBiomeMutation from '@/utils/supabase/hooks/use-create-microbiome';

import MicroBiomeDetails from './createBiomeDetails';

export default function CreateReport() {
  const router = useRouter();
  const createReportHook = useCreateReportMutation();
  const createMicroBiomeHook = useCreateMicroBiomeMutation();

  const [data, setData] = useState<any>({
    name: '',
    email: '',
    dob: '',
    gender: 'male',
    report: '',
    microbiome: ''
  });

  const [activeTab, setActiveTab] = useState(0);

  const formElements = [
    <ReportDetails data={data} setData={setData} />,
    <MicroBiomeDetails data={data} setData={setData} />
  ];

  const handleSubmit = () => {
    console.log(data);
    const report = {
      name: data.report.name,
      gender: data.report.gender,
      age: data.report.age,
      sample_collection_date: data.report.scd,
      type_of_biomaterial: data.report.tob,
      report_preparation_date: new Date().toISOString()
    };

    createReportHook.trigger(report).then((res: any) => {
      if (!res || !res[0].id) {
        console.error('Failed to create report:', res);
        return;
      }
      const createdReport = res[0].id;
      console.log('createdReport', createdReport);
      createMicroBiomeHook.trigger({
        ...data.microbiome,
        report: createdReport
      });
    });
    router.push('/report');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-slate-900">
      <div>{formElements[activeTab]}</div>
      <div className="flex flex-wrap gap-x-6 mx-auto">
        <button
          disabled={activeTab === 0 ? true : false}
          onClick={() => setActiveTab((prev) => prev - 1)}
          className={`px-4 py-2 rounded-xl bg-blue-600 text-white ${activeTab === 0 ? 'opacity-50 bg-slate-600' : 'opacity-100'}`}
        >
          Back
        </button>
        <button
          disabled={activeTab === formElements.length - 1 ? true : false}
          onClick={() => setActiveTab((prev) => prev + 1)}
          className={`px-4 py-2 rounded-xl bg-blue-600 text-white ${activeTab === formElements.length - 1 ? 'opacity-50 bg-slate-600' : 'opacity-100'}`}
        >
          Next
        </button>
        {activeTab === formElements.length - 1 ? (
          <button
            className="px-4 py-2 rounded-xl bg-blue-600 text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
        ) : null}
      </div>
    </div>
  );
}
