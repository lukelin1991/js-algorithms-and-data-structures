// can use ES6 Set <- to create a new unique array.
// const uniqueArr = Array.from(new Set(arr))
// then uniqueArr.length would give unique values..
// but that would be using Non-Multiple pointers.

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
// Big O Time - O(n)