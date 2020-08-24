/*
Binary Search
Write a function that takes in a sorted array of integers as well as a target integer.  The function should
use the Binary Search algorithm to determine if the target integer is contained in the array and should
return its index if it is, otherwise -1.

Sample input
array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
target = 33

Sample Output
3
*/

function binarySearch(array, target) {
    let i = 0
    let j = array.length - 1
    
    while(i <= j){
        let mid = Math.floor((i + j)/2)
        let match = array[mid]
        
        if(match === target){
            return mid
        } else if(match > target){
            j = mid - 1
        } else {
            i = mid + 1
        }
    }
    return -1
}