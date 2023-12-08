const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const operation = [plus, multiply, divide, minus];

const commands = {
    async operateRandom(max) {
        await delay(Math.random() * 5000);
        let sum = 0;

        for (let i = 1; i < max; i++) {
            const operationIdx = (Math.random() * 4) >> 0;
            sum = operation[operationIdx](sum, i);
            if (sum === Infinity || sum === -Infinity) sum = 0;
        }
        return sum;
    },
    async fibonacci(limit) {
        await delay(Math.random() * 1000);
        let prev = 1n,
            next = 0n,
            swap;
        while (limit) {
            swap = prev;
            prev = prev + next;
            next = swap;
            limit--;
        }
        return parseInt(next);
    },
    async bad() {
        await delay(Math.random() * 3000);
        throw new Error("bad");
    },
};
export default commands;
