// import { createClient } from '@supabase/supabase-js';
import { createClient } from '@/app/lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // const supabase = createClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  //   {
  //     auth: {
  //       flowType: 'pkce',
  //       persistSession: false, // No need to persist session for reset
  //     },
  //   },
  // );

  const supabase = await createClient();

  try {
    const { token, password } = await req.json();

    if (!token || !password) {
      return NextResponse.json({ error: 'Missing token or password' }, { status: 400 });
    }

    // ✅ Exchange reset token for a session (this must be done before updating password)
    const { error: sessionError } = await supabase.auth.exchangeCodeForSession(token);

    if (sessionError) {
      return NextResponse.json({ status: 'Failed', error: 'Invalid or expired token' }, { status: 401 });
    }

    // ✅ Now update the password
    const { error: updateError } = await supabase.auth.updateUser({ password });

    if (updateError) {
      return NextResponse.json({ status: 'Failed', error: 'Failed to update password' }, { status: 500 });
    }

    return NextResponse.json({ status: 'Success', message: 'Password updated successfully' });
  } catch {
    return NextResponse.json({ status: 'Failed', error: 'Internal server error' }, { status: 500 });
  }
}
