var _ = require('lodash');

var intvl = require('./libs/Interval.js');
var sequences = require('./constants/sequences.js');
var Music = require('./libs/MusicUtil.js');

function getNote(noteName) {
    return {
        name: noteName,
        number: Music.noteNameToNoteNumber(noteName),
        frequency: Music.noteNameToFrequency(noteName)
    };
}

function extractNote(noteName) {
    var regEx = /(\d+)/;

    return {
        name: noteName.replace(regEx, ''),
        octave: parseInt(regEx.exec(noteName)[0]),
        fullName: noteName
    };
}

function getInterval(intervalName) {
    switch (intervalName) {
        case 'm2':
            return 1;
        case '2':
            return 2;
        case 'm3':
            return 3;
        case '3':
            return 4;
        case '4':
            return 5;
        case 'aug4':
        case 'dim5':
            return 6;
        case '5':
            return 7;
        case 'aug5':
        case 'm6':
            return 8;
        case '6':
            return 9;
        case 'm7':
        case '7':
            return 10;
        case 'M7':
            return 11;
        default:
            return 0;
    }
}

function calculateScaleByIntervals(noteName, scaleByIntervals) {
  var scale = [];
  var rootNote = _.clone(noteName);
  var fullRootNote = getNote(rootNote);
  scale.push(fullRootNote);

  scaleByIntervals.forEach(function(intervalByName) {
    var intervalByStepVal = getInterval(intervalByName);
    var nextFullNote = extractNote(_.clone(rootNote));
    nextFullNote = intvl.getNote(nextFullNote, intervalByStepVal);
    scale.push(getNote(nextFullNote));
  });

  return scale;
}

var Musie = {};

Musie.get = function(note, sequence) {
    var intervalSequence = sequences[sequence];

    if (!note) return "No note provided";
    if (!intervalSequence) intervalSequence = [];

    return calculateScaleByIntervals(note, intervalSequence);
};

module.exports = Musie;
