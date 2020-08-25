/*
Longest Peak
Write a function that takes in an array of integers and returns the length of the longest peak in the array.
A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip
(the highest value in the peak), at which point they become strictly decreasing.  At least three integers
are required to form a peak.

For example, the integers 1, 4, 10, 2 form a peak, but the integers 4, 0, 10 don't and neither do the integers
1, 2, 2, 0.  Similarly, the integers 1, 2, 3 don't form a peak because there aren't any strictly decreasing
integers after the 3.

Sample Input
array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

Sample Output
6 // 0, 10, 6, 5, -1, -3
*/

function longestPeak(array) {
    let longestLength = 0
    let i = 0
    while(i < array.length - 1){
        let isPeak = array[i] > array[i - 1] && array[i] > array[i + 1]
        if(!isPeak){
            i++
            continue
        }
        
        let left = i - 2
        while(left >= 0 && array[left] < array[left + 1]){
            left--
        }
        let right = i + 2
        while(right < array.length && array[right] < array[right - 1]){
            right++
        }
        
        const peakLength = right - left - 1
        longestLength = Math.max(longestLength, peakLength)
        i = right
    }
    return longestLength
}