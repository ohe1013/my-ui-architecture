import { forwardRef, ElementType, Ref } from "react";
interface ListButtonProps<T extends ElementType = "button"> {
  item: { name: string };
  as?: T;
}
const ListButton = forwardRef(
  <T extends ElementType = "button">(
    { item, ...props }: ListButtonProps<T>,
    ref: Ref<HTMLButtonElement> | null
  ) => {
    return (
      <button
        className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
        ref={ref}
        {...props}
      >
        <span className="block truncate">{item.name}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          🏺
        </span>
      </button>
    );
  }
);

export default ListButton;
