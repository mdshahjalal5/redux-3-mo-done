import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
// import { v4 as uuidv4 } from "uuid"; //w: npm library for creating uuid
type Filter = "All" | "Low" | "Medium" | "High";
interface initialState {
  tasks: ITask[];
  filter: Filter;
}

const initialState: initialState = {
  tasks: [],
  filter: "All",
};

type TDraftTask = Pick<
  ITask,
  "title" | "description" | "priority" | "dueDate"
> & { id: string };

const createTask = (data: TDraftTask): ITask => {
  return {
    uid: nanoid(),
    isCompleted: false,
    ...data,
  };
};
export const taskSlice = createSlice({
  name: "sliceName",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      //w: this is the simple way  for adding the task, mir vai first used this then for improving code  he used the bellows way
      //
      // const todoUi: ITask = {
      //   ...action.payload,
      //   id: (state.tasks.length + 1).toString(),
      //   uid: uuidv4(),
      // };
      // state.tasks.push(todoUi);
      //w: improved way
      const taskData = {
        ...createTask(action.payload),
        id: (state.tasks.length + 1).toString(),
      };
      state.tasks.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task,
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    filterTask: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  },
});

export default taskSlice.reducer;
export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "Low") {
    return state.todo.tasks.filter((task) => task.priority === "Low");
  }
  if (filter === "Medium") {
    return state.todo.tasks.filter((task) => task.priority === "Medium");
  }
  if (filter === "High") {
    return state.todo.tasks.filter((task) => task.priority === "High");
  }

  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleCompleteState, deleteTask, filterTask } =
  taskSlice.actions;
