/*
Write a function that takes in a big string and an array of small strings, all of which are smaller in length than the
big string.  The function should return an array of booleans, where each boolean represents whether the small string
at that index in the array of small strings is contained in the big string.

Note that you can't use language-built-in string-matching methods.

Sample Input
bigString = "this is a big string"
smallStrings = ["this", "yo", "is", "a", "bigger", "string", "kappa"]

Sample Output
[true, false, true, true, false, true, false]
*/

function multiStringSearch(bigString, smallStrings){
	const trie = new Trie()
	for(let string of smallStrings){
		trie.insert(string)
	}
	let containedStrings = {}
	for(let i = 0; i < bigString.length;i++){
		findSmallStringsIn(bigString, i, trie, containedStrings)
	}
	return smallStrings.map(string => string in containedStrings)
}

function findSmallStringsIn(string, idx, trie, containedStrings){
	let node = trie.root
	for(let i = idx; i < string.length; i++){
		const char = string[i]
		if(!(char in node)) break
		node = node[char]
		if(trie.endSymbol in node) containedStrings[node[trie.endSymbol]] = true;
	}
}

class Trie {
	constructor(){
		this.root = {}
		this.endSymbol = '*'
	}
	insert(string){
		let current = this.root
		for(let i = 0; i < string.length;i++){
			if(!(string[i] in current)){
				current[string[i]] = {}
			}
			current = current[string[i]]
		}
		current[this.endSymbol] = string;
	}
}