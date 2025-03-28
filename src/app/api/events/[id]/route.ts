import { createClient } from '@/app/lib/supabaseClient';
import { NextResponse } from 'next/server';

// DELETE endpoint
export const DELETE = async (request: Request) => {
  const supabase = await createClient();

  try {
    // Extract the event ID from the URL (for example, `/api/events/{id}`)
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop(); // Assuming URL is /api/events/{id}

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    // Delete the record from 'events' table
    const { data, error } = await supabase.from('events').delete().eq('id', id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Return the response confirming the deletion
    return NextResponse.json({ message: 'Record deleted successfully', data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
