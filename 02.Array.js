/* * * * * * * * * * * * * * * * * * * * * *
 *      PALEO JS PT 2: ARRAY METHODS       *
 * * * * * * * * * * * * * * * * * * * * * */

// Part of what makes arrays so powerful are the many useful methods
// attached to them. They make it easy to take a set of data and `sort` 
// or `filter` it. Of course, as neanderthals we are throwing all those 
// functions out the window.document and implementing them from scratch.

// Note that normally these functions are called directly on an array,
// i.e. `[1, 2, 3].pop()`, but since we are doing this manually, we'll 
// have to input the array as the first argument.



/**  POP  **/
// This removes the last element from an array and returns it. 
// Since this is your first array method, I'll do it for you.
var pop = function(array) {
  var popped = array[array.length - 1];

  if (array.length > 0) {
    array.length--;
  }

  return popped;
};


/**  PUSH  **/
// Just the opposite of `pop`, this adds new values to the end of an 
// array, and returns the new length. Normally it can accept any number 
// of values, but let's keep things simple for now and just do one.
var push = function(array, value) {

};


/**  SHIFT  **/
// Removes the first element from an array. Beware! This won't be as 
// simple as `pop`.
var shift = function(array) {

};


/**  UNSHIFT  **/
// You may sense a pattern. This one adds any number of values to the 
// start of an array. I let you off easy with push, but this time 
// you'll need to use `arguments` and handle them all.
var unshift = function(array) {

};


/**  JOIN  **/
// Combines an array of sub-strings using a separator string inbetween 
// each. If no separator is provided, it should default to a comma.
var join = function(array, separator) {

};


/**  REVERSE  **/
// Reverses an array in place as well as returning the mutated array. 
// To demonstrate reusing your functions, I've solved `reverse` in a
// bit of a odd way using your `push`... you got that working, right?
var reverse = function(array) {
  var reversed = [];

  for (var i = array.length - 1; i >= 0; i--) {
    push(reversed, array[i]);
  }

  for (var j = 0; j < array.length; j++) {
    array[j] = reversed[j];
  }

  return array;
};


/**  CONCAT  **/
// This "concatenates" any number of sub-arrays into a new larger array. 
// You may find previous functions useful here too!
var concat = function() {

};
