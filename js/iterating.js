(function(){
    "use strict";
    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["Sung","Jenny","Dad- Young Hyuk","Mom- Ueon Woo"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log('names.length: '+ names.length);
    console.log(names);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log('names[0]: ' + names[0]);
    console.log('names[1]: ' + names[1]);
    console.log('names[2]: ' + names[2]);
    console.log('names[3]: ' + names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var nameIndex = 0; nameIndex < names.length; nameIndex++) {
        console.log('For-loop to log every item in the names: ' + nameIndex, names[nameIndex]);
        // console.log('name 2: ' + nameIndex, names[nameIndex]);
        // console.log('name 3: ' + nameIndex, names[nameIndex]);
        // console.log('name 4: ' + nameIndex, names[nameIndex]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(item) {
        console.log('Here is lovely my family names (forEach): ' + item + '.');
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function first (array) {
        return array[0];
    }
    function second (array) {
        return array[1];
    }
    function last (array) {
        return array[array.length-1]; //LAST ONE === ARRAY.[LENGTH - 1]
    }

    var numbers = [1, 2, 3, 4, 5];
    var result = first(numbers);
    console.log('1: First ():' ,result === 1);
    result = first(names);
    console.log('2: test:' ,result === "Sung");

    result = second(numbers);
    console.log('1: Second ():' ,result === 2);
    result = second(names);
    console.log('2: Second ():' ,result === "Jenny");

    result = last(numbers);
    console.log('1: Last ():' ,result === 5);
    result = last(names);
    console.log('2: Last ():' ,result === "Mom- Ueon Woo");

})();
    // What I did...

    // var numbers = ["1", "2", "3", "4", "5"];
    // console.log('numbers.length: '+ numbers.length);
    //
    // numbers.forEach(function(numbers) {
    //     console.log('Here is numbers using ForEach : ' + numbers);
    // });
    // function aNumbers(aNum) {
    //
    // }
