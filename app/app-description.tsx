"use server"

import { unstable_getServerSession } from "next-auth/next";
import UserInformation from "./user-information";

export default async function AppDescription() {
  const session = await getData();

  return (
    <div>
      <div>
        This is the application description component (server component).
      </div>
      <UserInformation data={session?.user} />
    </div>
  );
}

async function getData() {
  const session = await unstable_getServerSession();
  console.log("Hello from app-description.js");
  return session;
}