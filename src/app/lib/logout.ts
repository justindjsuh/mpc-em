'use server';

import { createClient } from '@/app/lib/supabaseClient';
import { redirect } from 'next/navigation';

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();

  redirect('/admin/login'); // Ensure user is redirected after logout
}
