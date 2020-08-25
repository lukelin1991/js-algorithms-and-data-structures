/*
Longest Palindromic Substring
Write a function that, given a string, returns its longest palindromic substring.
A palindrome is defined as a string that's written the same forward and backward. Note that single-character
strings are palindromes.

You can assume that there will only be one longest palindromic substring.

Sample Input
string = "abaxyzzyxf"

Sample Output
"xyzzyx"
*/

function longestPalindromicSubstring(string) {
    let currentLongest = [0, 1]
    for(let i = 1; i < string.length; i++){
        let odd = getLongestPalindromeFrom(string, i - 1, i + 1)
        let even = getLongestPalindromeFrom(string, i - 1, i)
        let longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even
        currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest
    }
    return string.slice(currentLongest[0], currentLongest[1])
}

function getLongestPalindromeFrom(string, left, right){
    while(left >= 0 && right < string.length){
        if(string[left] !== string[right]) break
        left--
        right++
    }
    return [left + 1, right]
}