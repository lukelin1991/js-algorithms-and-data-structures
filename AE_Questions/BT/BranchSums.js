/*
Branch Sums
Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum
to rightmost branch sum.

A branch sum is the sum of all values in a Binary Tree branch.  A Binary Tree branch is a path of nodes in a tree that
starts at the root node and ends at any leaf node.

Each BinaryTree node has an integer value, left child node, & right child node.  Children nodes can either be BinaryTree
nodes themselves or none/null.
*/

class BinaryTree {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

function branchSums(root){
	let sums = []
	calculateSums(root, 0, sums)
	return sums
}

function calculateSums(node, runningSum, sums){
	if(!node) return // if node dont exist
	
	let newRunningSum = runningSum + node.value
	if(!node.left && !node.right){ // if no children left.
		sums.push(newRunningSum)
		return
	}
	calculateSums(node.left, runningSum, sums)
	calculateSums(node.right, runningSum, sums)
}