/*
Validate BST
Write a function that takes in a potentially invalid BST and returns a boolean representing whether the BST
is valid. 

Each BST node has an integer value, a left child node, and a right child node.  A node is said to be a valid BST
node if and only if it satisfies the BST property: value > left side nodes, value < right side nodes.
children nodes are either valid BST nodes or null.

A BST is valid if and only if all of its nodes are valid BST nodes.
*/

class BST {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

function validateBst(tree){
    return isValid(tree, -Infinity, Infinity)
}

function isValid(tree, min, max){
    if(tree === null) return true
    if(tree.value < min || tree.value >= max) return false
    let leftValid = isValid(tree.left, min, tree.value)
    let rightValid = isValid(tree.right, tree.value, max)
    return leftValid && rightValid
}