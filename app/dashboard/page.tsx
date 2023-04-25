import React from "react";
import AddPost from "./components/addPost";
import Posts from "./components/posts";

export default async function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">User Profile Dashboard</h1>
      <AddPost />
      {/* @ts-expect-error Async Server Component */}
      <Posts />
    </div>
  );
}
