import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { getUserByEmail } from "@/lib/users";
import { createPost, getPosts } from "@/lib/posts";

export async function GET(request: NextRequest) {
  //both of following are valid
  //return new NextResponse(JSON.stringify({ sender: "I am Dinesh Khanal" }));
  const posts = await getPosts();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse(
      JSON.stringify({ status: "fail", message: "You are not logged in" }),
      { status: 401 }
    );
  }
  const { user } = await getUserByEmail(session.user?.email as string);
  const body = await request.json();
  const newPost = {
    title: body.title,
    content: body.content,
    userId: user?.id,
  };
  //@ts-ignore
  const post = await createPost(newPost);
  return NextResponse.json({ data: post });
}
