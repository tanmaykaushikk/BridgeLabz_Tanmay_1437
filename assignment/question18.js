function printPrime(n) {
  let primes = [];
  let currentNumber = 2;

  while (primes.length < n) {
    if (isPrime(currentNumber)) {
      primes.push(currentNumber);
    }
    currentNumber++;
  }
  console.log(primes.join(","));
}

function isPrime(n) {
  if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
}

printPrime(100);
