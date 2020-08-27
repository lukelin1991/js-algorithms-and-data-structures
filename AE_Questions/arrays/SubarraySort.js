/*
Subarray Sort
Write a function that takes in an array of at least two integers and that returns an array of the starting and
ending indices of the smallest subarray in the input array that needs to be sorted in place in order for the
entire input array to be sorted (in ascending order).
If the input array is already sorted, the function should return [-1, -1]

Sample Input
array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]

Sample Output
[3, 9]
*/

function subarraySort(array){
    let unsortedMin = Infinity
	let unsortedMax = -Infinity
	for(let i = 0; i < array.length; i++){
		let num = array[i]
		if(isOutOfOrder(i, num, array)){
			unsortedMin = Math.min(unsortedMin, num)
			unsortedMax = Math.max(unsortedMax, num)
		}
	}
	if(unsortedMin === Infinity){
		return [-1, -1]
	}
	let subarrayLeftIdx = 0
	while(unsortedMin >= array[subarrayLeftIdx]){
		subarrayLeftIdx++
	}
	let subarrayRightIdx = array.length - 1
	while(unsortedMax <= array[subarrayRightIdx]){
		subarrayRightIdx--
	}
	return[subarrayLeftIdx, subarrayRightIdx]
}

function isOutOfOrder(i, num, array){
	if(i === 0) return num > array[i + 1]
	if(i === array.length - 1) return num < array[i - 1]
	return num > array[i + 1] || num < array[i - 1]
}