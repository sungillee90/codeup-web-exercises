'use strict';

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = ['a', 'e', 'i','o', 'u'];

    for (let i = 0; i < s.length; i++) {
        if(s.charAt(i).match(/[aeiou]/)) {
            console.log(s.charAt(i));
        }
    }
    for (let i = 0; i < s.length; i++) {
        if(s.charAt(i).match(/[^aeiou]/)) {
            console.log(s.charAt(i));
        }
    }

}


function main() {
    const s = readLine();

    vowelsAndConsonants(s);
}