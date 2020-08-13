/*
pushing pseudocode
the function should accept a value
create a new node with that value
if there are no nodes in the stack, set the first and last property to be the newly created node
if there is at least one node, create a variable that stores the current first property on the stack
reset the first property to be the newly created node
set the next property on the node to be the previously created variable
increment the size of the stack by 1

pop pseudocode
if there are no nodes in the stack, return null
create a temporary variable to store the first property on the stack
if there is only 1 node, set the first and last property to be null
if there is more than one node, set the first property to be the next property on the current first
decrement the size by 1
return the value of the node removed

Big O of Stacks
insertion - O(1)
removal - O(1)
Searching - O(n)
access - O(n)
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
    pop(){
        if(!this.first) return null
        let temp = this.first
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}