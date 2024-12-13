function fibonacci(n) {
    const sqrt5 = Math.sqrt(5);
    const phi = (1 + sqrt5) / 2;
    const psi = (1 - sqrt5) / 2;

    const fibN = (Math.pow(phi, n) - Math.pow(psi, n)) / sqrt5;
    return BigInt(Math.round(fibN));
}

const fibonacci500 = fibonacci(500);
console.log(fibonacci500.toString());
