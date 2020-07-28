function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null; // if the array length is less than the total input numbers (you can't input any more numbers if they're not available)
    for(let i = 0; i < num; i++){ // if i is less than the sum of the given numbers.
        maxSum += arr[i]; // iterates through adding 3 numbers. 
    }
    tempSum = maxSum
    for(let i = num; i < arr.length; i++){ // setting i as the next array slot (num would be the next number, if it starts at 0)
        tempSum = tempSum - arr[i - num] + arr[i]; // the new maxSum is equivalent to the temp sum, subtract previous array of i, and add the new array value.
        maxSum = Math.max(maxSum, tempSum) // updates max sum if tempSum is larger than max.
    }
    return maxSum;

}