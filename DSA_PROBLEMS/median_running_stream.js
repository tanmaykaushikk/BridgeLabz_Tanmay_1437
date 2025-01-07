class MedianFinder {
    constructor() {
      this.lowerHalf = new MaxHeap(); // Max-heap for the lower half
      this.upperHalf = new MinHeap(); // Min-heap for the upper half
    }
  
    add(num) {
      if (this.lowerHalf.size() === 0 || num <= this.lowerHalf.peek()) {
        this.lowerHalf.insert(num);
      } else {
        this.upperHalf.insert(num);
      }
  
      // Balance the heaps
      if (this.lowerHalf.size() > this.upperHalf.size() + 1) {
        this.upperHalf.insert(this.lowerHalf.extract());
      } else if (this.upperHalf.size() > this.lowerHalf.size()) {
        this.lowerHalf.insert(this.upperHalf.extract());
      }
    }
  
    getMedian() {
      if (this.lowerHalf.size() > this.upperHalf.size()) {
        return this.lowerHalf.peek();
      } else {
        return (this.lowerHalf.peek() + this.upperHalf.peek()) / 2;
      }
    }
  }
  
  // Helper class for max-heap
  class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    size() {
      return this.heap.length;
    }
  
    peek() {
      return this.heap[0];
    }
  
    insert(val) {
      this.heap.push(val);
      this.bubbleUp();
    }
  
    extract() {
      if (this.size() === 1) return this.heap.pop();
      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
      return max;
    }
  
    bubbleUp() {
      let index = this.size() - 1;
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[index] <= this.heap[parentIndex]) break;
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      }
    }
  
    bubbleDown() {
      let index = 0;
      const length = this.size();
      while (true) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let largest = index;
  
        if (left < length && this.heap[left] > this.heap[largest]) largest = left;
        if (right < length && this.heap[right] > this.heap[largest]) largest = right;
  
        if (largest === index) break;
        [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
        index = largest;
      }
    }
  }
  
  // Helper class for min-heap
  class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    size() {
      return this.heap.length;
    }
  
    peek() {
      return this.heap[0];
    }
  
    insert(val) {
      this.heap.push(val);
      this.bubbleUp();
    }
  
    extract() {
      if (this.size() === 1) return this.heap.pop();
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
      return min;
    }
  
    bubbleUp() {
      let index = this.size() - 1;
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[index] >= this.heap[parentIndex]) break;
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      }
    }
  
    bubbleDown() {
      let index = 0;
      const length = this.size();
      while (true) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let smallest = index;
  
        if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
        if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;
  
        if (smallest === index) break;
        [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
        index = smallest;
      }
    }
  }
  

  const medianFinder = new MedianFinder();
  const stream = [6, 10, 2, 8, 4, 12];
  const operations = [
    { op: "add", val: 6 },
    { op: "add", val: 10 },
    { op: "getMedian" },
    { op: "add", val: 2 },
    { op: "add", val: 8 },
    { op: "getMedian" },
    { op: "add", val: 4 },
    { op: "add", val: 12 },
    { op: "getMedian" }
  ];
  
  for (const { op, val } of operations) {
    if (op === "add") {
      medianFinder.add(val);
      console.log(`After add(${val}): Median = ${medianFinder.getMedian()}`);
    } else if (op === "getMedian") {
      console.log(`Median = ${medianFinder.getMedian()}`);
    }
  }
  