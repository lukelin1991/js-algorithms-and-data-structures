/* 
called enqueue & dequeue.
enqueue pseudocode
This function accepts some value
create a new node using that value passed to the function
if there are no nodes in the queue, set this node to be the first and last property of the queue
otherwise, set the next property on the current last to be that node,
and then set the last property of the queue to be that node.
increment by 1

dequeue pseudocode
If there is no first property, just return null
store the first property in a variable
see if the first is the same as the last (check if there is only 1 node).
If so, set the first and last to be null
If there is more than 1 node, set the first property to be the next property of the first. 
degrement the size by 1.
*/
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    dequeue(){
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