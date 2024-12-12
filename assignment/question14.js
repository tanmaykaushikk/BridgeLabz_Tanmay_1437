// first 10 fibonacci numbers

printFibonacci();

function printFibonacci() {
  const count = 10;
  let fibo = [];

  for (let i = 0; i < count; i++) {
    if (i === 0) {
      fibo.push(0);
    } else if (i === 1) {
      fibo.push(1);
    } else {
      fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
  }

  console.log(fibo.join(","));
}
