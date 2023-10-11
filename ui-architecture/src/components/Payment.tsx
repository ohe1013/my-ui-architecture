import usePaymentMethods from "../hooks/usePaymentMethods";
import useRoundUp from "../hooks/useRoundUp";
import { CountryPayment } from "../models/CountryPayment";
import DomainCheckbox from "./DomainCehckbox";
import PaymentMethods from "./PamentMethods";

const formatCheckboxLabel = (agreeToDonate: boolean, tip: number, strategy: CountryPayment) => {
    return agreeToDonate
        ? "Thanks for your donation."
        : `I would like to donate ${strategy.currenctSign}${tip} to charity.`;
};
const formatButtonLabel = (strategy: CountryPayment, total: number) => {
    return `${strategy.currenctSign}${total}`;
};
const roundUpToNearestInteger = (amount: number) => Math.floor(amount + 1);
export const Payment = ({
    amount,
    strategy = new CountryPayment("$", roundUpToNearestInteger),
}: {
    amount: number;
    strategy?: CountryPayment;
}) => {
    const { paymentMethods } = usePaymentMethods();
    const { total, tip, agreeToDonate, updateAgreeToDonate } = useRoundUp(amount, strategy);
    const checkboxLabel = formatCheckboxLabel(agreeToDonate, tip, strategy);
    const buttonLabel = formatButtonLabel(strategy, total);
    return (
        <div>
            <h3>Payment</h3>
            <div>
                <PaymentMethods options={paymentMethods} />
                <div>
                    <DomainCheckbox
                        onChange={updateAgreeToDonate}
                        content={checkboxLabel}
                        checked={agreeToDonate}
                    ></DomainCheckbox>
                </div>
                <button>{buttonLabel}</button>
            </div>
        </div>
    );
};

/**
 * 
 as-is
    export const Payment = ({ amount }: { amount: number }) => {
        const [paymentMethods, setPaymentMethods] = useState<LocalPaymentMethod[]>([]);

        useEffect(() => {
            const fetchPaymentMethods = async () => {
                const url = "data/method.json";

                const response = await fetch(url);
                const methods: RemotePaymentMethod[] = await response.json();

                if (methods.length > 0) {
                    const extended: LocalPaymentMethod[] = methods.map((method) => ({
                        provider: method.name,
                        label: `Pay with ${method.name}`,
                    }));
                    extended.push({ provider: "cash", label: "Pay in cash" });
                    setPaymentMethods(extended);
                } else {
                    setPaymentMethods([]);
                }
            };

            fetchPaymentMethods();
        }, []);

        return (
            <div>
                <h3>Payment</h3>
                <div>
                    {paymentMethods.map((method) => (
                        <label key={method.provider}>
                            <input
                                type="radio"
                                name="payment"
                                value={method.provider}
                                defaultChecked={method.provider === "cash"}
                            />
                            <span>{method.label}</span>
                        </label>
                    ))}
                </div>
                <button>${amount}</button>
            </div>
        );
    };

 * 
 */
