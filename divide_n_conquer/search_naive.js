// given a SORTED array of integers, write a function called search
// that accepts a value and returns the index where the value passed to the function is located.
// if the value is not found, return -1
// search([1, 2, 3, 4, 5, 6], 4) // 3
// search([1, 2, 3, 4, 5, 6], 6) // 5
// search([1, 2, 3, 4, 5, 6], 11) // -1

function search(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

// Time complexity - O(n)
