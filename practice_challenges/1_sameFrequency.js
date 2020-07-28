/* 
Write a function called sameFrequency.  Given 2 positive integers, find out
if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities:
Time: O(n) - no loop inside a loop (no brute force).

Sample Input:
sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false
*/

function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    if(num1.length !== num2.length){
        return false
    }
    
    let freq1 = {}
    let freq2 = {}
    
    for(let val of (num1.toString())){ // have to change num1 to string, in order to do "val of ___" on an integer to create a frequency hash map
        freq1[val] = (freq1[val] || 0) + 1
    }
    for(let val of (num2.toString())){
        freq2[val] = (freq2[val] || 0) + 1
    }
    
    for (let key in freq1){
        if(!(key in freq2)){
            return false
        }
        if(freq2[key] !== freq1[key]){
            return false
        }
    }
    return true
}