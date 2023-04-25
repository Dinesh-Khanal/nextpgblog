import { Post } from "@prisma/client";
import prisma from "./prisma";

export async function getPosts() {
  try {
    const posts = await prisma.post.findMany();
    return { posts };
  } catch (error) {
    return { error };
  }
}

export async function createPost(post: Post) {
  try {
    const postFromDb = await prisma.post.create({ data: post });
    return { post: postFromDb };
  } catch (error) {
    return { error };
  }
}

export async function getPostById(id: string) {
  try {
    const post = await prisma.post.findUnique({ where: { id } });
    return { post };
  } catch (error) {
    return { error };
  }
}
