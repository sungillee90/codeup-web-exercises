console.log("BOM lecture");

var numberOfTimesRun = 0;

var intervalFunction = function () {
    console.log('Are we there yet? ' + numberOfTimesRun)
    numberOfTimesRun++;
};

intervalFunction();

// var interval = setInterval(function(){
//     console.log('Are we there yet? ' + numberOfTimesRun)
//     numberOfTimesRun++;
// },1000);

//
// //                                     NO () after function
// var interval = setInterval(intervalFunction, 1000);
// console.log('interval: ' + interval);
// to stop the interval USE : clearInterval(interval);

var names = ["Doug", "Fer", "Dimitri", "Christian"];


// Higher Order Functions
function myForEach(array, callback) {
    for(var index = 0; index < array.length; index++) {
        callback(array[index], index, array);
    }
}

myForEach( names, function(name, index, currentArray) {
    console.log('element: ' + name);
    console.log('current index: ' + index);
    console.log('Entire array: ' + currentArray);
});


console.log('Using an anonymous function assigned to a var.');

var processElement = function(name, index, currentArray) {
    console.log('element: ' + name);
    console.log('current index: ' + index);
    console.log('Entire array: ' + currentArray);
};

myForEach(names, processElement);

setTimeout(intervalFunction, 5000);
setTimeout(function() {
    console.log('Hello two secs from the page load');
}, 2000)