class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    createLoop(position) {
      if (!this.head) return;
      let loopNode = null;
      let current = this.head;
      let index = 0;
  
      while (current.next) {
        if (index === position) {
          loopNode = current;
        }
        current = current.next;
        index++;
      }
      current.next = loopNode; 
    }
  
    detectAndRemoveLoop() {
      let slow = this.head;
      let fast = this.head;
  
      
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
  
        if (slow === fast) {
          this.removeLoop(slow);
          return true;
        }
      }
      return false; 
    }
  
    removeLoop(loopNode) {
      let ptr1 = this.head;
      let ptr2 = loopNode;
  
      // Find the start of the loop
      while (ptr1.next !== ptr2.next) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
      }
  
      // Break the loop
      ptr2.next = null;
    }
  
    printList() {
      let current = this.head;
      const result = [];
      while (current) {
        result.push(current.value);
        current = current.next;
      }
      console.log(result.join(" -> "));
    }
  }
  

  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.append(5);
  
  // Create a loop (5 -> 3)
  list.createLoop(2);
  
  console.log("Loop detected:", list.detectAndRemoveLoop()); 
  list.printList(); 