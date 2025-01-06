class FrequencyStack {
    constructor() {
      this.freqMap = new Map(); 
      this.groupMap = new Map(); 
      this.maxFreq = 0; 
    }
  
    push(val) {
      const freq = (this.freqMap.get(val) || 0) + 1;
      this.freqMap.set(val, freq);
 
      if (freq > this.maxFreq) {
        this.maxFreq = freq;
      }
  
     
      if (!this.groupMap.has(freq)) {
        this.groupMap.set(freq, []);
      }
      this.groupMap.get(freq).push(val);
    }
  
    pop() {
      
      const stack = this.groupMap.get(this.maxFreq);

      const val = stack.pop();
  
      this.freqMap.set(val, this.freqMap.get(val) - 1);
  
      if (stack.length === 0) {
        this.groupMap.delete(this.maxFreq);
        this.maxFreq--;
      }
      return val;
    }
  }


  const freqStack = new FrequencyStack();
  freqStack.push(5);
  freqStack.push(7);
  freqStack.push(5);
  freqStack.push(7);
  freqStack.push(4);
  freqStack.push(5);
  
  console.log(freqStack.pop()); // Output: 5
  console.log(freqStack.pop()); // Output: 7
  console.log(freqStack.pop()); // Output: 5
  console.log(freqStack.pop()); // Output: 4
  