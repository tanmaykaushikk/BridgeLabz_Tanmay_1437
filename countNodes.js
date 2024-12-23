class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class Tree {
    constructor(){
        this.root = null;
    }

    add(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while(true){
            if(value === current.value);
            if(value < current.value){
                if(!current.left){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }else{
                if(!current.right){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    countNodes(node = this.root){
        if(!node) return 0;

        return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }
}


const t = new Tree();
t.add(10);
t.add(15);
t.add(20);
t.add(25);
t.add(30);
t.add(35);
t.add(40);

console.log(t.countNodes());