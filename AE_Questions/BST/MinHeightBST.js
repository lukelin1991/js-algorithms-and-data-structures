/*
Min Height BST
Write a function that takes in a non-empty sorted array of distinct integers, constructs a BST from the integers,
and returns the root of the BST.

The function should minimize the height of the BST.

You've been provided with a BST class that you'll have to use to construct the BST.
valid BST === left child < value < right child. all across the board.

Sample Input
array = [1, 2, 5, 7, 10, 13, 14, 15, 22]
*/

function minHeightBst(array) {
    return makingMinHeightBST(array, 0, array.length - 1)
}
  
function makingMinHeightBST(array, start, end){
    if(end < start) return null
    let mid = Math.floor((start + end) / 2)
    let bst = new BST(array[mid])
    bst.left = makingMinHeightBST(array, start, mid - 1)
    bst.right = makingMinHeightBST(array, mid + 1, end)
    return bst
}
  
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }
    }
}