/*
Write a recursive function called capitalizeFirst. Given an array of strings, 
capitalize the first letter of each string in the array.
*/

function capitalizeFirst(arr){
    if(arr.length === 1){
        return [arr[0][0].toUpperCase() + arr[0].substr(1)]
    }

    const res = capitalizeFirst(arr.slice(0, -1)) // recursion, cutting last string/element off array.
    const str = arr.slice(arr.length-1)[0][0].toUpperCase() + arr.slice(arr.length-1)[0].substr(1)
    res.push(str) // pushing it back onto the recursive loop. 
    return res
}