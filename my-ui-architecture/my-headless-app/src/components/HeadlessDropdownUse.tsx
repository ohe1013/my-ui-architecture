import Dropdown from "./HeadlessDropdown";
import { TodoItem } from "./Dropdown";
import Trigger from "./Trigger";
const HeadlessDropdownUse = ({ items }: { items: TodoItem[] }) => {
  return (
    <Dropdown items={items}>
      <Dropdown.Trigger as={Trigger} label="Select"></Dropdown.Trigger>
      <Dropdown.List>
        {items.map((item, index) => (
          <Dropdown.Option as={"li"} index={index} key={index} item={item} />
        ))}
      </Dropdown.List>
    </Dropdown>
  );
};
export default HeadlessDropdownUse;
