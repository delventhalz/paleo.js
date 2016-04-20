/* * * * * * * * * * * * * * * * * * * * * *
 *    CAVEMAN JS PT 2: ARRAY.PROTOTYPE     *
 * * * * * * * * * * * * * * * * * * * * * */

// Part of what makes arrays so powerful are the many useful methods
// attached to the `Array.prototype`. They make it easy to take a set of
// data and `sort` or `filter` it. Of course, as cavemen we are throwing
// all those functions out the window and implementing them from scratch.

// Note that normally these functions are called directly on the array,
// i.e. [1, 2, 3].pop(), but since we are doing this manually, we'll 
// have to input the array as the first argument.


/**  Array.prototype.pop()  **/
// This removes the last element from an array and returns it. 
// Since it's your first one, I'll do it for you.
var pop = function(array) {
  var popped = array[array.length - 1];

  if (array.length > 0) {
    array.length--;
  }

  return popped;
};


/**  Array.prototype.push  **/
// Just the opposite of `pop`, this adds a new value to the end 
// of an array, and returns the new length.
var push = function(array, value) {

};


/**  Array.prototype.shift  **/
// Removes the first element from an array. Won't be as simple as `pop`.
var shift = function(array) {

};


/**  Array.prototype.unshift  **/
// You may sense a pattern. This adds an value to the start of an array.
var unshift = function(array, value) {

};


/**  Array.prototype.join  **/
// Combines an array of sub-strings with an optional separator string 
// inbetween each. The separator should default to a comma.
var join = function(array, separator) {

};


/**  Array.prototype.reverse  **/
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


/**  Array.prototype.concat  **/
// This combines any number of sub-arrays into a new larger array. 
// You may find previous functions useful here too!
var concat = function() {

};
