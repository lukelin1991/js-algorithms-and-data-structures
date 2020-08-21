/*
Bubble Sort - sort by max element
Write a function that takes in an array of integers and returns a sorted version of that array.
Use the Bubble Sort algorithm to sort the array.

Sample Input
array = [8, 5, 2, 9, 5, 6, 3]

Sample Output
[2, 3, 5, 5, 6, 8, 9]
*/

function bubbleSort(array){
    let noSwaps;
	for(let i = array.length; i > 0;i--){
        noSwaps = true;
        for(let j = 0;j < i-1 ; j++){
            if(array[j] > array[j+1]){
                swap(array, j, j+1)
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return array
}

const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}