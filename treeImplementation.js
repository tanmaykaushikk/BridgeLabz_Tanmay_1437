class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }

    add(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        }else{
            this.addRecursive(this.root,newNode);
        }
    }

    addRecursive(node,newNode){
        if(newNode.value < newNode){
            if(node.value === null){
                node.left = newNode;
            }else{
                this.addRecursive(node.left,newNode);
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.addRecursive(node.right,newNode);
            }
        }
    }

    search(value){
        return this.searchRecursive(this.root,value);
    }

    searchRecursive(node,value){
        if(node === null){
            return false;
        }
        if(node.value === value){
            return true;
        }
        if(value<node.value){
            return this.searchRecursive(node.left,value);
        }else{
            return this.searchRecursive(node.right,value);
        }
    }

    inorderTraversal(){
        const result = [];
        this.inorderTraversalRecursive(this.root,result);
        return result;
    }

    inorderTraversalRecursive(node,result){
        if(node != null){
            this.inorderTraversalRecursive(node.left,result);
            result.push(node.value);
            this.inorderTraversalRecursive(node.right,result);
        }
    }

    preorderTraversal(){
        const result = [];
        this.preorderTraversalRecursive(this.root,result);
        return result;
    }

    preorderTraversalRecursive(node,result){
        if(node != null){
            result.push(node.value);
            this.preorderTraversalRecursive(node.left,result);
            this.preorderTraversalRecursive(node.right,result);
        }
    }


    postorderTraversal(){
        const result  = [];
        this.postorderTraversalRecursive(node.left,result);
        this.postorderTraversalRecursive(node.right,result);
        result.push(node.value);
    }
}



