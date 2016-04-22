/* * * * * * * * * * * * * * * * * * * * * *
 *     PALEO JS PT 1: THE MATH OBJECT      *
 * * * * * * * * * * * * * * * * * * * * * */

// The Math object has all sorts of useful methods that JavaScript
// programmers use every day, like `Math.sqrt` (square root) or 
// `Math.random` (generates random number). But we're going paleo
// so we're going to go without, and implement these methods manually.



/**  MATH.ABS  **/
// Our first function simply returns the absolute value of a number.
// To get you in the swing of things, I implemented it for you.
var abs = function(number) {
    return number < 0 ? -number : number;
};

/**  MATH.FLOOR  **/
// This useful function takes a number and rounds it drops any decimal
// values by rounding down to the nearest integer.
var floor = function(number) {
    
};



/**  MATH.POW  **/
// JavaScript doesn't have an exponent operator, so you need `Math.pow`
// to raise a number to a power. Too bad you can't use that.
var pow = function(base, exponent) {

};


/**  MATH.MAX  **/
// Normally this compares any number of numbers and returns the 
// largest. Let's make a version that just compares two.
var max = function(x, y) {

};


/**  MATH.MIN  **/
// I bet you can guess what this one is suppossed to do. This time,
// use the `arguments` keyword so that you can compare more than two.
var min = function() {

};
