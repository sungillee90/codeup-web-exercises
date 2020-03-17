console.log("Hello from external JavaScript.");

// alert("Welcome to my Website!");
//
// var userInput = prompt ('What is your favorite color?');
// console.log('The user entered: ' + userInput);
// alert("Great, " + userInput + "  is my favorite color too!");

// Ex 3.1
var lilMermaid = prompt ('How many days do you want to rent Little Mermaid?');
console.log('The user entered: ' + lilMermaid);
var brotherBear = prompt ('How many days do you want to rent Brother Bear?');
console.log('The user entered: ' + brotherBear);
var hercules = prompt ('How many days do you want to rent Hercules?');
console.log('The user entered: ' + hercules);

alert("Have fun! The total amount came out to be " + (lilMermaid * 3 + brotherBear * 3 + hercules * 3) + " dollars");

// Ex 3.2
var googleRate = prompt ('How many hours did you work at Google?');
console.log('The contractor entered: ' + googleRate + ' hours')
var amazonRate = prompt ('How many hours did you work at Amazon?');
console.log('The contractor entered: ' + amazonRate + ' hours')
var facebookRate = prompt ('How many hours did you work at Facebook?');
console.log('The contractor entered: ' + facebookRate + ' hours')

alert("Great job! You have earned amount of " + (googleRate * 400 + amazonRate * 380 + facebookRate * 350) + " dollars");

// Ex 3.3
var classIsFull = false;
var classConflictsWithSchedule = false;
var areEnrolled = !classIsFull && !classConflictsWithSchedule;
alert("Congrats! You can take the class!" +areEnrolled );

// Ex 3.4
var numberOfItemsBought = prompt ('How many items did you make purchase?');
numberOfItemsBought = parseInt(numberOfItemsBought);
console.log('The customer bought ' + numberOfItemsBought + ' amounts of items');

var hasOfferExpired = false;
var isPremiumMember = false;

// you MUST go FALSE to go to next step, if there is true JS automatically stops there!
if (isOfferValid = (isPremiumMember && !hasOfferExpired) || ((numberOfItemsBought >= 2) && !hasOfferExpired)) {
    alert("Good news! Your offer is valid! " + isOfferValid);
    }else {
    alert("Sorry your offer is expired or not enough items purchased to get the offer.")
}
