/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

var should = chai.should();

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  // var assert = function(isTrue) {
  //   if(!isTrue) {
  //     throw new Error('Test failed');
  //   }
 
  //};

  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/

  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4234567891123').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4234567891123456').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4234567891123456789').should.equal('Visa');
  });
});



describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/

    for (var k = 51; k < 56; k++) {
      (function(k) {
        it(`has a prefix of ${k} and a length of 16`, function() {
          detectNetwork(`${k}34567891123456`).should.equal('MasterCard');
        });
      })(k)
    }
  
  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
      it(`has a prefix of 6011 and a length of 16`, function() {
        detectNetwork('6011567891123456').should.equal('Discover');
    });
      it(`has a prefix of 6011 and a length of 19`, function() {
        detectNetwork('6011567891123456789').should.equal('Discover');
    });
      
  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it(`has a prefix of ${prefix} and a length of 16`, function() {
        detectNetwork(`${prefix}4567891123456`).should.equal('Discover');
      });
      it(`has a prefix of ${prefix} and a length of 19`, function() {
        detectNetwork(`${prefix}4567891123456789`).should.equal('Discover');
      });
    })(prefix)
  } 

  it('has a prefix of 65 and a length of 16', function() {
        detectNetwork('6534567891123456').should.equal('Discover');
    });
      it('has a prefix of 65 and a length of 19', function() {
        detectNetwork('6534567891123456789').should.equal('Discover');
    });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  for (var length = 8; length <= 15; length++) {
    (function(length) {
      it(`has a prefix of 5018 and a length of ${length + 4}`, function() {
        detectNetwork('5018' + '0'.repeat(length)).should.equal('Maestro');
      });
      it(`has a prefix of 5020 and a length of ${length + 4}`, function() {
        detectNetwork('5020' + '0'.repeat(length)).should.equal('Maestro');
      });
      it(`has a prefix of 5038 and a length of ${length + 4}`, function() {
        detectNetwork('5038' + '0'.repeat(length)).should.equal('Maestro');
      });
      it(`has a prefix of 6034 and a length of ${length + 4}`, function() {
        detectNetwork('6304' + '0'.repeat(length)).should.equal('Maestro');
      });
    })(length);
  };
});

describe('should support China UnionPay', function() {
  var prefixes = ['624', '625', '626'];

  for (var i = 622126; i <= 622925; i++ ) {
    prefixes.push(i.toString());
  }

  for (var k = 6282; k <= 6288; k++ ) {
    prefixes.push(k.toString());
  }

  for (var j = 0; j < prefixes.length; j++) {
    var pref = prefixes[j];
    for (var length = 16; length <= 19; length++) {
      (function(length){
        (function(pref) {
          it('has a prefix of ' + pref + ' and a length of ' + length, function() {
            detectNetwork(pref + '0'.repeat(length-(pref.length))).should.equal('China UnionPay');
          });
        })(pref);
      })(length);
    }
  };
});

describe('should support Switch', function() {
  var prefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  for (var i = 0; i < prefixes.length; i++) {
    var pref = prefixes[i];
    for (var length = 16; length <= 19; length++) {
      if (length === 17) {continue; }
      (function(length) {
        (function(pref) {
          it('has a prefix of ' + pref + ' and a length of ' + length, function() {
            detectNetwork(pref + '0'.repeat(length-(pref.length))).should.equal('Switch');
          });
        })(pref);
      })(length);
    }
  }
});
