/*
Remove Kth Node From The End
Write a fucntion that takes in the head of a Singly Linked List and an integer K and removes the kth node from the end
of the list.

The removal should be done in place, meaning that the original data structure should be mutated (no new structure should
be created).

Furthermore, the input head of the linked list should remain the head of the linked list after the removal is done, even
if the head is the node that's suppose to be removed, your function should simply mutate its value and next pointer.

Note that your function doesn't need to return anything. 

You can assume that the input Linked List will always have at least two nodes and, more specifically, at least k nodes.
*/

class LinkedList {
    constructor(value){
        this.value = value
        this.next = null
    }
}

function removeKthNodeFromEnd(head, k){
	let counter = 1
	let first = head
	let second = head
	while(counter <= k){
		second = second.next
		counter++
	}
	if(second === null){
		head.value = head.next.value
		head.next = head.next.next
		return
	}
	while(second.next !== null){
		second = second.next
		first = first.next
	}
	first.next = first.next.next
}