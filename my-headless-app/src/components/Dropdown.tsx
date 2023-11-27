import DropdownMenu from "./DropdownMenu";
import Trigger from "./Trigger";
import { useDropdown } from "../hooks/useDropdown";
import { PressButton } from "./PressButton";

export interface PhotoItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

type DropdownProps = {
  items: TodoItem[];
};
const Dropdown = ({ items }: DropdownProps) => {
  const {
    isOpen,
    selectedItem,
    handleKeyDown,
    toggleDropdown,
    selectIdx,
    updateSelectedItem,
  } = useDropdown(items);

  return (
    <div className="dropdown">
      <input onKeyDown={handleKeyDown}></input>
      <Trigger
        label={selectedItem ? selectedItem?.title : "Select a Item"}
        onClick={toggleDropdown}
      ></Trigger>
      <PressButton />
      {isOpen && (
        <DropdownMenu
          selectedIdx={selectIdx}
          items={items}
          onItemClick={updateSelectedItem}
        />
      )}
    </div>
  );
};

export default Dropdown;
