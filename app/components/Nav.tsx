import React from "react";
import Link from "next/link";
import Login from "./Login";
import Logout from "./Logout";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Nav = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav className="px-4 py-2 bg-gray-300 rounded-md flex gap-2">
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
      {!session ? <Login /> : <Logout />}
      {/* <Login />
      <Logout /> */}
    </nav>
  );
};

export default Nav;
