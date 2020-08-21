/*
Quick Sort
Write a function that takes in an array of integers and returns a sorted version of that array.
Use the Quick Sort algorithm to sort the array.

Sample Input
array = [8, 5, 2, 9, 5, 6, 3]

Sample Output
[2, 3, 5, 5, 6, 8, 9]
*/

function quickSort(array) {
    // Write your code here.
      quickSortHelper(array, 0, array.length - 1)
      return array
  }
  
  function quickSortHelper(arr, startIdx, endIdx){
      if(startIdx >= endIdx) return
      let pivotIdx = startIdx
      let leftIdx = startIdx + 1
      let rightIdx = endIdx
      
      while(rightIdx >= leftIdx){
          if(arr[leftIdx] > arr[pivotIdx] && arr[rightIdx] < arr[pivotIdx]){
              swap(arr, leftIdx, rightIdx)
          }
          if(arr[leftIdx] <= arr[pivotIdx]) leftIdx++
          if(arr[rightIdx] >= arr[pivotIdx]) rightIdx--
      }
      
      swap(arr, pivotIdx, rightIdx)
      let smallerLeftSA = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1)
      
      if(smallerLeftSA){
          quickSortHelper(arr, startIdx, rightIdx - 1)
          quickSortHelper(arr, rightIdx + 1, endIdx)
      } else {
          quickSortHelper(arr, rightIdx + 1, endIdx)
          quickSortHelper(arr, startIdx, rightIdx - 1)
      }
  }
  
  const swap = (arr, i, j) => {
      [arr[i], arr[j]] = [arr[j], arr[i]]
  }