import HeadlessDropdownUse from "./HeadlessDropdownUse";

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
  return (
    <div className="dropdown">
      {/* <input onKeyDown={handleKeyDown}></input>
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
      )} */}
      <HeadlessDropdownUse items={items}></HeadlessDropdownUse>
    </div>
  );
};

export default Dropdown;
