/*
create a function called selectionSort, store the first element as the smallest value.
compare this item to the next item in the array til you find a smaller number, save number to mininmum.
if a smaller number is found, designate that smaller number to be the new "minimum"
and continue until the end of the array.
If the "minimum" is not the value(index) you initially began with, swap the 2 values.
repeat this with the next element until the array is sorted.
*/

function selectionSort(arr){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for(let i = 0; i < arr.length; i++){
        let min = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(i !== min) swap(arr, i, min)
    }
     return arr
}

selectionSort([3, 6, 2, 7, -1, 34, 24])