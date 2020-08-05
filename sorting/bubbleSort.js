/*
create a function called bubbleSort, start looping from with a variable called i the end of
the array towards the beginning. (assuming its all numbers).
start an inner loop with a variable called j from the beginning til i - 1.
if arr[j] is greater than arr[j+1], swap those 2 values.
return the sorted array.

optimized with noSwaps variable. - if the sort is almost sorted completely, if there isn't any swaps.
it'll break.

Time Complexity - worst - O(n^2), best - O(n)
*/

function bubbleSort(arr){
    let noSwaps;
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for(let i = arr.length; i > 0;i--){
        noSwaps = true;
        for(let j = 0;j < i-1 ; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr
}