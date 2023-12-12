import { RemotePaymentMethod } from "../types/payment";

class PaymentMethod {
    private remotePaymentMethod: RemotePaymentMethod;

    constructor(remotePaymentMethod: RemotePaymentMethod) {
        this.remotePaymentMethod = remotePaymentMethod;
    }
    get provider() {
        return this.remotePaymentMethod.name;
    }

    get label() {
        if (this.provider) {
            return `Pay in ${this.provider}`;
        }
        return `Pay with ${this.provider}`;
    }
    get isDefaultMethod() {
        return this.provider === "cash";
    }
}
export default PaymentMethod;
