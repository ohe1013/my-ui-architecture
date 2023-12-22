import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
  {
    element: <Todo />,
    path: "",
  },
  { element: <TodoDetail id="" />, path: "/detail/:id" },
];

const router =  createBrowserRouter(routes)
export const RegisterRoutes = () => {
  return (
    <RouterProvider router={router} />
  )
}