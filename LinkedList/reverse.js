import { Node, LinkedList } from "./linkedlistimplementation.js";

let ll = new LinkedList();
ll.add(50);
ll.add(60);
ll.add(70);
ll.add(80);
ll.add(90);
ll.print();

function reverse(head){
    let prev = null;
    let current = head;

    while(current){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

let reversedHead = reverse(ll.head);
let current = reversedHead;
let result = "";

while(current){
    result += current.data + " -> ";
    current = current.next;
}

result += "null";
console.log(result);