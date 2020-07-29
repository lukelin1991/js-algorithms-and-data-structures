/*
write a function called averagePair.  Given a sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of the pairs equals the target value.
There may be more than one pair that matches the average target.
Time: O(n)
Space: O(1)

sample input:
averagePair([1,2,3], 2.5) // true
averagePair([1,3,3,5,6,7,10,12,19], 8) // true
*/

function averagePair(arr, num){
    // add whatever parameters you deem necessary - good luck!
    let start = 0;
    let end = arr.length -1;

    while(start < end){
        let avg = (arr[start] + arr[end] / 2) // setting the algorithm of avg to a variable

        if(avg === num) return true // if avg is same as num, return true. makes sense.
        else if(avg < num) start++ // single liners
        else end-- // dont need brackets if single liners?
    }
    return false
}