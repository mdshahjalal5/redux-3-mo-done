import { configureStore } from "@reduxjs/toolkit";
import couneterReducer from "./counter/counterSlice";
import taskReducer from "./task/taskSlice";
import userReducer from "./user/userSlice";
export const store = configureStore({
  reducer: {
    counter: couneterReducer,
    todo: taskReducer,
    user: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
