/*
Implement a function called, areThereDUplicates which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in. You can solve this
using frequency counter pattern OR the multiple pointers pattern.

going to use multiple pointer functionality.
*/

function areThereDuplicates(){ // can also do ...args for variables.
    let left = 0;
    let right = arguments.length -1; // ES6 syntax "arguments", for variable number of arguments.
    while(left < right){
        if(arguments[left] === arguments[right]){
            return true
        } else {
            left++
        }
    }
    return false
}