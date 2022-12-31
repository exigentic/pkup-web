"use client"

import { signOut, useSession } from 'next-auth/react';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

export default function Profile() {
  const { data: session, status } = useSession()
  const [data, setData] = useState<any>(null )

  const { supabaseAccessToken } = session!;

  useEffect(() => {
    console.log("fetching data");
    const supabase = createClient(
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

    supabase.from("profile").select("*").then(({data}) => setData(data))
  }, [supabaseAccessToken])



  console.log("data", data);
  return (
    <div>
      <pre>data: {JSON.stringify(data, null, 2)}</pre>
      <button className="bg-pumpkin-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => callSignOut()}>Sign out</button>
    </div>
  )
}

async function callSignOut() {
  await signOut({
    callbackUrl: "/"
  })
}