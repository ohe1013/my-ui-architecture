import MyDropdownItem from "./MyDropdownItem";
interface MyDropdownListProps<T extends { title: string; id: string }> {
  itemList: Array<T>;
  onItemClick: (item: T) => void;
  selectedIdx: number;
}
const MyDropdownList = <T extends { title: string; id: string }>({
  itemList,
  ...props
}: MyDropdownListProps<T>) => {
  const { onItemClick, selectedIdx, ...rest } = props;
  return (
    <div className="dropdown-menu" role="listbox">
      {itemList.map((item, idx) => (
        <MyDropdownItem
          idx={idx}
          item={item}
          onItemClick={onItemClick}
          selectedIdx={selectedIdx}
          key={idx}
          {...rest}
        />
      ))}
    </div>
  );
};

export default MyDropdownList;
