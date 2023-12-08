import { ChangeEventHandler } from "react";
export type DonationCheckboxProps = {
    onChange: ChangeEventHandler<HTMLInputElement>;
    checked: boolean;
    content: string;
};
