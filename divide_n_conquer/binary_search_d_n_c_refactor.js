// given a SORTED array of integers, write a function called search
// that accepts a value and returns the index where the value passed to the function is located.
// if the value is not found, return -1
// search([1, 2, 3, 4, 5, 6], 4) // 3
// search([1, 2, 3, 4, 5, 6], 6) // 5
// search([1, 2, 3, 4, 5, 6], 11) // -1

function search(array, num){
    let min = 0; // first pointer?
    let max = array.length - 1; // 2nd pointer?

    while(min <= max){
        let middle = Math.floor((min + max) / 2); // finds the middle of the left most point + right most point. dividing it by 2.
        let currentElement = array[middle] // is this needed? o.0

        if(currentElement < num){ // if the current element Middle is less than the number input.. 
            // the new maximum is the middle + 1, which moves the middle up the array line.
            max = middle + 1
        } else if (currentElement > num){ // if current element middle is more than the value input
            // move the middle down an array
            max = middle - 1 
        } else {
            return middle;
        }
    }
    return -1;
}

// Time complexity - Log(N) - Binary Search.