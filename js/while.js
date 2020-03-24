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

// Problem 2


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var numberOfConesToPurchase = Math.floor(Math.random() * 5) + 1;

console.log('Amount of cones to sell today: ' + allCones);
console.log('I want to purchase ' + numberOfConesToPurchase + ' cones today! :)');

// do-while

do {
    // var itemsLeft = (allCones - numberOfConesToPurchase)
    console.log('Items left: ' + allCones);
    allCones = allCones - numberOfConesToPurchase;
    if (numberOfConesToPurchase > allCones) {
        console.log('Cannot sell you ' + numberOfConesToPurchase + ' cones I only have ' + allCones);
    } else if (allCones === 0) {
        console.log('Yay I sold them all!');
    }
} while (allCones > 0);
