import { useState, useMemo } from "react";
import { CountryPayment } from "../models/CountryPayment";
const useRoundUp = (amount: number, strategy: CountryPayment) => {
    const [agreeToDonate, setAgreeToDonate] = useState<boolean>(false);
    const { total, tip } = useMemo(
        () => ({
            total: agreeToDonate ? strategy.getRoundUpAmount(amount) : amount,
            tip: strategy.getTip(amount),
        }),
        [amount, agreeToDonate, strategy]
    );
    const updateAgreeToDonate = () => {
        setAgreeToDonate((agreeToDonate) => !agreeToDonate);
    };
    return {
        total,
        tip,
        agreeToDonate,
        updateAgreeToDonate,
    };
};

export default useRoundUp;
