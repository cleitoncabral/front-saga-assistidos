import { createBrowserRouter } from "react-router-dom";
import { AuthForm } from "../pages/AuthForm/AuthForm";
import { Home } from "../pages/Home";
import { AddContent } from "../pages/AddContent/AddContent";
import { RequiredAuth } from "../contexts/Auth/RequiredAuth";
import UserAuth from "../pages/UserAuth/UserAuth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthForm />,
    children: []
  },
  {
    path: "home",
    element: <RequiredAuth><UserAuth /></RequiredAuth>,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/home/movie",
        element: <AddContent />
      }
    ]
  }
]);