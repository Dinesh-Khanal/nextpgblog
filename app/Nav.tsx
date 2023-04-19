import React from "react";
import Link from "next/link";
import Login from "./Login";

const Nav = () => {
  return (
    <nav className="px-4 py-2 bg-gray-300 rounded-md flex gap-2">
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
      <Login />
    </nav>
  );
};

export default Nav;
