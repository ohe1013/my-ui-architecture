interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
<<<<<<< HEAD
  onLongPress?: (e: React.KeyboardEvent) => void;
}
export function Button({ onLongPress, ...rest }: Props) {
  console.log(onLongPress);
  return <button {...rest}></button>;
=======
    onLongPress?: (e: React.KeyboardEvent) => void;
}
export function Button({ onLongPress, ...rest }: Props) {
    console.log(onLongPress);
    return <button {...rest}></button>;
>>>>>>> 7fb145b49702fa517ab07cf1fdd130d7493af98f
}
