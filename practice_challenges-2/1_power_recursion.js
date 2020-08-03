function power(base, exp){
    if(exp === 0) return 1 // base case (to break out of loop)
    return base * power(base, exp - 1) // the recursion loop.
}