/*
Find the greatest Common denominator of 2 numbers, using Euclid's algorithm.
1. for 2 integers a and b, where a > b, divide a by b.
2. if remainder, r, is 0, then stop; GCD is b.
3. otherwise, set a to b, b to r, and repeat step 1 until r is 0.
*/

function gcd(a, b){
    while(b != 0){ // while b (the 2nd variable is not 0)
        let t = a // set temporary variable to a, being the first biggest number. 
        a = b // set a to b
        b = t % b
    }
    return a
}