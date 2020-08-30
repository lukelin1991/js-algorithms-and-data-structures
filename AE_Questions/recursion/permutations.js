/*
Permutations
Write a function that takes in an array of unique integers and returns an array of all permutations of those
integers in no particular order.

If the input array is empty, the function should return an empty array.

Sample input
array = [1, 2, 3]

Sample Output
[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
*/

function getPermutations(array){
    let permutations = []
	helper(0, array,permutations)
	return permutations
}

function helper(i, array, permutations){
	if(i === array.length - 1){
		permutations.push(array.slice())
	} else {
		for(let j = i; j < array.length; j++){
			swap(array, i, j);
			helper(i + 1, array, permutations)
			swap(array, i, j)
		}
	}
}

let swap = (arr, i, j) => {
	[arr[i], arr[j]] = [arr[j], arr[i]]
}