import { User } from "@prisma/client";
import prisma from "./prisma";

export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (error) {
    return { error };
  }
}

export async function createUser(user: User) {
  try {
    const userFromDb = await prisma.user.create({ data: user });
    return { user: userFromDb };
  } catch (error) {
    return { error };
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    return { user };
  } catch (error) {
    return { error };
  }
}

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    return { user };
  } catch (error) {
    return { error };
  }
}
