class Queue{
    constructor(capacity){
        this.capacity = capacity;
        this.arr = [];
    }

    enqueue(val){
        if(this.arr.length === this.capacity){
            throw new Error("queue overflow");
        }
        this.arr.push(val);
    }

    dequeue(){
        if(this.arr.length === 0){
            throw new Error("queue is empty");
        }
        this.arr.shift();
    }

    isempty(){
        if(this.arr.length === 0){
            return true;
        }
        return false;
    }

    size(){
        return this.arr.length;
    }

    print(){
        return this.arr;
    }
}


const q = new Queue(5);
q.enqueue(5);
q.enqueue(5);
q.enqueue(5);
q.enqueue(5);
console.log(q.print());
q.dequeue();
console.log(q.print());
console.log(q.size());
console.log(q.isempty());
