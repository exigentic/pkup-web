import { createClient } from '@supabase/supabase-js';
import { Session } from 'next-auth';
const SupabaseServerClient = async (session: Session) => {
  const { supabaseAccessToken } = session!;
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: {
          Authorization: `Bearer ${supabaseAccessToken}`,
        },
      },
    }
  )
}

export default SupabaseServerClient;