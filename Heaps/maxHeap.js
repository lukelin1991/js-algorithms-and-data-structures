/*
maxHeap pseudocode
push the value into the values property on the heap
Bubble up:
    - Create a variable called index which is the length of the values property - 1
    - create a variable called parentIndex which is the floor of (index - 1)/2
    - Keep looping as long as the values element at the parentIndex is less than the values element at the
child index
        - Swap the value of the values element at the parentIndex with the value of the element property at
    the child index
        - Set the index to be the parentIndex, and start over!

removing/extractMax pseudocode
swap the first value in the values property with the last one
pop from the values property, so you can return the value at the end.
Have the new root "sink down" to the correct spot...
    - Your parent index starts at 0 (the root)
    - find the index of the left child: 2 * idx + 1 (make sure it's not out of bounds)
    - find the index of the right child: 2*idx + 2 (make sure it's not out of bounds)
    - if the left or right child is greater than the element... swap.  if both left and right children are
larger, swap with the largest child.
    - the child index you swapped to now becomes the new parent index.
    - keep looping and swapping til neither child is larger than the element.
    return the old root!
*/

class MaxBinaryHeap {
    constructor(){
        this.values = []
    }
    insert(element){
        this.values.push(element)
        this.bubbleUp()
    }
    bubbleUp(){
        let idx = this.values.length - 1
        const element = this.values[idx]
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2)
            let parent = this.values[parentIdx]
            if(element <= parent) break
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }
    extractMax(){
        const max = this.values[0]
        const end = this.values.pop()
        this.values[0] = end
        // sink down
        this.sinkDown()
        return max
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length
        const element = this.values[0]
        while(true){
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChild
            let swap = null

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                if(leftChild > element){
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                if(
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
                ){
                    swap = rightChildIdx
                }
            }
            if(swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = elements
        }
    }
}

let heap = new MaxBinaryHeap()
heap.insert(55)