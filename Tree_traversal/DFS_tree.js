/*
DFS - PreOrder
create a variable to store the values of nodes visited
store the root of theBST in a variable called current
write a helper function which accepts a node
    - push the value of the node to the variable that stores the values
    - if the node has a left property, call the helper function with the left property on the node
    - if the node has a right property, call the helper function with the right property on the node
Invoke the helper function with the current variable
return the array of values

DFS - PostOrder
create a variable to store the values of nodes visited
store the root of the BST in a variable called current
write a helper function which accepts a node
    - If the node has a left property, call the helper function with the left property on the node
    - if the node has a right property, call the helper function with the right property on the node
    - push the value of the node to the variable that stores the values
    - invoke the helper function with the current variable.
return the array of values

DFS - InOrder
create a variable to store the values of nodes visited
store the root of the BST in a variable called current
write a helper function which accepts a node
    - if the node has a left property, call the helper function with the left property on the node
    - push the value of the node to the variable that stores the values
    - if the node has a right property, call the helper function with the right property on the node
Invoke the helper function with the current variable.
*/

class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }
    insert(value){
        let newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
            return this
        }
        let current = this.root
        while(true){
            if(value === current.value) return undefined;

            if(value < current.value){
                if(current.left === null){
                    current.left = newNode
                    return this
                }
                current = current.left

            } else if(value > current.value){
                if(current.right === null){
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }
    find(value){
        if(this.root === null) return false
        let current = this.root,
            found = false
        while(current && !found){
            if(value < current.value){
                current = current.left
            } else if(value > current.value){
                current = current.right
            } else {
                found = true
            }
        }
        if(!found) return undefined
        return current
    }
    contains(value){
        if(this.root === null) return false
        let current = this.root,
            found = false
        while(current && !found){
            if(value < current.value){
                current = current.left
            } else if(value > current.value){
                current = current.right
            } else {
                return true
            }
        }
        return false
    }
    BFS(){
        let data = []
        let queue = []
        let node = this.root

        queue.push(this.root)
        while(queue.length){
            node = queue.shift()
            data.push(node.value) // use node.value to find the element/value of the node.
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data
    }
    DFSPreOrder(){
        let data = []

        function traverse(node){
            data.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }
    DFSPostOrder(){
        let data = []

        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(this.root)
        return data
    }
    DFSInOrder(){
        let data = []

        function traverse(node){
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }
}