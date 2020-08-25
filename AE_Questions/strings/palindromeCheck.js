/*
Write a function that takes in a non-empty string and that returns a boolean representing whether the string
is a palindrome.  A palindrome is defined as a string that's written the same forward and backward.
Note that single-character strings are palindromes.
*/

function isPalindrome(string) { // iterative
    let left = 0
    let right = string.length - 1
    while(left < right){
        if(string[left] !== string[right]) return false
        left++
        right--
    }
    return true
}

// function isPalindrome(string) { // recursion
//     if(string.length === 1) return true
//     if(string.length === 2) return string[0] === string[1]
//     if(string[0] === string.slice(-1)){
//         return isPalindrome(string.slice(1, -1))
//     }
//     return false
// }