var expect = chai.expect;

var dontCheatOn = function(func) {
  var forbidden = [
    'Math', 
    'Array', 
    'Object', 
    'Date', 
    'Number',
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
    '.splice'
  ];

  forbidden.forEach(function(method) {
    expect(func + '').to.not.contain(method, 'No Cheating!');
  });
};

describe('01 The Math Object', function() {

  it('floor should round numbers down', function() {

    dontCheatOn(floor);
    expect(floor(1.5)).to.equal(1);
    expect(floor(-3.5)).to.equal(-4);
    expect(floor(100)).to.equal(100);
    expect(floor(0)).to.equal(0);
    expect(floor(-10003948302034.324)).to.equal(-10003948302035);

  });

  it('ceiling should round numbers up', function() {

    dontCheatOn(ceiling);
    expect(ceiling(1.5)).to.equal(2);
    expect(ceiling(-3.5)).to.equal(-3);
    expect(ceiling(100)).to.equal(100);
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



});


describe('03 The String Prototype', function() {



});


describe('04 Extra Credit', function() {



});
