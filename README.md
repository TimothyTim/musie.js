# musie.js [![build status](https://travis-ci.org/TimothyTim/musie.js.svg)](https://travis-ci.org/TimothyTim/musie.js)

A super-simple javascript music framework. By referencing a note name and (optionally) a scale or chord, this library will return one or a series of note objects.

# Install

``` js
npm install musie
```

## Examples

``` js
var musie = require('musie');

musie.get('A4');
/*
Returns A4:
[{
    name: A4,
    number: 57,
    frequency: 220.00
}]
*/

musie.get('A3', 'major');
/*
Returns major scale starting from A4:
[
    {
        name: A3,
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
    and so on....
]
*/
```

## Available chords

| Chord  | Reference  |
|--------|------------|
| Minor | m  |
| Major | M  |
| Minor 7 | m7  |
| Major 7 | maj7  |
| Dominant 7 | dom7  |
| Diminished 7 | dim7  |

## Available scales

| Scale  | Reference  |
|--------|------------|
| Chromatic  | chromatic  |
| Major  | major  |
| Natural Minor  | natural_minor  |
| Harmonic Minor  | harmonic_minor  |
| Melodic_minor  | melodic_minor  |
| Phrygian mode  | phrygian  |
| Lydian mode  | lydian  |
| Mixolydian mode  | mixolydian  |
| Locrian mode  | locrian  |
| Whole tone  | whole_tone  |
| Blues scale  | blues  |
| Major blues scale  | major_blues  |
| Minor pentatonic  | minor_pentatonic  |
| Major pentatonic  | major_pentatonic  |
| Diminished scale  | diminished  |
| Whole half diminished scale | whole_half  |
| Dorian b2  | dorian_b2  |
| Lydian augmented  | lydian_augmented  |
| Lydian dominant  | lydian_dominant  |
| Mixolydian b6  | mixolydian_b6  |
| Half diminished  | half_diminished  |
| Altered scale  | altered  |
| Augmented scale  | augmented  |
| Bebop dominant  | bebop_dominant  |
| Bebop major  | bebop_major  |
| Bebop minor  | bebop_minor  |
| Bebop dorian  | bebop_dorian  |
