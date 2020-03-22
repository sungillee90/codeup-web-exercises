"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var userConfirm = confirm("Would you like to enter a number?");
if (userConfirm === true) {
    var userInputNumber = prompt("Enter the number you like");
} else {
    alert("Good bye");
}

var userInputNumber = parseInt(userInputNumber);

// if ( userInputNumber % 2 === 0 ) {
//     alert("The number you entered is even number.");
// } else if ( userInputNumber > 0) {
//     alert("The value you entered is positive.");
// } else if ( userInputNumber < 0) {
//     alert("The value you entered is negative.");
// } else {
//     alert("Please enter number only!")
// }

// Changed to function
// // Even or ODd
// function evenOrOdd (aNumber) {
//     if (aNumber % 2 === 0) {
//         return "Even number";
//     } else {
//         return "Odd number";
//     }
// }
// alert('The number is ' + evenOrOdd(userInputNumber));
//
// // Positive or Negative
// function posOrNeg (aNumber) {
//     if (aNumber > 0) {
//         return "Positive number";
//     } else {
//         return "Negative number";
//     }
// }
// alert('And also ' + posOrNeg(userInputNumber));
//
// // plus100
// function plus100 (aNumber) {
//     return (aNumber + 100);
// }
// alert('And also plus 100 is ' + plus100(userInputNumber));

if (isNaN(userInputNumber)) {
    alert("You didn't enter a number");
} else {
    // Even or ODd
    function evenOrOdd (aNumber) {
        if (aNumber % 2 === 0) {
            return "Even number";
        } else {
            return "Odd number";
        }
    }
    alert('The number is ' + evenOrOdd(userInputNumber));

// Positive or Negative
    function posOrNeg (aNumber) {
        if (aNumber > 0) {
            return "Positive number";
        } else {
            return "Negative number";
        }
    }
    alert('And also ' + posOrNeg(userInputNumber));

// plus100
    function plus100 (aNumber) {
        return (aNumber + 100);
    }
    alert('And also plus 100 is ' + plus100(userInputNumber));
}

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor (colorName) {
    if ( colorName === 'blue'){
        return "blue is the color of the sky";
    } else if ( colorName === 'red' ) {
        return "Strawberries are red";
    } else if ( colorName === 'cyan') {
        return "I don't know anything about cyan";
    } else {
        return "Please choose among blue, red, or cyan";
    }
}

console.log( analyzeColor('blue') );
console.log( analyzeColor('red') );
console.log( analyzeColor('cyan') );


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
function rainbowGenerator (aColor) {
    return rainbowGenerator();
}
console.log( 'result of generated random color from rainbow is: ' + randomColor );
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
switch (randomColor) {
    case 'red':
        console.log('Red is first color of the rainbow');
        break;
    case 'orange':
        console.log('Orange is second color of the rainbow');
        break;
    case 'yellow':
        console.log('Yellow is third color of the rainbow');
        break;
    case 'green':
        console.log('Green is fourth color of the rainbow');
        break;
    case 'blue':
        console.log('Blue is fifth color of the rainbow');
        break;
    case 'indigo':
        console.log('Indigo is sixth color of the rainbow');
        break;
    case 'violet':
        console.log('Violet is seventh color of the rainbow');
        break;
    default:
        console.log('I love rainbow!');
        break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userInputColor = prompt('Enter one of colors among \'blue\', \'red\',\'cyan\'').toLowerCase();
analyzeColor();
alert(analyzeColor(userInputColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var luckynumber =  Math.floor((Math.random() * 5));
var totalprice = 100;
console.log(luckynumber);

function calculateTotal (luckynumber, totalprice){
    if ( luckynumber === 0 ) {
        return totalprice ;
    } else if (luckynumber === 1) {
        return totalprice - (totalprice * 0.10);
    } else if (luckynumber === 2) {
        return totalprice - (totalprice * 0.25);
    } else if (luckynumber === 3) {
        return totalprice - (totalprice * 0.35);
    } else if (luckynumber === 4) {
        return totalprice - (totalprice * 0.50);
    } else if (luckynumber === 5) {
        return 0;
    }
}
console.log(calculateTotal(luckynumber, totalprice));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

var luckyNumber = Math.floor(Math.random() * 6);
console.log('luckyNumber: ', luckyNumber);