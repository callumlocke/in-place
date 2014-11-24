/*global describe, it*/

var lightArray = require('./index');
var expect = require('chai').expect;

var sortAlpha = function (a, b) {
  if (a > b) return 1;
  if (b > a) return -1;
  return 0;
};

describe('light-array', function() {

  describe('filterInPlace', function() {
    it('works', function () {
      var animals = [
        'dog', 'cat', 'banana', 'salamander',
        'elephant', 'mouse', 'giraffe', 'orange'
      ];

      var counter = 0;
      lightArray.filterInPlace(animals, function (item, i) {
        expect(counter++).to.equal(i); // index increments normally

        return item !== 'banana' && item !== 'orange';
      });

      expect(animals).to.deep.equal([
        'dog', 'cat', 'salamander', 'elephant', 'mouse', 'giraffe'
      ]);
    });
  });

  describe('removeItemByIndex', function () {
    it('works', function () {
      var animals = [
        'dog', 'cat', 'banana', 'salamander',
        'elephant', 'mouse', 'giraffe', 'orange'
      ];

      lightArray.removeItemByIndex(animals, 2);

      expect(animals.sort(sortAlpha)).to.deep.equal([
        'dog', 'cat', 'salamander', 'elephant',
        'mouse', 'giraffe', 'orange'
      ].sort(sortAlpha));
    });
  });

  describe('dedupe', function () {
    it('works', function () {
      var animals = [
        'dog', 'cat', 'banana', 'salamander',
        'elephant', 'mouse', 'dog', 'orange',
        'dog', 'dog', 'hamster', 'dog'
      ];

      lightArray.dedupe(animals);

      expect(animals).to.deep.equal([
        'cat', 'banana', 'salamander', 'elephant',
        'mouse', 'orange', 'hamster', 'dog'
      ]);
    });
  });

  describe('dedupeSorted', function () {
    it('works', function () {
      var animals = [
        'cat', 'banana', 'salamander',
        'elephant', 'mouse', 'dog', 'orange',
        'dog', 'dog', 'hamster', 'dog'
      ];

      lightArray.dedupeSorted(animals.sort(sortAlpha));

      expect(animals).to.deep.equal([
        'cat', 'banana', 'salamander', 'elephant',
        'mouse', 'orange', 'hamster', 'dog'
      ].sort(sortAlpha));
    });
  });

});
