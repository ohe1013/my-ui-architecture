interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onLongPress?: (e: React.KeyboardEvent) => void;
}
export function Button({ onLongPress, ...rest }: Props) {
  console.log(onLongPress);
  return <button {...rest}></button>;
}
