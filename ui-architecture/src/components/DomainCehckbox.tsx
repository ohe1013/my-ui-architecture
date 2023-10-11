import { DonationCheckboxProps } from "../types/checkbox";

const DomainCheckbox = ({ onChange, checked, content }: DonationCheckboxProps) => {
    return (
        <label>
            <input type="checkbox" onChange={onChange} checked={checked} />
            <p>{content}</p>
        </label>
    );
};
export default DomainCheckbox;
