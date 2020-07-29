/*
Implement a function called, areThereDUplicates which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in. You can solve this
using frequency counter pattern OR the multiple pointers pattern.

going to use Set (to create uniqueness.) and remove duplicates if there is any.
IF there are duplicates.. 
then return value will be TRUE IF Set(arguments).size is NOT be the same as arguments.length
*/

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
