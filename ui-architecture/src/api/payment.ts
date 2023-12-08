import { RemotePaymentMethod } from "../types/payment";

const getPayments = async () => {
    const url = "data/method.json";

    const response = await fetch(url);
    const methods: RemotePaymentMethod[] = await response.json();
    return methods;
};

export { getPayments };
