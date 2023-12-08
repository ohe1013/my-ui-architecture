import { Button } from "./Button";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onLongPress?: (e: React.KeyboardEvent) => void;
}
export function PressButton(props: Props) {
  const longPressProps = useLongPress();
  return <Button {...longPressProps} {...props}></Button>;
}

function useLongPress() {
  return {
    onKeyDown: (e: React.KeyboardEvent) => {
      console.log(e);
    },
  };
}
