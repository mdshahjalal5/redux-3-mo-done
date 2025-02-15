import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { addUser, IUser } from "@/redux/user/userSlice";
interface IProps {
  user: IUser;
}
const User = ({ user }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className=" mx-2 my-5  border px-5 py-3  shadow-lg rounded-xl space-y-">
      <h2 className="text-xl font-semibold text-sky-400">{user.name}</h2>
      <p>User id {user.id}</p>
      <Button
        onClick={() => {
          const userData = {
            name: user.name,
          };
          dispatch(addUser(userData));
        }}
        className="mt-2"
      >
        Add User
      </Button>
    </div>
  );
};

export default User;
