class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.data) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    search(value) {
        let current = this.root;
        while (current) {
            if (value === current.data) return true;
            current = value < current.data ? current.left : current.right;
        }
        return false;
    }

    inorderTraversal() {
        const result = [];
        (function traverse(node) {
            if (node) {
                traverse(node.left);
                result.push(node.data);
                traverse(node.right);
            }
        })(this.root);
        return result;
    }

    preorderTraversal() {
        const result = [];
        (function traverse(node) {
            if (node) {
                result.push(node.data);
                traverse(node.left);
                traverse(node.right);
            }
        })(this.root);
        return result;
    }

    postorderTraversal() {
        const result = [];
        (function traverse(node) {
            if (node) {
                traverse(node.left);
                traverse(node.right);
                result.push(node.data);
            }
        })(this.root);
        return result;
    }

    print() {
        if (!this.root) {
            console.log("Tree is empty");
            return;
        }

        const queue = [this.root];
        while (queue.length) {
            const { data, left, right } = queue.shift();
            console.log(data);
            if (left) queue.push(left);
            if (right) queue.push(right);
        }
    }
}


const tree = new Tree();
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(3);
tree.add(7);

console.log("Inorder:", tree.inorderTraversal());
console.log("Preorder:", tree.preorderTraversal());
console.log("Postorder:", tree.postorderTraversal());
console.log("Tree:");
tree.print();
