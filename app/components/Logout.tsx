"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type IProps = {
  image: string;
};
const Logout = ({ image }: IProps) => {
  return (
    <div className="flex gap-6">
      <Link href="/dashboard">
        <Image
          width={32}
          height={32}
          src={image}
          alt="profile image"
          className="rounded-xl"
        />
      </Link>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Logout;
