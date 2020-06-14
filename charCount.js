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
    // loop over string, for each char...
        // if char is a number/letter AND is a key in obj, add one to count
        // if char is a number/letter AND not in obj, add it to obj and set value to 1.
        // if char is something else (space, period, ! etc. etc.) don't do anything.
    // return object at end
}

// in the interview its about THE PROCESS..