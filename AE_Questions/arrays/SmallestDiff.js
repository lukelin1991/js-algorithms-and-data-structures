/*
Smallest Difference
Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array)
whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number
from the first array in the first position.

You can assume that there will only be one pair of numbers with the smallest difference.

Sample Input
arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]

Sample Output
[28, 26]
*/

function smallestDifference(arrayOne, arrayTwo){
    // sorting
	arrayOne.sort((a, b) => a - b)
	arrayTwo.sort((a, b) => a - b)
	let i = 0
	let j = 0
	let sDiff = Infinity
	let cNum = Infinity
	let smallestPair = []
	
	while(i < arrayOne.length && j < arrayTwo.length){
		let num1 = arrayOne[i]
		let num2 = arrayTwo[j]
		
		if(num1 < num2){
			cNum = num2 - num1
			i++
		} else if (num2 < num1){
			cNum = num1 - num2
			j++
		} else {
			return [num1, num2]
		}
		
		if(sDiff > cNum){
			sDiff = cNum
			smallestPair = [num1, num2]
		}
	}
	return smallestPair
}