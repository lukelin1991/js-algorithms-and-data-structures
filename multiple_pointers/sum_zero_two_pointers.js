function sumZero(arr){ // finding FIRST pair to sum zero. 
    let left = 0; // start on left. 
    let right = arr.length - 1; // start on far right.
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0 ){
            return[arr[left], arr[right]]
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}
// Time Complexity - O(n) no nested for loops
// Space Complexity - O(1)