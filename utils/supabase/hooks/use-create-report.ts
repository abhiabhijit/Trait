import useSWRMutation from 'swr/mutation';
import { useRouter } from 'next/navigation';

import { createClient } from '@/utils/supabase/client';
import { createReport } from '../mutations';

function useCreateReportMutation() {
  const client = createClient();
  const router = useRouter();
  const key = 'report';

  return useSWRMutation(
    key,
    async (_, { arg: report }: { arg: any }) => {
      return createReport(client, report);
    },
    {
      onSuccess: () => router.refresh(),
      onError: (error) => console.error(error)
    }
  );
}

export default useCreateReportMutation;
