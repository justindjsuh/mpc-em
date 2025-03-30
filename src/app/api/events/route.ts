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

export async function POST(req: Request) {
  const supabase = await createClient();

  try {
    const { created_by, name, description, start_date, end_date, links, image_url } = await req.json();

    const { data, error } = await supabase
      .from('events') // replace with your actual table name
      .insert([
        {
          created_by,
          name,
          description,
          start_date,
          end_date,
          links, // Ensure links is a valid JSON object
          image_url,
        },
      ])
      .select();

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const supabase = await createClient();

  try {
    const { created_by, name, description, start_date, end_date, links, image_url, id } = await req.json();

    const { data, error } = await supabase
      .from('events') // replace with your actual table name
      .update(
        {
          created_by,
          name,
          description,
          start_date,
          end_date,
          links, // Ensure links is a valid JSON object
          image_url,
        },
      )
      .eq('id', id);

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
