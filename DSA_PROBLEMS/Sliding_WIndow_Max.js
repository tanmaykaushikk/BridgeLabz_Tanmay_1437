function slidingWindowMaximum(arr, k) {
    const deque = []; 
    const result = []; 
  
    for (let i = 0; i < arr.length; i++) {
      if (deque.length && deque[0] < i - k + 1) {
        deque.shift();  // to remove the elements that are out of window
      }
  

      while (deque.length && arr[deque[deque.length - 1]] < arr[i]) {
        deque.pop(); // to remove the elements that are smaller than the elements
      }
  
      // add the element
      deque.push(i);
  
     // updating the result
      if (i >= k - 1) {
        result.push(arr[deque[0]]);
      }
    }
  
    return result;
  }
  

  const arr = [1, 3, -1, -3, 5, 3, 6, 7];
  const k = 3;

  console.log(slidingWindowMaximum(arr, k));
  