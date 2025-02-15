import { Button } from "@/components/ui/button";
import Home from "./Home";
import { ModeToggle } from "./components/mode-toggle";
import Tasks from "./pages/tasks";
import AddTaskModal from "./pages/AddTaskModal";
import { AddTaskModal2 } from "./pages/AddTaskModal2";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between px-4 py-5">
          <div className="flex gap-3 ">
            <Link to={"users"}>
              <Button>Users</Button>
            </Link>
            <Home></Home>
          </div>
          <ModeToggle></ModeToggle>
        </div>
        <div>
          <Tasks></Tasks>
        </div>
        <AddTaskModal />
        <AddTaskModal2></AddTaskModal2>
      </div>
    </>
  );
}

export default App;
