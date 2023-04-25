import React from "react";
import { getPosts } from "@/lib/posts";
const Posts = async () => {
  const { posts } = await getPosts();
  return (
    <div className="flex flex-col justify-start">
      <h1 className="text-xl font-semibold">Blog posts</h1>
      {posts?.map((p) => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  );
};

export default Posts;
