/*
write a recursive function called fib which accepts a number and returns the nth number
in the Fibonacci sequence.  Recall that the Fibonacci sequence is the sequence of whole numbers
1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the
sum of the previous two numbers.
*/

function fib(n){
    if(n <= 2) return 1 // base case. first 2 digits are 1, 1 <- fib(1) is 1 and fib(2) is 1.
    return fib(n - 1) + fib(n - 2) // recursive.. but adding 2 recursive numbers. 
}