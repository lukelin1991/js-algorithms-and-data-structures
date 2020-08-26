/*
BST Construction
Write a BST class for a Binary Search Tree.  The class should support:
    - inserting values with the insert method
    - Removing values with the remove method; this method should only remove the first instance of a given
    value
    - Searching for values with the contains method.

Note that you can't remove values from a single-node tree.  In other words, calling the remove method on a 
single-node tree should simply not do anything.

Each BST node has an integer value, left & right child node.  Node is said to be a valid BST node if
and only if it satisfies BST property: value is strictly greater than the values of every node to its left
and smaller to every node values to its right. Either children node are either valid BST or none/null.
*/

class BST {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
    insert(value) {
        let currentNode = this
        while(true){
            if(value < currentNode.value){
                if(currentNode.left === null){
                    currentNode.left = new BST(value)
                    break
                } else {
                    currentNode = currentNode.left
                }
            } else {
                if(currentNode.right === null){
                    currentNode.right = new BST(value)
                    break
                } else {
                    currentNode = currentNode.right
                }
            }
        }
        return this
    }

    contains(value) {
        let currentNode = this
        while(currentNode !== null){
            if(value < currentNode.value){
                currentNode = currentNode.left
            } else if (value > currentNode.value){
                currentNode = currentNode.right
            } else {
                return true
            }
        }
        return false
    }

    remove(value, parentNode = null) {
        let currentNode = this
        while(currentNode !== null){
            if(value < currentNode.value){
                parentNode = currentNode
                currentNode = currentNode.left
            } else if (value > currentNode.value){
                parentNode = currentNode
                currentNode = currentNode.right
            } else {
                if(currentNode.left !== null && currentNode.right !== null){
                    currentNode.value = currentNode.right.getMinValue()
                    currentNode.right.remove(currentNode.value, currentNode)
                } else if (parentNode === null){
                    if(currentNode.left !== null){
                        currentNode.value = currentNode.left.value
                        currentNode.right = currentNode.left.right
                        currentNode.left = currentNode.left.left
                    } else if(currentNode.right !== null){
                        currentNode.value = currentNode.right.value
                        currentNode.left = currentNode.right.left
                        currentNode.right = currentNode.right.right
                    }
                } else if(parentNode.left === currentNode){
                    parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right
                } else if (parentNode.right === currentNode){
                    parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right
                }
                break
            }
        }
    return this;
    }
        
    getMinValue(){
        let currentNode = this
        while(currentNode.left !== null){
            currentNode = currentNode.left
        }
        return currentNode.value
    }
}