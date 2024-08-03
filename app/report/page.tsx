import RenderAvailableReports from '@/components/reports/reportEntries';
import { createClient } from '@/utils/supabase/server';
import { getUser, getReportEntries } from '@/utils/supabase/queries';
import { redirect } from 'next/navigation';

export default async function Report() {
  const supabase = createClient();
  const data = await getReportEntries(supabase);
  const user = await getUser(supabase);
  if (!user) {
    return redirect('/auth/signin');
  }

  if (!data) {
    return <div className="flex justify-center">Reports not found</div>;
  }
  return (
    <div className="flex justify-center mx-auto">
      <div>
        <RenderAvailableReports reports={data} />
      </div>
    </div>
  );
}
