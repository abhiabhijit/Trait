import { SupabaseClient } from '@supabase/supabase-js';
import { cache, useCallback } from 'react';

export const getUser = cache(async (supabase: SupabaseClient) => {
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return user;
});

export const getSubscription = cache(async (supabase: SupabaseClient) => {
  const { data: subscription } = await supabase
    .from('subscriptions')
    .select('*, prices(*, products(*))')
    .in('status', ['trialing', 'active'])
    .maybeSingle();

  return subscription;
});

export const getProducts = cache(async (supabase: SupabaseClient) => {
  const { data: products } = await supabase
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { referencedTable: 'prices' });

  return products;
});

export const getUserDetails = cache(async (supabase: SupabaseClient) => {
  const { data: userDetails } = await supabase
    .from('users')
    .select('*')
    .single();
  return userDetails;
});

export const getReportDetails = cache(
  async (supabase: SupabaseClient, id: string) => {
    const { data: reportDetails } = await supabase
      .from('report_details')
      .select('*')
      .eq('id', id)
      .single();
    return reportDetails;
  }
);

export const getReportEntries = cache(async (supabase: SupabaseClient) => {
  const { data: reportEntries } = await supabase
    .from('report_details')
    .select('*');

  return reportEntries;
});

export const getMicroBiomeData = cache(
  async (supabase: SupabaseClient, id: string) => {
    const { data: microBiomeData } = await supabase
      .from('microbiome_data')
      .select('*')
      .eq('report', id)
      .single();

    return microBiomeData;
  }
);
