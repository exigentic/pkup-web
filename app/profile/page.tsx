"use client"

import { signOut } from 'next-auth/react';

export default function Profile() {
  return (
    <div>
      <button className="bg-pumpkin-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => callSignOut()}>Sign out</button>
    </div>
  )
}

async function callSignOut() {
  await signOut({
    callbackUrl: "/"
  })
}