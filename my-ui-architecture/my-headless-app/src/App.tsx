import Dropdown, { TodoItem } from "./components/Dropdown";
import { useQuery } from "@tanstack/react-query";
import MyListboxVue from "./pages/MyListboxVue";

// const fetchPosts: () => Promise<Array<Item>> = () =>
//   fetch("https://jsonplaceholder.typicode.com/photos").then((res) =>
//     res.json()
//   );

const fetchTodos: () => Promise<Array<TodoItem>> = () =>
  fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json().then((data) => data.slice(0, 10))
  );
function App() {
  const { data } = useQuery({
    queryKey: ["post"],
    queryFn: fetchTodos,
    staleTime: Infinity,
    gcTime: Infinity,
  });
  return (
    <>
      <MyListboxVue />
      {data && data?.length > 0 && <Dropdown items={data} />}
    </>
  );
}

export default App;
