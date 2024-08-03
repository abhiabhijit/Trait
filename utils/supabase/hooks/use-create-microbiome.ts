import useSWRMutation from 'swr/mutation';
import { useRouter } from 'next/navigation';

import { createClient } from '@/utils/supabase/client';
import { createMicroBiomeData } from '../mutations';

function useCreateMicroBiomeMutation() {
  const client = createClient();
  const router = useRouter();
  const key = 'microbiome';

  return useSWRMutation(
    key,
    async (_, { arg: microbiome }: { arg: any }) => {
      return createMicroBiomeData(client, microbiome);
    },
    {
      onSuccess: () => router.refresh(),
      onError: (error) => console.error(error)
    }
  );
}

export default useCreateMicroBiomeMutation;
