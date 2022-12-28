import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image"
export default function NavBarButton() {
  const { data: session } = useSession();
  if (session) {

    return (
      <>
        {/* <UserInformation data={session.user} /> */}
        <button onClick={() => signOut()}>Sign out</button>
        <Image src={session.user?.image} alt={session.user?.name} width={40} height={40} className="rounded-full inline mx-2"/>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}