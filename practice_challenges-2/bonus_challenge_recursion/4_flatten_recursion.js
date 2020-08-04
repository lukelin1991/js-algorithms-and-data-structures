/*
Write a recursive function called flatten which accepts an array of arrays
and returns a new array with all values flattened.
*/
function flatten(arrOfArr){
    let newArr = []
    for(let i = 0; i < arrOfArr.length; i++){
        if(Array.isArray(arrOfArr[i])){
            newArr = newArr.concat(flatten(arrOfArr[i]))
        } else {
            newArr.push(arrOfArr[i])
        }
    }
    return newArr
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3