// This file is how TestRunner.html tests your caveman code. You 
// shouldn't need to modify anything here, but you could check out 
// failing tests to see what exactly is expected of your code.

var expect = chai.expect;


// Runs a number of tests to scan the function for native methods
var dontCheatOn = function(func) {
  var globals = [
    'Math',
    'Array',
    'String',
    'Object',
    'Date',
    'Number'
  ];

  var methods = [
    '.pop',
    '.push',
    '.shift',
    '.unshift',
    '.join',
    '.reverse',
    '.concat', 
    '.slice',
    '.split',
    '.trim',
    '.replace',
    '.splice',
    '.substring',
    '.substr',
    '.indexOf'
  ];

  var pres = [' ','\n','\t','{','[','('];

  var posts = ['.', '('];

  globals.forEach(function(global) {
    pres.forEach(function(pre) {
      posts.forEach(function(post){
        expect(func + '').to.not.contain(pre + global + post, 'No native functions! Cheater!');
      });
    });
  });

  methods.forEach(function(method) {
    expect(func + '').to.not.contain(method, 'No native functions! Cheater!');
  });
};



describe('01 The Math Object', function() {

  it('floor should round numbers down', function() {

    dontCheatOn(floor);
    expect(floor(1.5)).to.equal(1);
    expect(floor(-3.5)).to.equal(-4);
    expect(floor(100)).to.equal(100);
    expect(floor(-987)).to.equal(-987);
    expect(floor(0)).to.equal(0);
    expect(floor(-10003948302034.324)).to.equal(-10003948302035);

  });

  it('ceiling should round numbers up', function() {

    dontCheatOn(ceiling);
    expect(ceiling(1.5)).to.equal(2);
    expect(ceiling(-3.5)).to.equal(-3);
    expect(ceiling(100)).to.equal(100);
    expect(ceiling(-987)).to.equal(-987);
    expect(ceiling(0)).to.equal(0);
    expect(ceiling(-10003948302034.324)).to.equal(-10003948302034);

  });

  it('abs should return the absolute value of a number', function() {

    dontCheatOn(abs);
    expect(abs(2)).to.equal(2);
    expect(abs(-5)).to.equal(5);
    expect(abs(-100.25)).to.equal(100.25);
    expect(abs(0)).to.equal(0);
    expect(abs(-10003948302034.324)).to.equal(10003948302034.324);

  });

  it('pow should return the power of a base number', function() {

    dontCheatOn(pow);
    expect(pow(10, 2)).to.equal(100);
    expect(pow(-3, 3)).to.equal(-27);
    expect(pow(5, 0)).to.equal(1);
    expect(pow(2, -2)).to.equal(0.25);
    expect(pow(-4, -2)).to.equal(0.0625); 

  });

  it('max should return the larger of two numbers', function() {

    dontCheatOn(max);
    expect(max(1, 2)).to.equal(2);
    expect(max(97, 34)).to.equal(97);
    expect(max(0, 0)).to.equal(0);
    expect(max(-17, 831)).to.equal(831);
    expect(max(-45, -217)).to.equal(-45); 

  });

  it('min should return the smallest of any number of numbers', function() {
    var numbers = [];
    for (var i = 0; i < 100; i++) {
      numbers.push( Math.floor(Math.random() * 1000 - 500) );
    }

    dontCheatOn(min);
    expect(min(1, 2)).to.equal(1);
    expect(min(97, 34, 15)).to.equal(15);
    expect(min(0, 0)).to.equal(0);
    expect(min(-17, 831, -78, -53)).to.equal(-78);
    expect(min.apply(null, numbers)).to.equal(Math.min.apply(null, numbers)); 

  });

});



describe('02 The Array Prototype', function() {
  var array;

  beforeEach(function() {
    array = [-1, true, 'abc', 0.5];
  });

  it('pop should remove and return the last item in an array', function() {

    dontCheatOn(pop);
    expect(pop(array)).to.equal(0.5);
    expect(pop(array)).to.equal('abc');
    expect(array.length).to.equal(2);
    expect(pop(array)).to.equal(true);
    expect(pop(array)).to.equal(-1);
    expect(pop(array)).to.equal(undefined);
    expect(array.length).to.equal(0);

  });

  it('push should add an item to end of an array and return the length', function() {

    dontCheatOn(push);
    expect(push(array, 7)).to.equal(5);
    expect(array[4]).to.equal(7);
    expect(array.length).to.equal(5);
    expect(push(array, 'banana')).to.equal(6);
    expect(array[5]).to.equal('banana');
    expect(array.length).to.equal(6);

  });

  it('shift should remove and return the first item in an array', function() {

    dontCheatOn(shift);
    expect(shift(array)).to.equal(-1);
    expect(shift(array)).to.equal(true);
    expect(array.length).to.equal(2);
    expect(shift(array)).to.equal('abc');
    expect(shift(array)).to.equal(0.5);
    expect(shift(array)).to.equal(undefined);
    expect(array.length).to.equal(0);

  });

  it('unshift should add a new item to the beginning of an array', function() {

    dontCheatOn(unshift);
    expect(unshift(array, 'kumqwat')).to.equal(5);
    expect(array[0]).to.equal('kumqwat');
    expect(array.length).to.equal(5);
    expect(unshift(array, 42)).to.equal(6);
    expect(array[0]).to.equal(42);
    expect(array.length).to.equal(6);

  });

  it('join should merge an array into a string', function() {

    dontCheatOn(join);
    expect(join(array, ' ')).to.equal('-1 true abc 0.5');
    expect(join(array)).to.equal('-1,true,abc,0.5');
    expect(join(array, 'banana')).to.equal('-1bananatruebananaabcbanana0.5');

  });

  it('reverse should reverse an array', function() {

    dontCheatOn(reverse);
    expect(reverse(array)).to.deep.equal([0.5, 'abc', true, -1]);
    expect(reverse([1, 2, 3])).to.deep.equal([3, 2, 1]);
    expect(reverse([])).to.deep.equal([]);

  });

  it('concat should combine any number of arrays', function() {

    dontCheatOn(concat);
    expect(concat(array, [1, 2, 3])).to.deep.equal([-1, true, 'abc', 0.5, 1, 2, 3]);
    expect(concat(array, 1, [], ['a', 'b'], 'cd')).to.deep.equal([-1, true, 'abc', 0.5, 1, 'a', 'b', 'cd']);
    expect(array).to.deep.equal([-1, true, 'abc', 0.5]);
    expect(concat([], [])).to.deep.equal([]);

  });

});



