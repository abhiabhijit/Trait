import RenderReport from '@/components/reports/renderReport';
import { createClient } from '@/utils/supabase/server';
import { getReportDetails, getMicroBiomeData } from '@/utils/supabase/queries';

export default async function Report({ params }: { params: { id: string } }) {
  const id = params.id;
  const supabase = createClient();
  const data = await getReportDetails(supabase, id);
  const microBiomeData = await getMicroBiomeData(supabase, id);
  if (!data || !microBiomeData) {
    return (
      <div className="flex justify-center">
        Insufficient Information. Report Couldnt be generated
      </div>
    );
  }
  return <RenderReport userData={data} microBiomeData={microBiomeData} />;
}
