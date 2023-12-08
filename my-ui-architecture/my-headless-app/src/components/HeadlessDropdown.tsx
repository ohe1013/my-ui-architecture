import { DropdownContext, useDropdownContext } from "../context/dropdown";
import { useDropdown } from "../hooks/useDropdown";
import { RefObject, ReactNode, ElementType, ComponentProps } from "react";

const HeadlessDropdown = <T extends { title: string }>({
  children,
  items,
}: {
  children: ReactNode;
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
    setSelectIdx,
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
        setSelectIdx,
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

HeadlessDropdown.Trigger = function Trigger<Props extends ElementType>({
  as: Component = "button",
  ...props
}: {
  as?: Props;
} & ComponentProps<Props>) {
  const { toggleDown } = useDropdownContext();
  return <Component tabIndex={0} onClick={toggleDown} {...props} />;
};
HeadlessDropdown.List = function List<Props extends ElementType>({
  as: Component = "ul",
  ...props
}: {
  as?: Props;
} & ComponentProps<Props>) {
  const { isOpen } = useDropdownContext();

  return isOpen ? <Component {...props} role="listbox" tabIndex={0} /> : null;
};

HeadlessDropdown.Option = function Option<T extends { title: string }>({
  as: Component = "li",
  index,
  item,
  ...props
}: {
  as: ElementType;
  index: number;
  item: T;
}) {
  const { selectedIdx, setSelectIdx } = useDropdownContext();

  return (
    <Component
      role="option"
      aria-selected={index === selectedIdx}
      style={{
        backgroundColor: index === selectedIdx ? "black" : "white",
        color: index === selectedIdx ? "white" : "black",
      }}
      key={index}
      onClick={() => setSelectIdx(index)}
      {...props}
    >
      {item.title}
    </Component>
  );
};
export default HeadlessDropdown;
