// exploring examples.
// start w/ simple examples.
// progress to more complex examples.
// explore examples w/ empty inputs.
// explore examples w/ invalid inputs.


//problem solving.
// understand the problem
// explore concrete examples
// break it down
// write a function which takes in a string and returns counts of each character in the string

charCount("aaaa");
/* {
    a: 4
} */

charCount("hello");
/* {
    h:1,
    e:1,
    l:2,
    o:1
} */

charCount("Your PIN number is 1234!")
/* {
    1:1,
    2:1,
    3:1,
    4:1,
    b:1,
    e:1,
    i:2,
    m:1,
    n:2,
    o:1,
    p:1,
    r:2,
    s:1,
    u:2,
    y:1
} */

function charCount(str){
    // make object to return at end
    let result = {}
    // loop over string, for each char...
    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase()
        if(result[char] > 0){
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result
        // if char is a number/letter AND is a key in obj, add one to count
        // if char is a number/letter AND not in obj, add it to obj and set value to 1.
        // if char is something else (space, period, ! etc. etc.) don't do anything.
    // return object at end
}

// in the interview its about THE PROCESS..

// different way of solving it.
function charCount(str){
    let obj = {}
    for (let char of str){ // goes by the character of the input instead of ur typical for loop which starts at 0.
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)){
            obj[char] = ++obj[char] || 1; // replaces if/else statement, increases count of obj[char] OR sets it to 1.
        }
    }
}