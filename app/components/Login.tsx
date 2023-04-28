"use client";
import { signIn } from "next-auth/react";
const Login = () => {
  return (
    <button className="btn btn-primary" onClick={() => signIn()}>
      Login
    </button>
  );
};

export default Login;
