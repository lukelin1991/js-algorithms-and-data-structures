/*
*/

function reverseLinkedList(head){
    let node = head
	let prevNode = null
	while(node !== null){
			let nextNode = node.next
			node.next = prevNode
			prevNode = node
			node = nextNode
	}
	return prevNode
}