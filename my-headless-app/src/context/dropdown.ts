import { RefObject, createContext, useContext } from "react";
type DropdownContextType<T> = {
  isOpen: boolean;
  toggleDown: () => void;
  selectedIdx: number;
  selectedItem: T | null;
  updateSelecteItem: (item: T) => void;
  getAriaAttributes: () => unknown;
  dropdownRef: RefObject<HTMLElement>;
};
function createDropdownContext<T>() {
  return createContext<DropdownContextType<T> | null>(null);
}

export const DropdownContext = createDropdownContext();

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("컴포넌트는 <Dropdown/> 내에서만");
  }
  return context;
};
