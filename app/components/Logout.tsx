"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type IProps = {
  image: string;
};
const Logout = ({ image }: IProps) => {
  return (
    <div className="flex gap-6 items-center">
      <Link href="/dashboard">
        <Image
          width={32}
          height={32}
          src={image}
          alt="profile image"
          className="rounded-full"
        />
      </Link>
      <button className="btn btn-primary" onClick={() => signOut()}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
