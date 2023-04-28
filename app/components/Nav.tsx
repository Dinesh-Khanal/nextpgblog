import React from "react";
import Link from "next/link";
import Login from "./Login";
import Logout from "./Logout";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Nav = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav className="navbar bg-gray-300 rounded-xl px-4">
      <div className="navbar-start gap-2">
        <Link href="/" className="btn btn-primary">
          Home
        </Link>
        <Link href="/users" className="btn btn-primary">
          Users
        </Link>
        <button className="btn btn-primary">Daisy Button</button>
      </div>
      <div className="navbar-end gap-2">
        {session?.user && <h3>{session.user.name}</h3>}
        {!session ? <Login /> : <Logout image={session?.user?.image || ""} />}
      </div>
    </nav>
  );
};

export default Nav;
