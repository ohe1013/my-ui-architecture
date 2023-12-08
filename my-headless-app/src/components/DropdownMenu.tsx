import { TodoItem } from "./Dropdown";
const DropdownMenu = ({
  items,
  onItemClick,
  selectedIdx,
}: {
  items: TodoItem[];
  onItemClick: (item: TodoItem) => void;
  selectedIdx: number;
}) => {
  return (
    <div className="dropdown-menu" role="listbox">
      {items.map((item, idx) => (
        <div
          onClick={() => onItemClick(item)}
          key={item.id}
          className="item-container"
        >
          {selectedIdx === idx ? (
            <div
              style={{ background: "black", color: "white" }}
              className="details"
            >
              <div>{item.title}</div>
            </div>
          ) : (
            <div className="details">
              <div>{item.title}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
