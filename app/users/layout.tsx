import Users from "./users";

type IProps = {
  children: React.ReactNode;
};
const UsersLayout = async ({ children }: IProps) => {
  return (
    <aside className="w-1/4 flex">
      {/* @ts-expect-error Async Server Component */}
      <Users />
      <div>{children}</div>
    </aside>
  );
};

export default UsersLayout;
