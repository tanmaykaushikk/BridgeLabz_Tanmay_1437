function factorial(n) {
    if (n === 0 || n === 1) return BigInt(1);

    let result = BigInt(1);
    for (let i = BigInt(2); i <= BigInt(n); i++) {
        result *= i;
    }

    return result;
}

const factorial70 = factorial(70);
console.log(factorial70.toString());
