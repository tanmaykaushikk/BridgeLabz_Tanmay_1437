class Stack {
  constructor() {
    this.arr = [];
  }

  push(value) {
    this.arr.push(value);
    return null;
  }

  getMin() {
    let min = Number.MAX_VALUE;
    this.arr.forEach((num) => {
      min = Math.min(num, min);
    });
    return min;
  }

  pop() {
    return null;
  }

  getMax() {
    let max = Number.MIN_VALUE;
    this.arr.forEach((num) => {
      max = Math.max(num, max);
    });
    return max;
  }

  rangeMinMax(minVal, maxVal) {
    let mini = Number.MAX_VALUE;
    let maxi = Number.MIN_VALUE;

    this.arr.forEach((num) => {
      if (num >= minVal && num <= maxVal) {
        mini = Math.min(num, mini);
        maxi = Math.max(num, maxi);
      }
    });

    return { Minimum: mini, Maximum: maxi };
  }

  average() {
    let sum = 0;
    this.arr.forEach((num) => {
      sum += num;
    });
    let avg = sum / this.arr.length;
    return avg;
  }
}

const st = new Stack();
const ans = [
  st.push(5),
  st.push(2),
  st.getMin(),
  st.push(5),
  st.push(4),
  st.push(6),
  st.push(7),
  st.push(8),
  st.push(9),
  st.pop(),
  st.getMax(),
  st.average(),
  st.rangeMinMax(1, 12),
];
console.log(ans);
