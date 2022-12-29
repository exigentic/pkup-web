import { useSession, signIn } from "next-auth/react";
import Image from "next/image"
import Link from 'next/link';
import FaceSmile from "@heroicons/react/24/outline/FaceSmileIcon";
export default function NavBarButton() {
  const { data: session } = useSession();
  if (session) {
    console.log("User Info: ", {session})
    return (
      <>
        {/* <UserInformation data={session.user} /> */}

        <Link href={"/profile"}>
          { session.user?.image
           ? <Image src={session.user?.image} alt={session.user?.name ? session.user.name : "User"} width={40} height={40} className="rounded-xl inline"/>
            : <FaceSmile/>
          }
        </Link>
      </>
    );
  }
  return (
    <>
      <button className="bg-pumpkin-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => signIn()}>Sign in</button>
    </>
  );
}