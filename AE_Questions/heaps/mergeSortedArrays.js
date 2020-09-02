/*
Write a function that takes in a non-empty list of non-empty sorted arrays of integers and returns a merged list of all
of those arrays.

The integers in the merged list should be in sorted order.

Sample Input
arrays = [
    [1, 5, 9, 21],
    [-1, 0],
    [-124, 81, 121],
    [3, 6, 12, 20, 150],
]

Sample output
[-124, -1, 0, 1, 3, 5, 6, 9, 12, 20, 21, 81, 121, 150]
*/

function mergeSortedArrays(arrays){
    let sortedList = []
	let smallestItems = []
	for(let idx = 0; idx < arrays.length; idx++){
		smallestItems.push({
			idx, 
			elementIdx: 0, 
			num: arrays[idx][0],
		})
	}
	const minHeap = new MinHeap(smallestItems)
	while(!minHeap.isEmpty()){
		let smallestItem = minHeap.remove()
		let {idx, elementIdx, num} = smallestItem
		sortedList.push(num)
		if(elementIdx === arrays[idx].length - 1) continue
		minHeap.insert({
			idx,
			elementIdx: elementIdx + 1,
			num: arrays[idx][elementIdx + 1]
		})
	}
	return sortedList
}

class MinHeap {
	constructor(array){
		this.heap = this.buildHeap(array)
	}
	isEmpty(){
		return this.heap.length === 0
	}
	buildHeap(array){
		let firstParentIdx = Math.floor((array.length - 2) / 2)
		for(let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--){
			this.siftDown(currentIdx, array.length - 1, array)
		}
		return array
	}
	siftDown(currentIdx, endIdx, heap){
		let childOneIdx = currentIdx * 2 + 1
		while(childOneIdx <= endIdx){
			let childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1
			let idxToSwap;
			if(childTwoIdx !== -1 && heap[childTwoIdx].num < heap[childOneIdx].num){
				idxToSwap = childTwoIdx
			} else {
				idxToSwap = childOneIdx
			}
			if (heap[idxToSwap].num < heap[currentIdx].num){
				this.swap(heap, currentIdx, idxToSwap)
				currentIdx = idxToSwap
				childOneIdx = currentIdx * 2 + 1
			} else {
				return
			}
		}
	}
	siftUp(currentIdx, heap){
		let parentIdx = Math.floor((currentIdx - 1) / 2)
		while(currentIdx > 0 && heap[currentIdx].num < heap[parentIdx].num){
			this.swap(heap, currentIdx, parentIdx)
			currentIdx = parentIdx
			parentIdx = Math.floor((currentIdx - 1) / 2)
		}
	}
	remove(){
		this.swap(this.heap, 0, this.heap.length - 1)
		let valueToRemove = this.heap.pop()
		this.siftDown(0, this.heap.length - 1, this.heap)
		return valueToRemove
	}
	insert(value){
		this.heap.push(value)
		this.siftUp(this.heap.length - 1, this.heap)
	}
	swap(heap, i, j){
		[heap[i], heap[j]] = [heap[j], heap[i]]
	}
}