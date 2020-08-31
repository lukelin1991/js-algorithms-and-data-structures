/*
Node Depths
The distance between a node in a Binary Tree and the tree's root is called the node's depth.

Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.
*/

function nodeDepths(root){
    if(root === null) return 0
	return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}

class BinaryTree {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}