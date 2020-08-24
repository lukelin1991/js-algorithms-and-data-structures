/*
Heap Sort
Write a function that takes in an array of integers and returns a sorted
version of that array.  Use the Heap Sort algorithm to sort the array.

Sample Input
array = [8, 5, 2, 9, 5, 6, 3]

Sample Output
[2, 3, 5, 5, 6, 8, 9]
*/

function heapSort(array) {
    // Write your code here.
    buildMaxHeap(array)
    
    for(let i = array.length - 1; i > 0; i--){
        swap(array, 0, i)
        siftDown(array, 0, i - 1)
    }
    return array
}

function buildMaxHeap(array){
        let firstParentIdx = Math.floor((array.length - 1)/ 2)
        for(let idx = firstParentIdx; idx >= 0; idx--){
            siftDown(array, idx, array.length - 1)
        }
}

function siftDown(heap, currentIdx, endIdx){
    let childOneIdx = currentIdx * 2 + 1
    while(childOneIdx <= endIdx){
        let childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1
        let idxToSwap
        if(childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]){
            idxToSwap = childTwoIdx
        } else {
            idxToSwap = childOneIdx
        }
        
        if(heap[idxToSwap] > heap[currentIdx]){
            swap(heap, currentIdx, idxToSwap)
            currentIdx = idxToSwap
            childOneIdx = currentIdx * 2 + 1
        } else {
            return
        }
    }
}

const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
