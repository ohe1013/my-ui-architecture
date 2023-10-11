type RoundUpStrategy = (amount: number) => number;

const calculateTipFor = (fn: (amount: number) => number) => {
    return (amount: number) => {
        return parseFloat((fn(amount) - amount).toPrecision(10));
    };
};

export class CountryPayment {
    private readonly _currencySign: string;
    private readonly algorithm: RoundUpStrategy;
    public constructor(currencySign: string, roundUpAlgorithm: RoundUpStrategy) {
        this._currencySign = currencySign;
        this.algorithm = roundUpAlgorithm;
    }
    get currenctSign(): string {
        return this._currencySign;
    }
    getRoundUpAmount(amount: number): number {
        return this.algorithm(amount);
    }
    getTip(amount: number): number {
        return calculateTipFor(this.getRoundUpAmount.bind(this))(amount);
    }
}
