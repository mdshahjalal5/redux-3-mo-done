import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hooks";
import { deleteTask, toggleCompleteState } from "@/redux/task/taskSlice";
import { ITask } from "@/types";

interface IProps {
  task: ITask;
}
const Task = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="border px-5 py-3  shadow-lg rounded-xl">
      <div className="flex items-center space-x-2">
        <p
          className={cn(
            "text-white w-5  p-3 h-5 bg-gray-400 rounded-full flex justify-center items-center",
            task.priority === "High"
              ? "bg-red-500"
              : task.priority === "Medium"
                ? "bg-green-500"
                : "bg-gray-500",
          )}
        >
          {task.id}
        </p>

        <h2
          className={cn("text-xl font-semibold", {
            "text-green-00 line-through": task.isCompleted,
          })}
        >
          {" "}
          {task.title}
        </h2>
      </div>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <Checkbox
        onClick={() => dispatch(toggleCompleteState(task.id))}
        checked={task.isCompleted}
      ></Checkbox>
      <Button
        className="ml-3 text-red-500"
        onClick={() => dispatch(deleteTask(task.id))}
      >
        delete task{" "}
      </Button>
    </div>
  );
};
/*w: for cn dynamic class
 *
 *<div className={cn("size-3 rounded-full", {

"bg-green-500": task.priority = "Low",
"bg-yellow-500": task.priority == "Medium",
"bg-red-500": task.priority == "High",

>

</div>

 * */
export default Task;
