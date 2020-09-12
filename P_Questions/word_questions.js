// You are running a classroom and suspect that some of your students are passing around the answers to multiple choice questions disguised as random strings.

// Your task is to write a function that, given a list of words and a string, finds and returns the word in the list that is scrambled up inside the string, if any exists. There will be at most one matching word. The letters don't need to be contiguous.

// Example:
// words = ['cat', 'dog', 'bird', 'car', 'ax', 'baby']
// string1 = 'tcabnihjs'
// find_embedded_word(words, string1) -> cat

// string2 = 'tbcanihjs'
// find_embedded_word(words, string2) -> cat

// string3 = 'baykkjl'
// find_embedded_word(words, string3) -> None

// string4 = 'bbabylkkj'
// find_embedded_word(words, string4) -> baby

// n = number of words in `words`
// m = maximal string length of each word

// */

// "use strict";


// const words = ["cat", "dog", "bird", "car", "ax", "baby"];             
// const string1 = "tcabnihjs";
// const string2 = "tbcanihjs";
// const string3 = "baykkjl";
// const string4 = "bbabylkkj";

function find_embedded_word(words, string){
    // maps all of this in array of hash's.
    let AoH = []
    // map out the hashes.
    for(let word of words){
        let mapped = new Map()
        for(let i = 0; i < word.length;i++){
            mapped[word[i]] = (mapped[word[i]] || 0) + 1
        }
        AoH.push(mapped)
    }
    // runs through string, subtracts all necessary letters from each hash map.
    for(let i = 0; i < string.length;i++){
        AoH.map(hash => {
            for(key in hash){
                if(key === string[i] && hash[key] > 0) hash[key]--
            }
        })
    }
    // loop through the array, to find which map has all 0's.
    for(let i = 0; i < AoH.length;i++){
        let newArr = Object.values(AoH[i])
        if(Math.max(...newArr) === 0){
            return words[i]
        }
    }
    return "None"
}


// function findEmbeddedWord(words, string) {
//     let wordDict = {}
//     //loop through words
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i]
//         for (let j = 0; j < word.length; j++) {
//             if (!wordDict[word[j]]) {
//                 wordDict[word[j]] = 0
//             }
//             wordDict[word[j]]++
//         }
//         let isWord = checkWord(wordDict, string);
//         if (isWord) return word
//         wordDict = {}
//     }  
//     return 'None'
// }
  
// function checkWord(word, str) {//{}
//     for (let i = 0; i < str.length; i++) {
//         if(word[str[i]]) {
//             word[str[i]]--
//             if (word[str[i]] === 0) {
//                 delete word[str[i]]
//             }
//         }
//         if (Object.keys(word).length ===0 ) {
//             return true
//         }
//     }
//     return false 
// }