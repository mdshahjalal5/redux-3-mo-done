import App from "@/App";
import Users from "@/pages/user/Users";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "users",
    element: <Users></Users>,
  },
]);
