/*
mergeSort Pseudocode:
break up the array into halves until you have arrays that are empty or have one element.

once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are
back at the full length of the array. 
2 recursions?
Once the array has been merged back together, return the merged(sorted) array.
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

function mergeSort(arr){
    if(arr.length <= 1) return arr //base case, if arr.length is === 1
    
    let mid = Math.floor(arr.length/2) // cutting array in half.
    let left = mergeSort(arr.slice(0, mid)) // first half of array. 
    let right = mergeSort(arr.slice(mid)) // right half of array.
    return merge(left, right)
}