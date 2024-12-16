// class Stack {
//   arr = [];

//   push(val) {
//     this.arr.push(val);
//   }
//   pop() {
//     this.arr.pop();
//   }
//   peek() {
//     return this.arr[this.arr.length - 1];
//   }
//   empty() {
//     if (this.arr.length === 0) {
//       return true;
//     }
//     return false;
//   }
//   size() {
//     return this.arr.length;
//   }
//   print() {
//     console.log(this.arr);
//   }
// }

// let st = new Stack();
// console.log(st.empty());
// st.push(5);
// st.push(6);
// st.push(7);
// st.push(8);
// st.print();
// console.log(st.size());
// st.pop();
// st.pop();
// console.log(st.peek());

//---------------------------------------------------------------------



class Stack{   
    constructor(capasity){
        this.capasity = capasity;
        this.arr=[];
    }

    push(val){
        if(this.arr.length == this.capasity){
            console.log("Stack Overflow")
            return;
        }
        this.arr.push(val);
    }

    pop(){
        if(this.arr.length == 0){
            console.log("error stack is empty")
            return;
        }
        this.arr.pop();
    }

    peek(){
        if(this.arr.length === 0){
            console.log("stack is empty");
        }
        console.log(this.arr[this.arr.length-1]);
    }

    isempty(){
        if(this.arr.length === 0){
            console.log(true);
        }
        console.log(false);
    }

    size(){
        console.log(this.arr.length);
    }

    print(){
        console.log(this.arr);
    }
}

class st extends Stack{
    constructor(cap, len){
        super(cap);
        this.len=len;
    }

    print(){
        console.log(this.capasity, this.len);
    }
}

// let s=new st(3, 7);
// s.print();

class bt extends st{
    constructor(c){
        super(c);
    }

    print(){
        console.log(this.cap);
    }
}

let b=new st(3);
b.print();

// const st = new Stack();
// st.pop();
// st.push(5);
// st.push(6);
// st.push(7);
// st.push(8);
// st.print();
// st.size();
// st.pop();
// st.pop();
// st.pop();
// st.isempty();
// st.print();
// st.peek();