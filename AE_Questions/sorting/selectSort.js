/*
Selection Sort - by minimum element
Write a function that takes in an array of integers and returns a sorted version of that array.
Use the Selection Sort algorithm to sort the array.

Sample Input
array = [8, 5, 2, 9, 5, 6, 3]

Sample Output
[2, 3, 5, 5, 6, 8, 9]
*/

function selectionSort(array){
    for(let i = 0; i < array.length;i++){
        let min = i
		for(let j = i + 1; j < array.length;j++){
			if(array[j] < array[min]) min = j
		}
		if(i !== min) swap(array, i, min)
    }
	return array
}

const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}