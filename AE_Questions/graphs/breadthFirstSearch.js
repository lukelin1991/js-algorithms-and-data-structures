/*
Breadth-first Search
You're given a node class that has a name and an array of optional children nodes. When put together, the nodes form
an acyclic tree-like structure.

Implement the breadthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using
the Breadth-first Search approach (specifically navigating the tree from left to right), stores all of the nodes' 
names in the input array, and returns it.

O(v + e) time | O(v) space
*/

class Node {
    constructor(name){
        this.name = name
        this.children = []
    }
    addChild(name){
        this.children.push(new Node(name))
        return this
    }
    breadthFirstSearch(array){
        let queue = [this]
		while(queue.length > 0){
			let current = queue.shift()
			array.push(current.name)
			for(let child of current.children){
				queue.push(child)
			}
		}
		return array
    }
}