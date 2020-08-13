/*
pushing pseudocode
the function should accept a value
create a new node with that value
if there are no nodes in the stack, set the first and last property to be the newly created node
if there is at least one node, create a variable that stores the current first property on the stack
reset the first property to be the newly created node
set the next property on the node to be the previously created variable
increment the size of the stack by 1
*/

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    push(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }
}