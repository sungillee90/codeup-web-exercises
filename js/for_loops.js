"use strict";

function showMultiplicationTable (aNumber) {
    for (var i = 1; i <= 10; i++) {
        // for (var j = 0; j <= 10; j++) {
            var answer = aNumber * i;

            console.log(aNumber + ' x ' + i + ' = ' + answer);
        //     if(i == 0 && j > 0){
        //         result += '[' + j + ']';
        //     }
        //     else if(j == 0 && i>0){
        //         result += '[' + i + '] ';
        //     }
        //     else if(i>0 && j>0){
        //         result += (i*j) + ' ';
        //     }
        // }
        // result += '\n'
    }
    // return "All done!";
}
    console.log(showMultiplicationTable(7));

// console.log('Multiplication Table of '+ showMultiplicationTable(7) );



// Problem #3

for (var i = 0; i < 10; i++) {
    var aRandomNum = Math.floor(Math.random() * 180) + 20;

    if (aRandomNum % 2 === 0) {
        console.log(aRandomNum + ' is even');
    } else {
        console.log(aRandomNum + ' is odd');
    }
}

// Problem #4

for (var i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}

// To repeat number by the number of the input.
//.repeat() but make sure datatype correct!

for (var outer = 1; outer <= 0; outer ++) {

    // console.log('outer loop: ' + outer);
    var output = "";

    for (var inner = 1; inner <= outer; inner++) {
        output += outer;
    }
    console.log(output);
}


// #5
for (var i = 100; i >= 5; i -= 5) {
    console.log('Countdown by 5s: ' + i );
}