"use client";
import { FormEvent, useState } from "react";
//import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import QueryWrapper from "./queryWrapper";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
});
const AddPost = () => {
  const [title, setTitle] = useState("");
  //   const { mutate } = useMutation(
  //     async (title) => await API.post("/posts/addPost", { title })
  //   );
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    await API.post("/post", { title });
    setTitle("");
  };
  return (
    <QueryWrapper>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-2 items-center"
      >
        <textarea
          name="title"
          id="title"
          className="px-6 py-2 m-6 text-xl w-full border"
          placeholder="What's on your mind?"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></textarea>
        <div className="flex gap-2 justify-center items-center">
          <p className={title.length > 300 ? "text-red-700" : "text-black"}>
            {title.length}/300
          </p>
          <button className="border rounded-md bg-gray-700 text-white p-2 w-full sm:w-32">
            Create new post
          </button>
        </div>
      </form>
    </QueryWrapper>
  );
};
export default AddPost;
