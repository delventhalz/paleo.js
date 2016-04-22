/* * * * * * * * * * * * * * * * * * * * * *
 *     PALEO JS PT 1: THE MATH OBJECT      *
 * * * * * * * * * * * * * * * * * * * * * */

// The Math object has all sorts of useful methods that JavaScript
// programmers use every day, like `Math.sqrt` (square root) or 
// `Math.random` (generates random number). But we're going paleo
// so you'll have to do without, and instead implement them manually.



/**  MATH.ABS  **/
// Our first function simply returns the absolute value of a number.
// To get you in the swing of things, I implemented it for you.
var abs = function(number) {
    return number < 0 ? -number : number;
};


/**  MATH.FLOOR  **/
// This useful function takes a number and rounds it drops any decimal
// values by rounding down to the nearest integer.

// Example Usage:
// Math.floor(3.5);  --> returns 3

var floor = function(number) {
    
};


/**  MATH.POW  **/
// JavaScript doesn't have an exponent operator, so you need `Math.pow`
// to raise a number to a power. Too bad you can't use that. The good 
// news is you don't have to handle fractional exponents, only integers.

// Example Usage:
// Math.pow(2, 4);  --> returns 16

var pow = function(base, exponent) {

};


/**  MATH.MAX  **/
// Normally this compares any number of numbers and returns the largest. 
// Let's take it easy for now and make a version that just compares two.

// Example Usage:
// Math.max(17, 9);  --> returns 17

var max = function(x, y) {

};


/**  MATH.MIN  **/
// I bet you can guess what this one is suppossed to do. This time, use 
// the `arguments` keyword so that you can compare any number of inputs.

// Example Usage:
// Math.min(5, 7, 35, -7, 22);  --> returns -7

var min = function() {

};
