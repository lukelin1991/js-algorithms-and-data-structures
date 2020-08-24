/*
Min Heap Construction
Implement a MinHeap class that supports:
    - Building a Min Heap from an input array of integers.
    - Inserting integers in the heap.
    - Removing the heap's minimum/root value.
    - Peeking at the heap's minimum/root value.
    - Sifting integers up and down the heap, which is to be used when inserting and removing values.

    node -> i
    childLeft -> 2i + 1
    childRight -> 2i + 2
*/

class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    buildHeap(array) {
        let firstParentIdx = Math.floor((array.length - 2) / 2)
        for(let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--){
            this.siftDown(currentIdx, array.length - 1, array)
        }
        return array
    }

    siftDown(currentIdx, endIdx, heap) {
        let childOneIdx = currentIdx * 2 + 1
        while(childOneIdx <= endIdx){
            let childTwoIdx = currentIdx * 2 + 2 <= endIdx? currentIdx * 2 + 2 : -1
            let idxToSwap
            if(childTwoIdx !== - 1 && heap[childTwoIdx] < heap[childOneIdx]){
                idxToSwap = childTwoIdx
            } else {
                idxToSwap = childOneIdx
            }
            if(heap[idxToSwap] < heap[currentIdx]){
                this.swap(heap, currentIdx, idxToSwap)
                currentIdx = idxToSwap
                childOneIdx = currentIdx * 2 + 1
            } else {
                return
            }
        }
    }

    siftUp(currentIdx, heap) {
        let parentIdx = Math.floor((currentIdx - 1) / 2)
        while(currentIdx > 0 && heap[currentIdx] < heap[parentIdx]){
            this.swap(heap, currentIdx, parentIdx)
            currentIdx = parentIdx
            parentIdx = Math.floor((currentIdx - 1) / 2)
        }
    }

    peek() {
        return this.heap[0]
    }

    remove() {
        this.swap(this.heap, 0, this.heap.length - 1)
        let valueToRemove = this.heap.pop()
        this.siftDown(0, this.heap.length - 1, this.heap)
        return valueToRemove
    }

    insert(value) {
        this.heap.push(value)
        this.siftUp(this.heap.length - 1, this.heap)
    }
    swap = (heap, i, j) => {
        [heap[i], heap[j]] = [heap[j], heap[i]]
    }
}