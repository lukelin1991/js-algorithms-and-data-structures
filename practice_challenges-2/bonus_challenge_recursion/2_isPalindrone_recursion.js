/*
write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome
(reads the same forward and backward).  Otherwise it returns false.
*/

function isPalindrome(str){
    if(str.length === 1) return true // if the string length sliced is 1 string left. (base case)
    if(str.length === 2) return str[0] === str[1] // checks to see if theres 2 strings left, return 1 string, to get to base case.
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1)) // checking first portion of string, with last portion of string. run recursion function after slicing first and last letter if they're the same.
    return false // or else its false/not a palindrome.
}