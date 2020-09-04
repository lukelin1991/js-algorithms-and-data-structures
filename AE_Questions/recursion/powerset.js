/*
Powerset
Write a function that takes in an array of unique integers and returns its powerset.

The powerset P(X) of a set X is the set of all subsets of X.  For example, the powerset of [1, 2] is [[], [1], [2], [1,2]]

Note that the sets in the powerset do not need to be in any particular order.

Sample input
array = [1, 2, 3]

Sample output
[[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
Time - O(n*2^n)
Space - O(n*2^n)
*/

function powerset(array){ // iteratively.
    let subsets = [[]]
	for (let ele of array){
		let length = subsets.length
		for(let i = 0; i < length; i++){
			const currentSubset = subsets[i]
			subsets.push(currentSubset.concat(ele))
		}
	}
	return subsets
}