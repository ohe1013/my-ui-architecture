import { useState, useEffect } from "react";
import { RemotePaymentMethod } from "../types/payment";
import PaymentMethod from "../models/PaymentMethod";
import { getPayments } from "../api/payment";

const payInCash = new PaymentMethod({ name: "cash" });
const convertPaymentMethods = (methods: RemotePaymentMethod[]) => {
    if (methods.length === 0) {
        return [];
    }
    const extended: PaymentMethod[] = methods.map((method) => new PaymentMethod(method));
    extended.push(payInCash);
    return extended;
};

const usePaymentMethods = () => {
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

    useEffect(() => {
        getPayments().then((methods) => setPaymentMethods(convertPaymentMethods(methods)));
    }, []);
    return { paymentMethods };
};

export default usePaymentMethods;
