class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while(true){
            if(value < current.left){
                if(!current.left){
                    current.left = newNode;
                    return;
                }
                current = current.left;
            }
            else{
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }   
}

function arraytobst(arr){
    const bst = new BinarySearchTree();
    for (let value of arr) {
        bst.insert(value);
    }
    return bst.root;
}


const arr = [1,2,3,4,5];
const result = arraytobst(arr);
console.log(result);



