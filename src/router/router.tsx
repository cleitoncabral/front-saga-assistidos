import { createBrowserRouter } from "react-router-dom";
import { AuthForm } from "../pages/AuthForm/AuthForm";
import { Home } from "../pages/Home";
import { RequiredAuth } from "../contexts/Auth/RequiredAuth";
import { SearchContent } from "../pages/SearchContent/SearchContent";
import { Base } from "../pages/Base/Base";
import { AddContent } from "../pages/AddContent/AddContent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    errorElement: <h1>Página não existe</h1>,
    children: [
      {
        path: "/",
        index: true,
        element: <AuthForm />
      },
      {
        element: <RequiredAuth/>,
        children: [
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/searchContent/:contentName",
            element: <SearchContent />
          },
          {
            path: "/searchContent/:contentName/:review",
            element: <AddContent />
          }
        ]
      }
    ]
  },
]);