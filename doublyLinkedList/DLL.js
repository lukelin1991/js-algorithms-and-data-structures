/*
pushing pseudocode
create a new node with the value passed to the function
if the head property is null set the head and tail to be the newly created node
if not, set the next property on the tail to be that node
set the previous property on the newly created node to be the tail
set the tail to be the newly created node

popping pseudocode
if there is no head, return undefined
store the current tail in a variable to return later
if the length is 1, set the head & tail to be null
update the tail to be the previous Node
set the newTail's next to be null
decrement the length
return the value removed


*/

class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        let newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(!this.head) return undefined
        let currentTail = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.tail = currentTail.prev
            this.tail.next = null
            currentTail.prev = null
        }
        this.length--
        return currentTail
    }
}