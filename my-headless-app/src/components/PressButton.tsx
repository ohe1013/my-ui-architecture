import { Button } from "./Button";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
<<<<<<< HEAD
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
=======
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
>>>>>>> 7fb145b49702fa517ab07cf1fdd130d7493af98f
}
