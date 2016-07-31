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

musie.get('A4', 'major');
/*
Returns major scale starting from A4:
[
    {
        name: A4,
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
| minor  | m  |
| major  | M  |

## Available scales

| Scale  | Reference  |
|--------|------------|
| Chromatic  | chromatic  |
| Major Pentatonic  | majpentatonic  |
| Minor Pentatonic  | minpentatonic  |
| Major Scale  | major  |
| Aeolian Mode  | aeolian  |
