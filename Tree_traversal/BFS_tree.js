/*
create a queue (this can be an array) and a variable to store the values of nodes visited
Place the root node in the queue
loop as long as there is anything in the queue
    - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    - if there is a left property on the node dequeued - add it to the queue
    - if there is a right property on the node dequeued - add it to the queue
return the variable that stores all of our values
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
            data.push(node) // use node.value to find the element/value of the node.
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data
    }
}