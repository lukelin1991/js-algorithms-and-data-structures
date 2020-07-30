/*
Write a function called isSubsequence which takes in two strings
and checks whether the characters in the first string form a
subsequence of the characters in the second string.
In other words, the function should check whether the characters in the first
string appear somewhere in the second string, WITHOUT THEIR ORDER CHANGING.
*/

function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    if(!str1) return true

    while(j < str2.length){
        if(str2[j] === str1[i]) i++ // if an element in str2 matches w/ element in str1. move the 1st string slot up i++.
        if(i === str1.length) return true // when i finishes going through the first string, you're good. 
        j++; // always moving through the 2nd string.
    }
    return false;
}
