/*
Write a function called productOfArray which takes in an
array of numbers and returns the product of them all
*/

function productOfArray(arr){
    if(arr.length === 0) return 1 // base case.
    return arr[0] * productOfArray(arr.slice(1)) // recursive loop, slice the array up.
}