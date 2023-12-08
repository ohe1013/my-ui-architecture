const MyDropdownItem = <T extends { id: string; title: string }>({
  item,
  onItemClick,
  idx,
  selectedIdx,
}: {
  item: T;
  onItemClick: (item: T) => void;
  idx: number;
  selectedIdx: number;
}) => {
  return (
    <div
      onClick={() => onItemClick(item)}
      key={item.id}
      className="item-container"
    >
      {selectedIdx === idx ? (
        <div
          style={{ background: "black", color: "white" }}
          className="details"
        >
          <div>{item.title}</div>
        </div>
      ) : (
        <div className="details">
          <div>{item.title}</div>
        </div>
      )}
    </div>
  );
};

export default MyDropdownItem;
