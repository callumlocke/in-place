/*
 * light-array
 * https://github.com/callumlocke/light-array
 *
 * Copyright (c) 2014 Callum Locke
 * Licensed under the MIT license.
 */

'use strict';

module.exports = {


  filterInPlace: function(array, check) {
    var length = array.length, i, k, item;

    // iterate through, moving check-passing items to the front
    for (i = 0, k = 0; i < length; i++) {
      item = array[k] = array[i];

      if (check(item, i)) k += 1; // this one can stay
    }

    // truncate the array after the last item that passes the check
    array.length = k;
  },


  removeItemByIndex: function (array, i) {
    // copy the last item and use it to replace the target index
    var lastIndex = array.length - 1;
    array[i] = array[lastIndex];

    // remove the last item
    array.length = lastIndex;
  },


  dedupe: function (array) {
    var length = array.length,
        i, k, item, j, existsAhead;

    for (i = 0, k = 0; i < length; i++) {
      item = array[k] = array[i];

      // look ahead
      existsAhead = false;
      for (j = i + 1; j < length; j++) {
        if (array[j] === item) {
          existsAhead = true;
          break;
        }
      }

      if (!existsAhead) k += 1; // this one can stay
    }

    array.length = k;
  },


  dedupeSorted: function (array) {
    var length = array.length,
        i, k, item;

    for (i = 0, k = 0; i < length; i++) {
      item = array[k] = array[i];

      if (array[i + 1] !== item) k += 1; // this one can stay
    }

    array.length = k;
  }


};
