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