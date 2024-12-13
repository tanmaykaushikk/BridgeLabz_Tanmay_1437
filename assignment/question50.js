function helper(n) {
  const numbers = new Set();

  while (numbers.size < n) {
    const randomNumber = Math.floor(Math.random() * n) + 1;
    numbers.add(randomNumber);
  }
  return Array.from(numbers);
}

const n = 5;
const result = helper(n);
console.log(result);
