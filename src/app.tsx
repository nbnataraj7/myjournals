import "./app.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./login";
import { Home } from "./home";

const router = createBrowserRouter([
  {
    path: "",
    element: <Login />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "home",
    element: <Home />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
