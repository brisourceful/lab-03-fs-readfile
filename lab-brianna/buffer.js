'use strict';

const Buffer = require('buffer').Buffer;

let myBuffer = Buffer.from('Hello Buffy the Vampire Slayer');

console.log(myBuffer.toString('utf-8', 2, 8));
