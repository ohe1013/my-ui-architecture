import { http } from "../index";

const getRandTime = () => {
  return Math.random() * 500;
};
const getTodo = async () => {
  const res = await http.get("/posts");
  await new Promise((res) => {
    setTimeout(() => res(1), getRandTime());
  });
  return res.data;
};

const getTodoDetail = async (id: string) => {
  const res = await http.get("/posts/" + id);
  await new Promise((res) => {
    setTimeout(() => res(1), getRandTime());
  });
  return res.data;
};
const postTodo = async (data: { id: string; title: string }) => {
  const res = await http.patch("/posts/" + data.id, { title: data.title });
  await new Promise((res) => {
    setTimeout(() => res(1), getRandTime());
  });
  return res.data;
};
export { getTodo, postTodo, getTodoDetail };
