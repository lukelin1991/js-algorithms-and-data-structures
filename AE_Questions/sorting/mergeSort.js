/*
Merge Sort
Write a function that takes in an array of integers and returns a sorted version of that array. Use the Merge
Sort algorithm to sort the array.

Sample input
array = [8, 5, 2, 9, 5, 6, 3]

Sample Output
[2, 3, 5, 5, 6, 8, 9]
*/

function mergeSort(array) {
      if(array.length <= 1) return array
      
      let mid = Math.floor(array.length / 2)
      let left = mergeSort(array.slice(0, mid))
      let right = mergeSort(array.slice(mid))
      return merge(left, right)
  }
  
  function merge(arr1, arr2){
      let results = []
      let i = 0
      let j = 0
      while(i < arr1.length && j < arr2.length){
          if(arr1[i] < arr2[j]){
              results.push(arr1[i])
              i++
          } else {
              results.push(arr2[j])
              j++
          }
      }

      while(i < arr1.length){
          results.push(arr1[i])
      i++
      }
      while(j < arr2.length){
          results.push(arr2[j])
          j++
      }
      return results
  }