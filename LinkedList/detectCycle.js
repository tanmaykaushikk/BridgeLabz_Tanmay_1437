import { Node, LinkedList } from "./linkedlistimplementation.js";

let ll = new LinkedList();
ll.add(50);
ll.add(60);
ll.add(70);
ll.add(80);
let last = ll.add(90);
last.next = ll.head;


function hasCycle(head){
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast) return true;
    }
    return false;
}

console.log(hasCycle(ll.head));


