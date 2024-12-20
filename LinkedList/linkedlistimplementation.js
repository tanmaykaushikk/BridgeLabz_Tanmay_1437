export class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

export class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(data){
        const newNode = new Node(data);
        if(this.head == null){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
        return newNode;
    }

    insertAt(data,index){
        if(index<0 || index>this.size){
            throw new Error("Index out of bound");
            return;
        }
        const newNode = new Node(data);
        if(index == 0){
            newNode.next = this.head;
        }else{
            let current = this.head;
            let prev = null;
            let count = 0;

            while(count<index){
                prev = current;
                current = current.next;
                count++;
            }
            newNode.next = current;
            prev.next = newNode;
        }
        this.size++;
    }

    remove(data){
        let current = this.head;
        let prev = null;

        while(current != null){
            if(current.data === data){
                if(prev === null){
                    this.head = current.next;
                }else{
                    prev.next = current.next;
                }
                this.size--;
                return;
            }
            prev = current;
            current = current.next;
        }
        console.log("Element not found");
    }


    print(){
        let current = this.head;
        let result = "";
        while(current != null){
            result+=current.data + " -> ";
            current=current.next;
        }
        result+="null";
        console.log(result);
    }

    getSize(){
        return this.size;
    }

    isempty(){
        return this.size === 0;
    }
}
