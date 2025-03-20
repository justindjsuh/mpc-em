import { supabase } from '@/app/lib/supabaseClient';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const { data, error } = await supabase.from('events')
    .select('*')
    .order('created_at', { ascending: false }); ;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
};
