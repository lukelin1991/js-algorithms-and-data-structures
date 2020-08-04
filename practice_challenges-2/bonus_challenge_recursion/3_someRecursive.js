/*
Write a recursive function called someRecursive which accepts an array and a callback.
The function returns true if a single value in the array returns true when passed to the callback.  Otherwise it returns false.
*/

function someRecursive(arr, callback){
    if(arr.length === 0) return false // base case
    if(callback(arr[0])) return true // if a single value in the array returns 
    return someRecursive(array.slice(1), callback) // slice off the first array[0].
}