import { useState } from "react";
import { Link } from "react-router-dom";

const TodoItem = ({
  isInput,
  onKeyDown,
  defaultItem,
}: {
  isInput: boolean;
  onKeyDown: any;
  defaultItem: { id: string; title: string };
}) => {
  const [item, setItem] = useState<{ id: string; title: string }>(defaultItem);
  return isInput ? (
    <input
      onChange={(e) => setItem({ ...item, title: e.target.value })}
      onKeyDown={(e) => onKeyDown(e)(item.title, item.id)}
      value={item.title}
    ></input>
  ) : (
    <Link to={"detail/" + defaultItem.id}>
      <p>{item.title}</p>
    </Link>
  );
};
export { TodoItem };
