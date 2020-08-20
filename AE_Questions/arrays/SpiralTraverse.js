/*
Spiral Traverse
Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n == m) and returns
a one-dimensional array of all the array's elements in spiral order.

Spiral order starts at the top left corner of the two-dimensional array, goes to the right, and proceeds in a
spiral pattern all the way until every element has been visited.

Sample Input
array = [
    [1,   2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8, 7]
]

Sample Output
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

*/

function spiralTraverse(array){
    const result = []
	let sRow = 0
	let eRow = array.length - 1
	
	let sCol = 0
	let eCol = array[0].length - 1
	
	while(sRow <= eRow && sCol <= eCol){
		// first one takes outer perimeter
		for(let col = sCol; col <= eCol; col++){ // moves top across
			result.push(array[sRow][col])
		}
		// traverses down side of right side.
		for(let row = sRow + 1; row <= eRow; row++){ // moves downwards from top right corner + 1. 
			result.push(array[row][eCol])
		}
		// shrinks end column inwards
		for(let col = eCol - 1; col >= sCol; col--){
			if(sRow === eRow) break
			result.push(array[eRow][col])
		}
		
		for(let row = eRow - 1; row > sRow; row--){
			if(sCol === eCol) break
			result.push(array[row][sCol])
		}
		
		sRow++
		eRow--
		sCol++
		eCol--
	}
	
	return result
}