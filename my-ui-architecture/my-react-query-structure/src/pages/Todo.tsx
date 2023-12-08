import useTodo from "../hooks/todo";
import "./index.css";
import { Link } from "react-router-dom";
export default function Todo() {
  const {
    changeTodo,
    checkedIdList,
    data,
    error,
    handleCheckList,
    inputValues,
    setInputValues,
    status,
  } = useTodo();
  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "error") return <span>Error: {error.message}</span>;

  return (
    <>
      {data.map((item: { id: string; title: string }) => {
        return (
          <div key={item.id} style={{ display: "flex" }}>
            {checkedIdList[item.id] ? (
              <input
                onChange={(e) => {
                  setInputValues((prevInputValues) => ({
                    ...prevInputValues,
                    [item.id]: e.target.value,
                  }));
                }}
                onKeyDown={(e) =>
                  changeTodo(e)(inputValues[item.id] || "", item.id)
                }
                key={"input_" + item.id}
                defaultValue={inputValues[item.id] || item.title}
              ></input>
            ) : (
              <Link to={"detail/" + item.id}>
                <p key={"paragraph_" + item.id}>{item.title}</p>
              </Link>
            )}
            <button onClick={() => handleCheckList(item.id)}>click</button>
          </div>
        );
      })}
    </>
  );
}
