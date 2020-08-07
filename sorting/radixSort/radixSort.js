/*
Radix Sort pseudocode
Define a function that accepts a list of numbers
Figure out how many digits the largest number has
loop from k = 0 up to this largest number of digits
for each iteration of the loop:
    create buckets for each digit (0 to 9)
    place each number in the corresponding bucket based on its kth digit
Replace our existing array with values in our buckets, starting with 0 and going up to 9
returns list at the end.
*/
function getDigit(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10; 
}

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

function radixSort(nums){
    let maxDigitCount = mostDigits(nums)
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let i = 0; i < nums.length;i++){
            let digit = getDigit(num[i], k)
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets) // connects all the arrays, using spread operator.
    }
    return nums
}