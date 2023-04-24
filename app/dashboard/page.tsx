import React from "react";
import AddPost from "./components/addPost";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">User Profile Dashboard</h1>
      <AddPost />
    </div>
  );
}
