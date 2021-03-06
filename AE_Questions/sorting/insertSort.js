/*
Insertion Sort
Write a function that takes in an array of integers and returns a sorted version of that array.
Use the insertion Sort algorithm to sort the array.

Sample Input
array = [8, 5, 2, 9, 5, 6, 3]

Sample Output
[2, 3, 5, 5, 6, 8, 9]
*/

function insertionSort(array){
    for(let i = 1; i < array.length;i++){
        let j = i
        while(j > 0 && array[j] < array[j - 1]){
            swap(array, j, j - 1)
            j--
        }
    }
    return array
}

const swap = (arr, i, j) => {
	[arr[i], arr[j]] = [arr[j], arr[i]]
}