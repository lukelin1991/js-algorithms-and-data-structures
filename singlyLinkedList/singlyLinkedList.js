/*
pushing pseudocode
this function should accept a value
create a new node using the value passed to the function
if there is no head property on the list, set the head and tail to the newly created node
otherwise set the next property on the tail to be the new node and set the tail property on the list to be
the newly created node
increment the length by one

popping pseudocode
if there are no nodes in the list, return undefined
loop through the list until you reach the tail
set the next property of the 2nd to last node to be null
set the tail to be the 2nd to last node.
decrement the length of the list by 1
return the value of the node removed

shifting pseudocode
if there are no nodes, return undefined
store the current head property in a variable
set the head property to be the current head's next property
decrement the length by 1
return the value of the node removed

unshifting pseudocode
this function should accept a value
create a new node using the value passed to the function
if there is no head property on the list, set the head and tail to be the newly created node
otherwise set the newly created node's next property to be the current head property on the list
set the head property on the list to be that newly created node
increment the length of the list by 1
return the linked list

get pseudocode
this function should accept an index
if the index is less than zero or greater than or equal to the length of the list, return null
loop through the list until you reach the index and return the node at that specific index

set pseudocode
this function should accept a value and an index
use your get function to find the specific node.
if the node is not found, return false
if node is found, set the value of that node to be the value passed to the function and return true
*/

class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        let newNode = new Node(val)

        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    traverse(){
        let current = this.head
        while(current){
            console.log(current.val)
            current = current.next
        }
    }
    pop(){
        if(!this.head) return undefined
        let current = this.head;
        let newTail = current

        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }
    shift(){
        if(!this.head) return undefined

        let current = this.head;
        this.head = current.next
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index){
        if(index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while(counter !== index){
            current = current.next
            current++
        }
        return current
    }
    set(index, val){
        let foundNode = this.get(index)
        if(foundNode){
            foundNode.val = val
            return true
        }
        return false
    }
}

let list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")