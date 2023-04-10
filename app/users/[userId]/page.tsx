import { getUserById } from "@/lib/users";

type IProps = {
  params: { userId: string };
};

const page = async ({ params }: IProps) => {
  const user = (await getUserById(params.userId)).user;
  return (
    <div className="p-4">
      <h2>Name: {user?.name}</h2>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default page;
