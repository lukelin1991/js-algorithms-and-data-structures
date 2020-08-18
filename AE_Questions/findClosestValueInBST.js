/*
Write a function that takes in a BST, and a target integer value and returns the closest value to that
target value contained in the BST.

You can assume that there will only be one closest value.
*/

function findClosestValueInBst(tree, target){
    return findClosestValHelper(tree, target, tree.value)
}

function findClosestValHelper(tree, target, closest){
	if(tree === null) return closest; // base case
	
	if(Math.abs(target - closest) > Math.abs(target - tree.value)){
		closest = tree.value
	}
	if(target < tree.value){
		return findClosestValHelper(tree.left, target, closest)
	} else if(target > tree.value){
		return findClosestValHelper(tree.right, target, closest)
	} else {
		return closest
	}
}

class BST {
    constructor(value){
        this.value = value;
        this.left = null
        this.right = null
    }
}