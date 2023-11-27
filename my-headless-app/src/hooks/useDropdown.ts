import { useState, useRef } from "react";
export interface DropdownItem<T> {
  title: string;
}
export const useDropdown = <T>(items: DropdownItem<T>[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, updateSelectedItem] = useState<DropdownItem<T> | null>(
    null
  );

  const [selectIdx, setSelectIdx] = useState<number>(-1);
  const getAriaAttributes = () => ({
    role: "combobox",
    "aria-expanded": isOpen,
    "aria-activedescendant": selectedItem ? selectedItem.title : undefined,
  });

  const dropdownRef = useRef(null);
  const handleKeyDown = (e: React.KeyboardEvent) => {
    let currentIdx = selectIdx;
    switch (e.key) {
      case "ArrowUp": {
        currentIdx--;
        break;
      }
      case "ArrowRight": {
        currentIdx++;
        break;
      }
      case "ArrowDown": {
        currentIdx++;
        break;
      }
      case "ArrowLeft": {
        currentIdx--;
        break;
      }
    }
    if (currentIdx < 0) currentIdx = 0;
    if (currentIdx > 9) currentIdx = 9;
    setSelectIdx(currentIdx);
  };
  const toggleDropdown = () => setIsOpen((isOpen) => !isOpen);

  return {
    isOpen,
    toggleDropdown,
    handleKeyDown,
    getAriaAttributes,
    selectedItem,
    updateSelectedItem,
    selectIdx,
    dropdownRef,
  };
};
