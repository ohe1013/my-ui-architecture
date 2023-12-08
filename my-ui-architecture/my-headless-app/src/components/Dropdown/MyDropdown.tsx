import { useDropdown } from "../../hooks/useDropdown";
import MyDropdownList from "./MyDropdownList";
import MyTrigger from "./MyTrigger";

function MyDropdown({ items }: { items: Array<unknown> }) {
  const {
    getAriaAttributes,
    handleKeyDown,
    isOpen,
    selectIdx,
    selectedItem,
    setSelectIdx,
    toggleDropdown,
    updateSelectedItem,
  } = useDropdown();
  if (selectedItem === null) return <></>;
  return (
    <>
      <MyTrigger item={selectedItem} onClick={toggleDropdown}></MyTrigger>
      <MyDropdownList
        itemList={items}
        onItemClick={updateSelectedItem}
        {...getAriaAttributes()}
      />
    </>
  );
}

export default MyDropdown;
