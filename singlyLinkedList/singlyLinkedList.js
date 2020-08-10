/*
pushing pseudocode
this function should accept a value
create a new node using the value passed to the function
if there is no head property on the list, set the head and tail to the newly created node
otherwise set the next property on the tail to be the new node and set the tail property on the list to be
the newly created node
increment the length by one
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
}

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

let list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")