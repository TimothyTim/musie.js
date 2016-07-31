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

function calculateScaleByIntervals(noteName, scaleByIntervals) {
  var scale = [];
  var newNote = _.clone(noteName);
  var fullNote = getNote(newNote);
  scale.push(fullNote);

  scaleByIntervals.forEach(function(interval) {
    var nextFullNote = extractNote(_.clone(newNote));
    newNote = intvl.getNote(nextFullNote, interval);
    scale.push(getNote(newNote));
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
