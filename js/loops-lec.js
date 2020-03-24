"use strict";
console.log("hello from loops js");

/*********************************************
 *                   WHILE LOOPS
 *********************************************/
// A while loop will run WHILE a certain condition is true
// while (condition) {
//  code runs.
// }

//TODO TOGETHER: Create a while loop that counts up to 10 (non-inclusive) by 1
// (0, 1, 2...9)

var i = 0;

while ( i < 10 ) {
    console.log ('while loop iteration #' + i ); // infinite loop! gotta make a way to stop
    i++; // or i = i + 1;
}




//TODO TOGETHER: Create a while loop that counts down from 20 to 0 (inclusive) by 1
// (20, 19, 18...0)

var i = 20;

while (i >= 0) {
    console.log('Count down from 20 to 0: ' +i);
    i--; // or i = i - 1;
}




//TODO TOGETHER: Create a while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)
// (0, 2, 4...20)

var i = 0;

// while (i <= 10) {
//     console.log(i * 2);
//     i++;
// }
while (i <= 20) {
    console.log('Count to 20 by 2s : ' +i);
    i += 2; //i = i + 2;
}



//TODO: Create a while loop that counts to 100 (inclusive) in increments of ten:
// (10...20...30...)

var i = 10;

while (i <= 100) {
    console.log('Count to 100 increments of 10: ' + i);
    i += 10;
}





//TODO: Create a while loop that counts down from 50 to 1 (inclusive) in increments of 1:
// (50, 49, 48, 47, 46 .... 1)

var i = 50;

while (i >= 1) {
    console.log('Count down from 50 to 1: ' + i);
    i = i - 1;
}





/*********************************************
 *               DO-WHILE LOOPS
 *********************************************/
// A do/while loop will run at least once.

// do {
//  // Code to be run.
// } while (condition);


// var i = 10;
//
// while (i < 10) {
// 	console.log('while loop iteration #' + i);
// 	i++;
// }


// TODO TOGETHER: Why doesnt the example above run?
// TODO TOGETHER: Refactor the example above using a do-while loop. What behavior do we notice?

var i = 10;

do {
    console.log('do-while loop iteration #: '+ i);
    i++;
} while (i < 10);





//TODO TOGETHER: Create a do-while loop that asks the user to confirm: "Would you like to exit?"
// keep asking questions until you get the answer (your idea)
do {
    var userConfirm = confirm ('Would you like to exit?');
    console.log('userConfirm: ' + userConfirm);
} while (userConfirm === false);





//TODO TOGETHER: Create a do-while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)
// (0, 2, 4...20)

var i = 0;

do {
    console.log('Do-while that counts to 20 by 2s: ' + i);
    i += 2; // i = i +2
} while ( i <= 20 );




//TODO: Create a do-while loop that prompts the user for a color and continues to prompt until the string passed is "blue"

// var userColor = prompt('What is your favorite color?');

do {
    var userColor = prompt('What is your favorite color?').toLowerCase();
    console.log('User\'s input: ' + userColor);
} while (userColor !== 'blue'); // why not === ?








/*********************************************
 *               FOR LOOPS
 *********************************************/
// For loops: Loops that are designed to run a given number of times.

// for (/*initialization*/; /*condition*/; /*increment*/) {
// 	// body
// }

//TODO TOGETHER: Explore basic for loop syntax

for (var i = 0; i < 10; i++) {
    console.log('for loop iteration #' + i);
}




// TODO TOGETHER: Write a for loop that loops through numbers 0 - 5 (inclusive);

for (var i = 0; i <= 5; i++) {
    console.log('for loop through 0 to 5: ' + i);
}

// Convert to while loop
var i = 0;

while ( i <= 5 ) {
    console.log('Using a while to count 0 to 5: ' + i );
    i++;
}



// TODO TOGETHER: Why are loops beneficial?
// b/c it able to run chunk of code over/over/over again.


// TODO TOGETHER: Console.log each color from the array randomColors
var randomColors = ["red","orange", "yellow", "blue", "green"]

// Without using loops.

console.log('randomColors[0]' + randomColors[0]);
console.log('randomColors[1]' + randomColors[1]);
console.log('randomColors[2]' + randomColors[2]);
console.log('randomColors[3]' + randomColors[3]);
console.log('randomColors[4]' + randomColors[4]);

// Using a for loop.

for (var i = 0; i < randomColors.length; i++) {
    console.log( 'randomColor using for-loop: ' + randomColors[i] );
}


// TODO TOGETHER: Using a for loop, log all even numbers 0 - 100;

for ( var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log('Logging all even numbers between 0 to 100: ' + i);
    }
}





// TODO: Using a for loop, log all numbers divisible by 5, from 0 - 100;

for ( i = 0; i <= 100; i++) {
    if ( i % 5 === 0) {
        console.log('Logging all numbers divisible by 5 ' + i);
    }
}





// TODO: Using a for loop, complete the FizzBuzz challenge:
//  Your program should count up to 100.
//  For numbers divisible by 3, log "Fizz"
//  For numbers divisible by 5, log "Buzz"
//  If divisible by 3 and 5, log "FizzBuzz"
//  All other cases, just log the number.

for ( var i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) // or (i % 15 === 0) for less wording :)
    {
        console.log('FizzBuzz');
    }else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log('logging number: ' + i);
    }
}






/*********************************************
 *              BREAKS & CONTINUES
 *********************************************/
// We can get a loop to stop using break;

var numberToStopAt = 5;

for (var i = 1; i < 100; i++) {

    console.log('Loop counter is: ' + i);

    if (i === numberToStopAt) {
        console.log('We have reached the stopping point: break!');
        // use the break keyword to exit from the while loop
        break;
        // nothing after the break will get processed
        console.log('You will never see this line.');
    }
}


// Using a for loop get the first 5 even # when counting from 0 to 100
var numOfEvenNumbersFound = 0;

for (var i = 0; i <= 100; i ++) {
    if (i % 2 === 0 && numOfEvenNumbersFound < 5) {
        console.log('First five even numbers. ' + i);
        numOfEvenNumbersFound++;
    }
}


// We can get an iteration to skip using continue;
'use strict';

for (var i = 1; i < 100; i++) {

    if (i % 2 !== 0) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }

    console.log('Here is a lovely even number: ' + i);
}