describe('03 The String Prototype', function() {

  it('keys should return an array with every key name in an object', function() {
    var obj = {a: undefined, b: 'c', 'd, e': true, '["f"]': ['g', 'h']};

    dontCheatOn(keys);
    expect( keys({i: 0}) ).to.deep.equal( ['i'] );
    expect( keys(obj) ).to.deep.equal( ['a', 'b', 'd, e', '["f"]'] );
    delete obj.a;
    delete obj['["f"]'];
    expect( keys(obj) ).to.deep.equal( ['b', 'd, e'] );
    expect( keys({}) ).to.deep.equal( [] );

  });

  it('slice should return either a substring or subarray', function() {

    dontCheatOn(slice);
    expect(slice('xxhixx', 2, 4)).to.equal('hi');
    expect(slice('preslice', 3)).to.equal('slice');
    expect(slice([1,2,3], 1, 17)).to.deep.equal([2, 3]);
    expect(slice(['a','b','c'], -1)).to.deep.equal(['c']);
    expect(slice('gonna slice it', -8, -3)).to.equal('slice');
    expect(slice(['no','slice'])).to.deep.equal(['no','slice']);
    expect(slice('empty', 4, 2)).to.equal('');
    expect(slice(['also','empty'], 17)).to.deep.equal([]);

  });

  it('trim should remove white space to either side of a string', function() {

    dontCheatOn(trim);
    expect(trim('hi  ')).to.equal('hi');
    expect(trim('   trimmed   ')).to.equal('trimmed');
    expect(trim('\t white space\n\v ')).to.equal('white space');
    expect(trim(' \r \f a b c')).to.equal('a b c');

  });

  it('replace should remove a piece of a string and replace it', function() {

    dontCheatOn(replace);
    expect(replace('abc', 'b', '')).to.equal('ac');
    expect(replace('hello world', 'hello', 'hi')).to.equal('hi world');
    expect(replace('prepend', '', 'this')).to.equal('thisprepend');
    expect(replace('quirk', 'u')).to.equal('qundefinedirk');
    expect(replace('abababa', 'b', 'c')).to.equal('acababa');

  });

});



describe('04 Extra Credit', function() {

  it('splice should remove a piece of an array, and insert any number of new arguments', function() {
    var array = [-1, true, 'abc', 0.5];

    dontCheatOn(splice);
    expect(splice(array, 3)).to.deep.equal([0.5]);
    expect(array).to.deep.equal([-1, true, 'abc']);
    expect(splice(array, 1, 1)).to.deep.equal([true]);
    expect(array).to.deep.equal([-1, 'abc']);
    expect(splice(array, 1, 0, 1)).to.deep.equal([]);
    expect(array).to.deep.equal([-1, 1, 'abc']);
    expect(splice(array, -1, 1, 'def', 'ghi')).to.deep.equal(['abc']);
    expect(array).to.deep.equal([-1, 1, 'def', 'ghi']);
    expect(splice(array, 0)).to.deep.equal([-1, 1, 'def', 'ghi']);
    expect(array).to.deep.equal([]);

  });

  it('split should turn a string into an array based on a delimiter', function() {

    dontCheatOn(split);
    expect(split('hello world', ' ')).to.deep.equal(['hello','world']);
    expect(split('abc', '')).to.deep.equal(['a','b','c']);
    expect(split('one element')).to.deep.equal(['one element']);
    expect(split('1123212331234', '123')).to.deep.equal(['1','2','3','4']);
    expect(split('truefalsetrue', 'true')).to.deep.equal(['false']);

  });

  it('sqrt should find the square root of a number', function() {

    dontCheatOn(sqrt);
    expect(sqrt(1)).to.equal(1);
    expect(sqrt(4)).to.equal(2);
    expect(sqrt(10000)).to.equal(100);
    expect(sqrt(0.25)).to.equal(0.5);
    expect(sqrt(2)).to.be.closeTo(1.4142135623730951, 0.0000000000000005);
    expect(sqrt(0.271828)).to.be.closeTo(0.5213712688670138, 0.0000000000000005);
    expect(sqrt(3141592)).to.be.closeTo(1772.4536665312298, 0.0000000000005);
    expect(sqrt(0)).to.equal(0);
    expect(sqrt(-1)).to.be.NaN;

  });

  it('parse should take a date string and return the milliseconds since January 1, 1970', function() {

    dontCheatOn(parse);
    expect(parse('23 Jun 1912')).to.equal(-1815332400000);
    expect(parse('1969-07-21T02:56:00Z')).to.equal(-14159040000);
    expect(parse('1984')).to.equal(441763200000);
    expect(parse('December 12, 1990')).to.equal(660981600000);
    expect(parse('14 Jul 2015 11:49 +00:00')).to.be.equal(1436874540000);
    expect(parse('2015-12-15')).to.equal(1450137600000);
    expect(parse('2016-03-31T01:27:00+06:00')).to.be.equal(1459366020000);
    expect(parse('Feb 31, 2099')).to.be.NaN;

  });

});
