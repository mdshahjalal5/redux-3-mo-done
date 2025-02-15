import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { filterTask, selectTasks } from "@/redux/task/taskSlice";
import Task from "./Task";
import { AddTaskModal2 } from "./AddTaskModal2";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className={cn("flex justify-center gap-3", {})}>
        <h2 className="text-3xl font-semibold text-center text-sky-500 uppercase">
          Total tasks: {tasks.length}
        </h2>
        <AddTaskModal2></AddTaskModal2>
      </div>
      <Tabs defaultValue="all" className="w-[405px] mx-auto mt-5 ">
        <TabsList className="grid w-auto grid-cols-4 mx-auto justify-center ">
          <TabsTrigger
            onClick={() => dispatch(filterTask("All"))}
            className="mx-aut"
            value="all"
          >
            All
          </TabsTrigger>
          <TabsTrigger onClick={() => dispatch(filterTask("Low"))} value="Low">
            Low
          </TabsTrigger>
          <TabsTrigger
            onClick={() => dispatch(filterTask("Medium"))}
            value="Medium"
          >
            Medium
          </TabsTrigger>
          <TabsTrigger
            onClick={() => dispatch(filterTask("High"))}
            value="High"
          >
            High
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="grid gap-3 mx-7 mt-7">
        {tasks.map((task, idx) => (
          <Task task={task} key={idx} />
        ))}
      </div>
    </div>
  );
}
