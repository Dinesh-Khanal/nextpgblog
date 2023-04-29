import React from "react";
import Link from "next/link";
import Login from "./Login";
import Logout from "./Logout";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import Logo from "@/images/Red.jpg";

const Nav = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav className=" bg-gray-300">
      <div className="flex justify-between items-center container mx-auto p-2">
        <Image src={Logo} width={80} height={30} alt="logo" />
        <div className="hidden sm:flex space-x-8">
          <Link href="/" className="navLink">
            Home
          </Link>
          <Link href="/users" className="navLink">
            Users
          </Link>
          <label htmlFor="my-modal-3" className="navLink">
            About Us
          </label>
        </div>
        <div className="flex gap-2 items-center">
          {session?.user && <h3>{session.user.name}</h3>}
          {!session ? <Login /> : <Logout image={session?.user?.image || ""} />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
