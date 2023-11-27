import { DropdownContext, useDropdownContext } from "../context/dropdown";
import { useDropdown } from "../hooks/useDropdown";
import { RefObject } from "react";

const HeadlessDropdown = <T extends { title: string }>({
  children,
  items,
}: {
  children: React.ReactNode;
  items: T[];
}) => {
  const {
    isOpen,
    toggleDropdown,
    selectIdx,
    selectedItem,
    updateSelectedItem,
    getAriaAttributes,
    dropdownRef,
  } = useDropdown(items);
  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        toggleDown: toggleDropdown,
        selectedIdx: selectIdx,
        selectedItem,
        updateSelecteItem: () => updateSelectedItem,
        dropdownRef,
        getAriaAttributes,
      }}
    >
      <div
        ref={dropdownRef as RefObject<HTMLDivElement>}
        {...getAriaAttributes()}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

HeadlessDropdown.Trigger = function Trigger({
  as: Component = "button",
  ...props
}) {
  const { toggleDown } = useDropdownContext();
  return <Component tabIndex={0} onClick={toggleDown} {...props} />;
};
export default HeadlessDropdown;
