const input = "1,2,3,4,5";
const ans = helper(input);
console.log(ans);

function helper(input) {
  const number = input.split(",").map(Number);
  const valid = number.filter((num) => !isNaN(num));
  const sum = valid.reduce((acc, curr) => acc + curr, 0);
  return sum;
}
