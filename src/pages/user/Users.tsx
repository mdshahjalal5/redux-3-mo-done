import { useAppSelector } from "@/redux/hooks";
import { selectUsers } from "@/redux/user/userSlice";
import User from "./User";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AddUserModal from "./AddUserModal";

const Users = () => {
  const users = useAppSelector(selectUsers);

  console.log(users, "[1;31musers in Users.tsx at line 6[0m");
  return (
    <div className="mt-10">
      <Link to={"/"}>
        <Button>Tasks</Button>
      </Link>
      <AddUserModal></AddUserModal>
      <h2 className="text-xl font-semibold text-center text-orange-400">
        All Users {users.length}
      </h2>
      {users.map((user, idx) => (
        <User key={idx} user={user}></User>
      ))}
    </div>
  );
};

export default Users;
