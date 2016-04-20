/* * * * * * * * * * * * * * * * * * * * * *
 *    CAVEMAN JS PT 1: THE MATH OBJECT     *
 * * * * * * * * * * * * * * * * * * * * * */

// The Math object has all sorts of useful methods that JavaScript
// programmers use every day, like `Math.sqrt` (square root) or 
// `Math.random` (generates random number). But we're caveman coders
// so we're going to go without, and implement these methods manually.


/**  Math.floor  **/
// Our first function rounds a number down to the next whole number. 
// To get you in the swing of things, I implemented it for you.
var floor = function(number) {
  var r = number % 1;
  return number < 0 ? number - (!r ? 0 : 1 + r) : number - r;
};


/**  Math.ceiling  **/
// This one rounds up. Your solution may differ from mine. 
// Just make sure it works.
var ceiling = function(number) {

};


/**  Math.abs  **/
// This one simply returns the absolute value of a number.
var abs = function(number) {

};


/**  Math.pow  **/
// JavaScript doesn't have an exponent operator, so you need `Math.pow`
// to raise a number to a power. Too bad you can't use that.
var pow = function(base, exponent) {

};


/**  Math.max  **/
// Normally this compares any number of numbers and returns the 
// largest. Let's make a version that just compares two.
var max = function(x, y) {

};


/**  Math.min  **/
// I bet you can guess what this one is suppossed to do. This time,
// use the `arguments` keyword so that you can compare more than two.
var min = function() {

};
