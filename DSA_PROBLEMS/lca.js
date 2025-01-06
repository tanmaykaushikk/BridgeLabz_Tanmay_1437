class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function lowestCommonAncestor(root, p, q) {
    if (!root) return null;
  
    // either p is lca or q is lca
    if (root.value === p || root.value === q) {
      return root;
    }
  
    // recurcively traverse to left and right side to find lca
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
  
    // if not the root may be lca
    if (left && right) {
      return root;
    }
  
    // return statement
    return left || right;
  }
  

  const root = new TreeNode(3);
  root.left = new TreeNode(5);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(6);
  root.left.right = new TreeNode(2);
  root.right.left = new TreeNode(0);
  root.right.right = new TreeNode(8);
  root.left.right.left = new TreeNode(7);
  root.left.right.right = new TreeNode(4);
  
  const p = 5;
  const q = 1;
  
  const lca = lowestCommonAncestor(root, p, q);
  
  console.log(`LCA: ${lca.value}`); 
  