/*
You are given numbers, an array of pairwise distinct positive integers.  
Let's call an element of this array a peak if it is greater than all its existing neighboring elements.  
In other words, there is a peak at index i if both of the following conditions are true:
    - numbers[i] > numbers[i - 1] or numbers[i - 1] doesn't exist.
    - numbers[i] > numbers[i + 1] or numbers[i + 1] doesn't exist.
Your task is to consecutively remove the minimal peaks of the given array numbers one by one, and
then return an array containing the deleted elements in the order they were removed from the array.
*/
let newArr = []

function deleteMinimalPeaks(num){
    let minPeak = Math.max(...num)
   
    if(num.length === 0) return newArr // base case

    for(let i = 0; i < num.length;i++){
        let left = false
        let right = false

        // left side
        if(typeof num[i - 1] === 'undefined' || num[i] > num[i - 1]) left = true

        // right side
        if(typeof num[i + 1] === 'undefined' || num[i] > num[i + 1]) right = true

        // finding min peak.
        if(left && right){
            if(num[i] < minPeak){
                minPeak = num[i]
            }
        }

        // solving through recursion
        if(i === num.length - 1){
            newArr.push(minPeak)
            num.splice(num.indexOf(minPeak), 1)
            console.log(num, newArr)
            deleteMinimalPeaks(num)
        }
    }
    return newArr
}




// 8, 6, 9.
// numbers: [2, 7, 8, 5, 1, 6, 3, 9, 4]
// output: [6, 8, 7, 5, 2, 9, 4, 3, 1]

// numbers: [1, 5, 3, 4, 2]
// output: [4, 5, 3, 2, 1]

// numbers: [2, 3]
// output: [3, 2]















let newArr = [] 

function deleteMinimalPeaks(num){
    // bool isGoodCase = num[i] > num[i - 1] ? true : false
    // if((num[i] > num[i - 1] || num[i - 1] = null/undefined ) && 
    // (num[i] > num[i + 1] || num[i + 1] = null/undefined))
    let minPeak = Math.max(...num)
    
    if(num.length === 0){ // base case.. possibly.
        return newArr
    }

    // 6, 8, 9 - peaks. // lowest peak.
    // if(lowerNum < minPeak){
    //     return minPeak = lowerNum
   // }
    for(let i = 0; i < num.length;i++){
        let left = false
        let right = false

    // left side
        if(typeof num[i - 1] === 'undefined'){
                left = true
        } 
        else if(num[i] > num[i - 1]){
            left = true
        }

    // right side
       if(typeof num[i + 1] === 'undefined'){
            right = true
        }
        else if(num[i] > num[i + 1]){
            right = true
        }

        if(left && right){
            if(num[i] < minPeak){
                minPeak = num[i]
            }
        }

        if(i === num.length - 1){
            newArr.push(minPeak)
            num.splice(num.indexOf(minPeak), 1)
            console.log(num, newArr)
            deleteMinimalPeaks(num)
        }
    //    if((num[i] > num[i - 1] || num[i - 1] == undefined ) && num[i] > num[i + 1])
   }
   return newArr
}

/*
tests:
numbers: [2, 7, 8, 5, 1, 6, 3, 9, 4]
         [2, 7, 8, 5, 1, 3, 9, 4]
         [2, 7, 5, 1, 3, 9, 4]
         [2, 5, 1, 3, 9, 4]
         [2, 1, 3, 9, 4]
         [1, 3, 9, 4]
         [1, 3, 4]
         [1, 3]
         [1]
output: [6, 8, 7, 5, 2, 9, 4, 3, 1]

numbers: [1, 5, 3, 4, 2]
output: [4, 5, 3, 2, 1]

numbers: [2, 3]
output: [3, 2]

*/