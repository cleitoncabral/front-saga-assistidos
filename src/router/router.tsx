import { createBrowserRouter } from "react-router-dom";
import { AuthForm } from "../pages/AuthForm/AuthForm";
import { Home } from "../pages/Home/Home";
import { RequiredAuth } from "../contexts/Auth/RequiredAuth";
import { ShowSearchResult } from "../pages/ShowSearchResult/ShowSearchResult";
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
            path: "/searchContent/",
            element: <ShowSearchResult />
          },
          {
            path: "/searchContent/:review",
            element: <AddContent />
          },
          {
            path: "/home/:review",
            element: <AddContent />
          }
        ]
      }
    ]
  },
]);