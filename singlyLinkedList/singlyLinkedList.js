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

insert pseudocode
if the index is less than zero or greater than the length, return false.
if the index is the same as the length, push a new node to the end of the list.
if the index is 0, unshift a new node to the start of the list.
otherwise, using the get method, access the node at the index - 1
set the next property on that node to be the new node
set the next property on the new node to be the previous next
increment the length
return true

remove pseudocode
if the idnex is less than zero or greater than the length, return undefined
if the index is the same as length-1, pop
if the index is 0, shift
otherwise, using the get method, access the node at the index - 1
set the next property on that node to be the next of the next node.
decrement the length
return the value of the node removed

reverse pseudocode
swap head and tail
create a variable called next
create a variable called prev
create a variable called node and initialize it to the head property
loop through the list
set next to be the next property on whatever node is
set the next property on the node to be whatever prev is
set prev to be the value of the node variable
set the node variable to be the value of the next variable

Big O of singly linked lists
insertion - O(1)
removal - depends O(1) or O(n)
searching - O(n)
access - O(n)
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
    insert(index, val){
        if(index < 0 || index > this.length) return false
        if(index === this.length) return !!this.push(val)
        if(index === 0) return !!this.unshift(val)
        let newNode = new Node(val)
        let prev = this.get(index - 1)
        let temp = prev.next
        prev.next = newNode
        newNode.next = temp
        this.length++
        return true
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop();
        let prevNode = this.get(index - 1)
        let removed = prevNode.next
        prevNode.next = removed.next
        this.length--

        return removed
    }
    print(){
        let arr = []
        let current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next
        let prev = null
        for(let i = 0; i < this.length; i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
}

let list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")