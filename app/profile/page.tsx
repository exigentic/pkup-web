"use client"

import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import SupabaseBrowserClient from '#/utils/SupabaseBrowserClient';

export default function Profile() {
  const { data: session,status } = useSession();
  console.log("status", status);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    console.log("fetching data");

    const supabase = SupabaseBrowserClient(session!);
    supabase.from("profile").select("*").then(({data}) => setData(data))
  }, [session])

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