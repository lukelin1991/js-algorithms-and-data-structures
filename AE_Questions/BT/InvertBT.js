/*
Invert Binary Tree
Write a function that takes in a Binary Tree and inverts it.  In other words, the function should swap every left node
in the tree for its corresponding right node.
*/

function invertBinaryTree(tree){
	if(tree === null) return 
	treeSwap(tree)
	invertBinaryTree(tree.left)
	invertBinaryTree(tree.right)
}

function treeSwap(tree){
	let left = tree.left
	tree.left = tree.right
	tree.right = left
}

class BinaryTree {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}