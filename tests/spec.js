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

    it('should return the specified chord relating to the root note provided', function() {
        var noteData = index.get('A3', 'm');

        assert.deepEqual(noteData, [{
            name: 'A3',
            number: 57,
            frequency: 220.00
        },
        {
            name: 'C4',
            number: 60,
            frequency: 261.63
        },
        {
            name: 'E4',
            number: 64,
            frequency: 329.63
        }]);
    });

    it('should return the specified scale relating to the root note provided', function() {
        var noteData = index.get('A3', 'diatonic');

        assert.deepEqual(noteData, [{
                name: 'A3',
                number: 57,
                frequency: 220.00
            },
            {
                name: 'B3',
                number: 59,
                frequency: 246.94
            },
            {
                name: 'C#4',
                number: 61,
                frequency: 277.18
            },
            {
                name: 'D4',
                number: 62,
                frequency: 293.66
            },
            {
                name: 'E4',
                number: 64,
                frequency: 329.63
            },
            {
                name: 'F#4',
                number: 66,
                frequency: 369.99
            },
            {
                name: 'G#4',
                number: 68,
                frequency: 415.3
            }
        ]);
    });
  });
});
