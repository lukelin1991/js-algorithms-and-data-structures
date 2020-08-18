/*
You're given an array of integers and an integer.  Write a function that moves all instances of that integer
in the array to the end of the array and returns the array.

The function should perform this in place (i.e., it should mutate the input array) and doesn't need to
maintain the order of the other integers.

sample input:
array = [2,1,2,2,2,3,4,2]
toMove = 2

sample output:
array = [1,3,4,2,2,2,2,2] the numbers 1, 3, and 4 could be ordered differently*****
*/

function moveElementToEnd(array, toMove) {
    // Write your code here.
    let i = 0
    let j = array.length - 1
    while(i < j){
        while(i < j && array[j] === toMove) j-- // moves the right down.
        if(array[i] === toMove) swap(array, i, j)
        i++
    }
    return array
}
  
const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}