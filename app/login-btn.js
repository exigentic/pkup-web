"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Button from "../ui/Button"
import UserInformation from "./user-information";

export default function Component({ children }) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        {/* <UserInformation data={session.user} /> */}
        <Button onClick={() => signOut()}>Sign out</Button>
        {children}
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}