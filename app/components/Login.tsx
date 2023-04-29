"use client";
import { signIn } from "next-auth/react";
const Login = () => {
  return (
    <button className="navLink" onClick={() => signIn()}>
      Login
    </button>
  );
};

export default Login;
