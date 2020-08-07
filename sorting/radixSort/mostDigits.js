/*
mostDigits(num) - Given an array of numbers, returns the 
number of digits in the largest numbers in the list
*/

function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums){
    let maxDigits = 0
    for(let i = 0; i < nums.length;i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}