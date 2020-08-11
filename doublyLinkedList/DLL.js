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

shifting pseudocode
if length is 0, return undefined
store the current head property in a value (we'll call oldHead)
if the length is 1
set head to be null & tail to be null
update the head to be the next of the old head
set the head's prev property to null
set the old head's next to null
decrement the length
return old head

unshift pseudocode
create a new node with the value passed to the function
if the length is 0, set head & tail to be the new node.
otherwise, set prev property on the head of the list to be the new node.
set the next property on the new node to be the head property
update the head to be the new node
increment the length
return the list

get pseudocode
if the index is less than 0 or greater or equal to the length, return null
if the index is less than or equal to half the length of the list,
    - loop through the list starting from the head and loop towards the middle
    - return the node once it is found
if the index is greater than half the length of the list
    - loop through the list starting from the tail and loop towards the middle
    - return the node once it is found.

set pseudocode
create a variable which is the result of the get method at the index passed to the function
if the get method returns a valid node, set the value of that node to be the value passed to the function
return true
otherwise, return false.

insert pseudocode
if the index is less than 0 or greater than or equal to the length returning false
if the index is 0, unshift
if the index is the same as the length, push
use the get method to access the index - 1
set the next and prev properties on the correct nodes to link everything together
increment the length
return true
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
    shift(){
        if(this.length === 0) return undefined
        let oldHead = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }
    unshift(val){
        let newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index){
        if(index < 0 || idnex >= this.length) return null
        let count, current
        if(index <= this.length/2){
            count = 0
            current = this.head
            while(count !== index){
                current = current.next
                count++
            }
        } else {
            count = this.length - 1
            current = this.tail
            while(count !== index){
                current = current.prev
                count--
            }
        }
        return current
    }
    set(index, val){
        let foundNode = this.get(index)
        if(!foundNode){
            foundNode.val = val
            return true
        }
        return false
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false
        if(index === 0) return this.unshift(val)
        if(index === this.length) return this.push(val)
        let newNode = new Node(val)
        let beforeNode = this.get(index - 1)
        let afterNode = beforeNode.next
        beforeNode.next = newNode
        newNode.prev = beforeNode
        newNode.next = afterNode
        afterNode.prev = newNode
        this.length--
        return true
    }
}