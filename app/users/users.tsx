import { User } from "@prisma/client";
import { getUsers } from "@/lib/users";
import Link from "next/link";
const Users = async () => {
  const usersData = await getUsers();
  const users = usersData.users;
  return (
    <div className="center bg-stone-700 p-4 h-screen">
      <h2 className="mb-4 text-xl font-medium text-white">Users List</h2>
      <ul className="flex flex-col text-sm text-white">
        {users?.map((user: User) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Users;
