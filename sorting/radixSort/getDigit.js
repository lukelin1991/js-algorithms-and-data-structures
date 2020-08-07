/*
In order to implement radix sort, it's helpful to build a few helper functions first:
getDigit(num, place) - returns the digit in num at the given place value
*/
function getDigit(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10; 
}
// the Math.abs <- is to make sure all numbers, whether positive or negative, become positive.
// so the number divided by the power of 10's place, % 10 would give you the remainder of that position.
