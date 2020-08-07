/*
Pivot Pseudocode
it will help to accept 3 arguments: an arr, a starting index, and an end index (these can default
to 0 and the array length minus 1, respectively)
Grab the pivot from the start of the array.
Store the current pivot index in a variable( this will keep track of where the pivot should end up)
Loop through the array from the start until the end
    if the pivot is greater than the current element, increment the pivot index var and then
    swap the current element with the element at the pivot index.
swap the starting element(i.e. the pivot) with the pivot index.
return the pivot index
*/

function pivot(arr, start = 0, end = arr.length -1 ){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    
    let pivotpoint = arr[start]
    let swapIdx = start

    for(let i = start + 1; i < arr.length; i++){
        if(pivotPoint > arr[i]){
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

//pivot([4, 8, 2, 1, 5, 7, 6, 3])