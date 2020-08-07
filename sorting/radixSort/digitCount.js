/*
in order to implement radix sort,
it's helpful to build a few helper functions first.
digitCount(num) - returns the number of digits in num.
*/

function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}