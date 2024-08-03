import { SupabaseClient } from '@supabase/supabase-js';

export const createReport = async (supabase: SupabaseClient, data: any) => {
  const { data: report, error } = await supabase
    .from('report_details')
    .insert([data])
    .select('id');

  if (error) {
    console.error('Error creating report:', error);
    throw error;
  }

  console.log('Report created:', report);
  return report;
};

export const createMicroBiomeData = async (
  supabase: SupabaseClient,
  data: any
) => {
  const { data: microBiome, error } = await supabase
    .from('microbiome_data')
    .insert([data]);
  if (error) throw error;
  return microBiome;
};
