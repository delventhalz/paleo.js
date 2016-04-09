var expect = chai.expect;

describe('01 The Math Object', function() {

  it('floor should round numbers down', function() {

    expect(floor + '').to.not.contain('Math');
    expect(floor(1.5)).to.equal(1);
    expect(floor(-3.5)).to.equal(-4);
    expect(floor(100)).to.equal(100);
    expect(floor(0)).to.equal(0);
    expect(floor(-10003948302034.324)).to.equal(-10003948302035);

  });

});