"use strict";
// Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

// For example, in this diagram, 6 and 8 have common ancestors of 4 and 14.

//          14  13
//          |   |
// 1   2    4   12
//  \ /   / | \ /
//   3   5  8  9
//    \ / \     \
//     6   7     11

// parentChildPairs1 = [
//     (1, 3), (2, 3), (3, 6), (5, 6), (5, 7), (4, 5),
//     (4, 8), (4, 9), (9, 11), (14, 4), (13, 12), (12, 9)
// ]

// Write a function that takes the graph, as well as two of the individuals in our dataset, as its inputs and returns true if and only if they share at least one ancestor.

// Sample input and output:

// hasCommonAncestor(parentChildPairs1, 3, 8) => false
// hasCommonAncestor(parentChildPairs1, 5, 8) => true
// hasCommonAncestor(parentChildPairs1, 6, 8) => true
// hasCommonAncestor(parentChildPairs1, 6, 9) => true
// hasCommonAncestor(parentChildPairs1, 1, 3) => false
// hasCommonAncestor(parentChildPairs1, 3, 1) => false
// hasCommonAncestor(parentChildPairs1, 7, 11) => true
// hasCommonAncestor(parentChildPairs1, 6, 5) => true
// hasCommonAncestor(parentChildPairs1, 5, 6) => true

// Additional example: In this diagram, 4 and 12 have a common ancestor of 11.

//         11
//        /  \
//       10   12
//      /  \
// 1   2    5
//  \ /    / \
//   3    6   7
//    \        \
//     4        8

// parentChildPairs2 = [
//     (11, 10), (11, 12), (2, 3), (10, 2), (10, 5),
//     (1, 3), (3, 4), (5, 6), (5, 7), (7, 8),
// ]

// hasCommonAncestor(parentChildPairs2, 4, 12) => true
// hasCommonAncestor(parentChildPairs2, 1, 6) => false
// hasCommonAncestor(parentChildPairs2, 1, 12) => false

// n: number of pairs in the input


// const parentChildPairs = [
//   [1, 3], [2, 3], [3, 6], [5, 6],
//   [5, 7], [4, 5], [4, 8], [4, 9], [9, 11]
// ];

// function findNodesWithZeroAndOneParents(pcp){ // AoA
//   let childParentMap = {}
//   // created a hash for children with array of parents value.
//   for(let arr of pcp){
//     if(!childParentMap[arr[1]]){
//       // [1, 3]
//       // {'3': [1]}
//       childParentMap[arr[1]] = []
//       childParentMap[arr[1]].push(arr[0])
//     } else {
//       childParentMap[arr[1]].push(arr[0])
//     }
//   }
//   // if value of parent is NOT a 'key', create one?
//   let parent = Object.values(childParentMap)
  
//   for(let arr of parent){
//     for(let element of arr){
//       if(!childParentMap[element]){
//         childParentMap[element] = []
//       }
//     }  
//   }
//   let noParents = []
//   let oneParent = []
//   for(let key in childParentMap){
//     if(childParentMap[key].length === 0){
//       noParents.push(key)
//     } else if(childParentMap[key].length === 1){
//       oneParent.push(key)
//     }
//   }
//   let finalAnswer = [noParents, oneParent]
//   return finalAnswer
// }



// console.log(findNodesWithZeroAndOneParents(parentChildPairs))

/* class Node {
  this.value =  3
  this.parent = [1, 2] <- if parent = 0 or Null, create an array and put this.value in. else if parent.length == 2, create another array and put in this.value
  this.child = 6
}
*/

/*
{
  '1': [],
  '2': [],
  '3': [ 1, 2 ],
  '4': [], <-
  '5': [ 4 ], 
  '6': [ 3, 5 ],
  '7': [ 5 ], 
  '8': [ 4 ], 
  '9': [ 4 ],
  '11': [ 9 ] 
}
*/

function extraVariablesWithMap(parentChildPairs){
   let childParentMap = {}
  // created a hash for children with array of parents value.
  for(let arr of pcp){
    if(!childParentMap[arr[1]]){
      // [1, 3]
      // {'3': [1]}
      childParentMap[arr[1]] = []
      childParentMap[arr[1]].push(arr[0])
    } else {
      childParentMap[arr[1]].push(arr[0])
    }
  }
  // if value of parent is NOT a 'key', create one?
  let parent = Object.values(childParentMap)
  
  for(let arr of parent){
    for(let element of arr){
      if(!childParentMap[element]){
        childParentMap[element] = []
      }
    }  
  }
  console.log(childParentMap)
//   let noParents = []
//   let oneParent = []
//   for(let key in childParentMap){
//     if(childParentMap[key].length === 0){
//       noParents.push(key)
//     } else if(childParentMap[key].length === 1){
//       oneParent.push(key)
//     }
//   }
}

extraVariablesWithMap(parentChildPairs1)

const parentChildPairs1 = [
    [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5],
    [4, 8], [4, 9], [9, 11], [14, 4], [13, 12], [12, 9]
];

const parentChildPairs2 = [
    [11, 10], [11, 12], [2, 3], [10, 2], [10, 5],
    [1, 3], [3, 4], [5, 6], [5, 7], [7, 8]
];

// Sample input and output:

// hasCommonAncestor(parentChildPairs1, 3, 8) => false
// hasCommonAncestor(parentChildPairs1, 5, 8) => true
// hasCommonAncestor(parentChildPairs1, 6, 8) => true
// hasCommonAncestor(parentChildPairs1, 6, 9) => true
// hasCommonAncestor(parentChildPairs1, 1, 3) => false
// hasCommonAncestor(parentChildPairs1, 3, 1) => false
// hasCommonAncestor(parentChildPairs1, 7, 11) => true
// hasCommonAncestor(parentChildPairs1, 6, 5) => true
// hasCommonAncestor(parentChildPairs1, 5, 6) => true