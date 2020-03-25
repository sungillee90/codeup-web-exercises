var userNumber = 0; // To use it later  after while loop

do {
    userNumber = Number(prompt('Please enter a number between 1 and 50.'));
    if (userNumber < 1 || userNumber > 50 ){
        alert(userNumber + " is not between 1 and 50. Please try again.");
    } else if (userNumber % 2 === 0) {
        alert(userNumber + ' is not odd. Please try again.');
    } else if (isNaN(userNumber)) {
        alert(userNumber+ ' is not a number. Please try again.');
    } else {
        alert('Yay! You entered a valid number.');
        break;
    }
    // console.log(userNumber);
    // console.log('Breaking out');
    // break;
} while (true);

console.log('Number to skip is: ' + userNumber)

for (var i = 1; i <= 50; i += 2) { // i+= 2 to get the ODD Number
    if (i === userNumber) {
        console.log("Yikes!: Skipping number: " + userNumber)
        continue;
    }
    console.log('Here is an ODD number: ' + i);
}