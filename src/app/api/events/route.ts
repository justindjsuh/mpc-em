import { createClient } from '@/app/lib/supabaseClient';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.from('events')
    .select('*')
    .order('created_at', { ascending: false }); ;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
};
