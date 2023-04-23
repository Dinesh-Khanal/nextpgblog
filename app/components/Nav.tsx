import React from "react";
import Link from "next/link";
import Login from "./Login";
import Logout from "./Logout";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Nav = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav className="px-4 py-2 bg-gray-300 rounded-md flex justify-between">
      <div className="flex gap-2">
        <Link href="/">Home</Link>
        <Link href="/users">Users</Link>
      </div>
      <div className="flex gap-4">
        {session?.user && <h3>{session.user.name}</h3>}
        {!session ? <Login /> : <Logout image={session?.user?.image || ""} />}
      </div>
    </nav>
  );
};

export default Nav;
