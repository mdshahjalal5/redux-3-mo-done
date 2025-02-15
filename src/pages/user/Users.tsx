import { useAppSelector } from "@/redux/hooks";
import { selectUsers } from "@/redux/user/userSlice";
import User from "./User";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Users = () => {
  const users = useAppSelector(selectUsers);

  console.log(users, "[1;31musers in Users.tsx at line 6[0m");
  return (
    <div className="mt-10">
      <Link to={"/"}>
        <Button>Tasks</Button>
      </Link>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="uppercase text-sky-400">
              Add user
            </DialogTitle>
            <DialogDescription className="sr-only">
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
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
