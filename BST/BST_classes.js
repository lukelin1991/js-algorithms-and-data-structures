/*
inserting a node
create a new node
starting at the root
    - check if there is a root, if not - the root now becomes that new node!
    - if there is a root, check if the value of the new node is greater than or less than the value of the root
    - if it is greater
        - Check to see if there is a node to the right
            - if there is, move to that node & repeat these steps
            - if there is not, add that node as the right property
    - if it is less
        - Check to see if there is a node to the left
            - if there is, move to that node and repeat these steps
            - if there is not, add that node as the left property

finding node
start at root
    check if theres a root, if not we're done searching!
    if there is a root, check if the value of the new node is the value we're looking for.
    if we found it, we're done!
    if not, check to see if the value is greater than or less than the value of root.
    if its greater
        - check to see if theres a node to the right
            - if there is, move to that node & repeat these steps
            - if not, we're done searching!
    if it is less
        - check to see if there is a node to the left
            - if there is, move to that node & repeat steps
            - if there is not, we're done searching!
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
}

let tree = new BinarySearchTree();
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
this.root.left.right = new Node(9)