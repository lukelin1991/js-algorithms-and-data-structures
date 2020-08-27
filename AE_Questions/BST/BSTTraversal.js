/*
BST Traversal
Write three functions that take in a BST and an empty array, traverse the BST, and add its nodes' values to the
input array, and return that array.  The three functions should traverse the BST using the in-order, pre-order,
and post-order tree traversal techniques respectively.
*/

function inOrderTraverse(tree, array) {
    if(tree !== null){
        inOrderTraverse(tree.left, array)
        array.push(tree.value)
        inOrderTraverse(tree.right, array)
    }
    return array
}

function preOrderTraverse(tree, array) {
    if(tree !== null){
        array.push(tree.value)
        preOrderTraverse(tree.left, array)
        preOrderTraverse(tree.right, array)
    }
    return array
}

function postOrderTraverse(tree, array) {
    if(tree !== null){
        postOrderTraverse(tree.left, array)
        postOrderTraverse(tree.right, array)
        array.push(tree.value)
    }
    return array
}
