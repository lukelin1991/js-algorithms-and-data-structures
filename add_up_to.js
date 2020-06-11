// create a function that allows you to add up to n
// first method is slow, brute force type.
function addUpToFirst(n){
    let total = 0;
    for (let i = 0; i <= n; i++){
        total += i;
    }
    return total;
}

// 2nd method is quicker.?
function addUpToSecond(n){
    return n * (n + 1) / 2;
}

// only issue with time based performance tests is that it relies 
// and depends on the machines.
// and machines may vary in speed/etc. 
let time1 = performance.now();
addUpToFirst(1000000000);
let time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)
