/*
Caesar Cipher Encryptor
Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function
that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet,
where k is the key.

Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns
the letter a.

Sample Input
string = "xyz"
key = 2

Sample Output
"zab"
*/

function caesarCipherEncryptor(string, key) {
    let newLetters = []
    let newKey = key % 26
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for(let letter of string){
        newLetters.push(getNewLetter(letter, newKey, alphabet))
    }
    return newLetters.join('')
}

function getNewLetter(letter, key, alphabet){
    let newLetterCode = alphabet.indexOf(letter) + key
    return alphabet[newLetterCode % 26]
}