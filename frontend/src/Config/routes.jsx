import { Route, createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import PageNotFound from "../Pages/pageNotFound";
import Profile from "../Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> Home Page </div>,
    errorElement: <PageNotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
]);

export default router;
