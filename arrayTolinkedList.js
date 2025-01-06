class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
    }

    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
}

function arraytoll(array){
    const ll = new LinkedList();
    for(let item of array){
        ll.append(item);
    }
    return ll;
}


const myArray = [1, 2, 3, 4, 5];
const linkedList = arraytoll(myArray);

function printLinkedList(list) {
    let current = list.head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}

printLinkedList(linkedList);
