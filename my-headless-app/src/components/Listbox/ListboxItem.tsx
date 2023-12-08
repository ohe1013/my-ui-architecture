const ListboxItem = ({
  selected,
  text,
}: {
  selected: boolean;
  text: string;
}) => {
  return (
    <span
      className={`block truncate ${selected ? "font-medium" : "font-normal"}`}
    >
      {text}
    </span>
  );
};
export default ListboxItem;
