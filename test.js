/*global describe, it*/

var inPlace = require('./index');
var expect = require('chai').expect;

describe('in-place', function() {

  describe('map', function() {
    it('works', function () {
      var arr = [1, 2, 3, 4, 5];

      var counter = 0;
      inPlace.map(arr, function (item, i) {
        expect(counter++).to.equal(i);

        return item * 2;
      });

      expect(arr).to.deep.equal([2, 4, 6, 8, 10]);
    });
  });

  describe('filter', function() {
    it('works', function () {
      var arr = [1, 12.1, 5.2, 22, 6];

      var counter = 0;
      inPlace.filter(arr, function (item, i) {
        expect(counter++).to.equal(i);

        return item < 10;
      });

      expect(arr).to.deep.equal([1, 5.2, 6]);
    });
  });

  describe('deleteIndex', function () {
    it('works', function () {
      var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

      inPlace.deleteIndex(arr, 2);

      expect(arr).to.deep.equal(['a', 'b', 'g', 'd', 'e', 'f']);
    });
  });

  describe('dedupe', function () {
    it('works', function () {
      var arr = [1, 2, 2, 5, 1, 6, 2];

      inPlace.dedupe(arr);

      expect(arr).to.deep.equal([5, 1, 6, 2]);
    });
  });

  describe('dedupeSorted', function () {
    it('works', function () {
      var arr = [1, 2, 2, 3, 5, 6, 6, 6];

      inPlace.dedupe(arr);

      expect(arr).to.deep.equal([ 1, 2, 3, 5, 6 ]);
    });
  });

});
