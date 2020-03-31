(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = new Object();
    console.log(typeof person);

    var person2 = {
        firstName: "Sung",
        lastName: "Lee"
    }

    person.firstName = "Rick";
    person.lastName = "Sanchez";

    console.log(person);
    console.log(person.firstName)
    console.log(person.lastName)
    console.log(person2.firstName)
    console.log(person2.lastName)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return ("Hello from " + person.firstName + " " + person.lastName);
    }
    console.log(person.sayHello());
// "this" is referring person2. And "this" is shorter than "person2" so it is better to use this.
    person2.sayHello2 = function () {
        return "Hello from " + this.firstName + " " + this.lastName + " !" ;
    }
    person2["sayHello2"] = function() {
        return "Hello from " + this.firstName + " " + this.lastName + " !" ;
    }
    // three different ways to solve it (Use Object).

    console.log(person2.sayHello2());
    console.log(person2.sayHello2());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
        //    array of Objects.
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    console.log(shoppers);

    shoppers.forEach(function(aShopper) {
        var discountedPrice = aShopper.amount;
        var discount = 0;
        if(aShopper.amount > 200) {
            // get a discount
            discount = 12;
            discountedPrice = 0.88 * aShopper.amount;
        }
        console.log(aShopper.name + ' ' + 'Amount: ' + aShopper.amount+ ' discount: ' + discount + '% ' + 'discountedPrice: $' +discountedPrice);
        // console.log("Shopper: " + aShopper.name + " -- Amount: " + aShopper.amount)
    });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "The Salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams"
            }
        },
        {
            title: "Walkaway",
            author: {
                firstName: "Cory",
                lastName: "Doctorow"
            }
        },
        {
            title: "A Brief History of Time",
            author: {
                firstName: "Stephen",
                lastName: "Hawking"
            }
        },
        {
            title: "Garfield at Large",
            author: {
                firstName: "Jim",
                lastName: "Davis"
            }
        },
        {
            title: "Cosmic Ser",
            author: {
                firstName: "Index",
                lastName: "Four"
            }
        }
    ];
    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);
    console.log(books[1].title);
    console.log(books[1].author.firstName);
    console.log(books[1].author.lastName);
    console.log(books[2].title);
    console.log(books[2].author.firstName);
    console.log(books[2].author.lastName);
    console.log(books[3].title);
    console.log(books[3].author.firstName);
    console.log(books[3].author.lastName);
    console.log(books[4].title);
    console.log(books[4].author.firstName);
    console.log(books[4].author.lastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // used .push with "function" I made for bonus exercise.
    books.push(createBook("Who Moved My Cheese?", "Pepper Jack"));
    books.push(createBook("Harry Potter",  "JK Rowling"));


    books.forEach(function(book, index,) {
        console.log( "Book # " + (index + 1) );

        // console.log( "Title: " + book.title );
        // console.log( "Author: " + book.author.firstName + " " +book.author.lastName );
        showBookInfo(book);

        console.log( "--- " );
    });



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    //Stephen Hawking

    function createBook (aTitle, authorName) {
        var names = authorName.split( " " );
        return {
            title: aTitle,
            author: { // authorName.author.firstName + ' ' + authorName.author.lastName
                firstName: names[0],
                lastName: names[1]
            }
        };
    }

    function showBookInfo (book) {
        console.log( "Title: " + book.title );
        console.log( "Author: " + book.author.firstName + " " +book.author.lastName );
        console.log( "--- " );
    }


    // console.log( createBook("Harry Potter",  "JK Rowling"));


})();
