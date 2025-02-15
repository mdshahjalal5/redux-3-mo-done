import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface IUser {
  name: string;
  id: string;
}
interface InitialState2 {
  users: IUser[];
}
type TDraftUser = Pick<IUser, "name">;
const createUser = (user: TDraftUser): IUser => {
  return {
    ...user,
    id: nanoid(),
  };
};
const initialState: InitialState2 = {
  users: [
    {
      name: "shah",
      id: "1",
    },
    {
      name: "kb",
      id: "2",
    },
  ],
};
export const userSlice = createSlice({
  name: "userSliceName",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<TDraftUser>) => {
      const userData: IUser = createUser(action.payload);
      state.users.push(userData);
    },
    removeUser: () => {},
  },
});

export const { addUser, removeUser } = userSlice.actions;

export const selectUsers = (state: RootState) => {
  return state.user.users;
};

export default userSlice.reducer;
