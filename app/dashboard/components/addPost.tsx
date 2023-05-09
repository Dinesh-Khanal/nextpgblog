"use client";
import { FormEvent, useState, useTransition } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
});
const AddPost = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  //const [isFetching, setIsFetching] = useState(false);

  //const isMutating = isFetching || isPending;
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    //setIsFetching(true);
    //await API.post("/post", { title, content });
    await fetch("http://localhost:3000/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    //setIsFetching(false);
    setTitle("");
    setContent("");
    // startTransition(() => {
    //   // Refresh the current route and fetch new data from the server without
    //   // losing client-side browser or React state.
    //   router.refresh();
    // });
    router.refresh();
  };
  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-2 items-center">
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Enter the title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-6 py-2 mb-2 text-xl w-full border"
      />
      <textarea
        name="content"
        id="content"
        className="px-6 py-2 mb-6 text-xl w-full border"
        placeholder="What's on your mind?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      ></textarea>
      <div className="flex gap-2 justify-center items-center">
        <p className={content.length > 300 ? "text-red-700" : "text-black"}>
          {content.length}/300
        </p>
        <button
          //disabled={isMutating}
          className="border rounded-md bg-gray-700 text-white p-2 w-full sm:w-40"
        >
          Create new post
        </button>
      </div>
    </form>
  );
};
export default AddPost;
