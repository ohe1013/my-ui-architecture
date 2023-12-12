import Todo from "./pages/Todo";
import { TodoDetail } from "./pages/TodoDetail";

const routes = [
  {
    element: <Todo />,
    path: "/",
  },
  { element: <TodoDetail id="" />, path: "/detail/:id" },
];

export { routes };
