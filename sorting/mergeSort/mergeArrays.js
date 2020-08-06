/*
Merging Arrays
in order to implement merge sort, it's useful to first implement a function responsible 
for merging 2 sorted arrays.
Given 2 arrays which are sorted, this helper function should create a new array 
which is also sorted, and consists of all of the elements in the two input arrays.
should run in O(n + m) time and O(n + m) space and should not modify the params passed to it.

Pseudocode:
create an empty array, take a look at the smallest values in each input array.
have 2 numbers, i, j start at 0.
while there are still values we haven't looked at,
    if the value in the 2st array is smaller than the value in the 2nd array, push the value
    in the 1st array into our results and move onto the next value in the 1st array. 

    if the value in the 1st array is larger than the value in the 2nd array, push the value
    in the 2nd array into our results and move onto the next value in the 2nd array.
    Once we exhaust one array, push in all remaining values from the other array.
*/

function merge(arr1, arr2){
    let results = []
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){ // creates a comparison that allows you to push. 
            result.push(arr1[i])
            i++

        } else {
            result.push(arr2[j])
            j++
        }
    }
    // we need these while loops below, incase arr1 or arr2 is equivalent to the length, while the other arr isn't.
    while(i < arr1.length){
        results.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        results.push(arr2[j])
        j++
    }

    return results
}