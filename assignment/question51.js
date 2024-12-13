function letterFrequency(str) {
  const frequency = {};
  for (let char of str) {
    if (char !== " ") {
      frequency[char] = (frequency[char] || 0) + 1;
    }
  }
  return Object.entries(frequency);
}

const string = "hello world";
const result = letterFrequency(string);
console.log(result);
