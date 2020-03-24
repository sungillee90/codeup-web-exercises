"use strict";
console.log("hello from while JS");

// Create a while loop that uses console.log() to create the output shown below
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

var i = 2;

while ( i <= 65536 ) {
    console.log('Multiple of 2 from 2 to 65536 : '+i);
    i = i * 2;
}

