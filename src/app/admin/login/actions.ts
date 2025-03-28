'use server';

import { createClient } from '@/app/lib/supabaseClient';
import { revalidatePath } from 'next/cache';

import { redirect } from 'next/navigation';

export async function login(email: string, password: string) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email,
    password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { status: 'failed', error };
  }
  revalidatePath('/dashboard', 'layout');
  return { status: 'success', message: 'Login successful' };
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function resetPassword(email: string) {
  const supabase = await createClient();

  // Sends the reset password email to the user
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/admin/reset-password`,
  });

  if (error) {
    return { success: false, message: error.message }; // Return error if something goes wrong
  }

  return { success: true, message: 'Password reset email sent!' }; // Success message
}
