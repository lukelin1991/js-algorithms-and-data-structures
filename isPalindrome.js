let isPalindrome = function(num){
    if (num < 0) return false

    const string = num.toString()
    let left = 0 // setting pointer of left side
    let right = string.length - 1 // setting pointer of right side. 

    while (left < right){ // while loop to create movement.
        if (string[left] !== string[right]){ // if left n right done match, its NOT palindrome. 
            return false
        }
        left++ // move another tier up.
        right-- // move another tier down.
    }
    return true // while loop stops when left n right are at the same number, if all numbers coincide, it is a palindrome.
}