var assert = require('chai').assert;
var index = require('../index.js');

describe('Musie', function() {
  describe('get', function() {
    it('should return a note with frequency and midi number data', function() {
        var noteData = index.get('A4');

        assert.deepEqual(noteData[0], {
            name: 'A4',
            number: 69,
            frequency: 440
        });
    });

    it('should return the specified chord specified along with a note', function() {
        var noteData = index.get('A4', 'chromatic');

        assert.deepEqual(noteData, [{
            name: 'A4',
            number: 69,
            frequency: 440
        },
        {
            name: 'A4',
            number: 69,
            frequency: 440
        },
        {
            name: 'A4',
            number: 69,
            frequency: 440
        }]);
    });
  });
});
