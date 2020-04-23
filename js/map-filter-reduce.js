const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// todo Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const threeLanguagesUsers = users.filter( usersLang => usersLang.languages.length >= 3 );
console.log('threeLanguagesUsers',threeLanguagesUsers);

// todo Use .map to create an array of strings where each element is a user's email address
const usersEmailAddresses = users.map( usersEmail => usersEmail.email);
console.log(usersEmailAddresses);

// todo Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const totalYearsOfX = users.reduce((totalYears, year) =>
    totalYears + year.yearsOfExperience ,0);
console.log('totalYearsOfX =', totalYearsOfX, 'years');
console.log('Avg. yrs of Xperiences =',totalYearsOfX / users.length, 'years');

// todo Use .reduce to get the longest email from the list of users.

const longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        return user.email;
    } else {
        return longest;
    }
}, ''); //empty string initialize

console.log(longestEmail);


//     function countsWords(emailAdds) {
//         const emailAddressWords = users.email.split(' '); // takes users.email addresses and split it to the words
//         const longestEmailAdd = emailAddressWords.reduce((wordCounts, word) => {
//             if (typeof wordCounts[word] === 'undefined') {
//                 wordCounts[word] = 1;
//             } else {
//                 wordCounts[word] += 1;
//             }
//             return wordCounts;
//         }, {});
//         return longestEmailAdd;
//     }
//
//     countsWords('emailAdds');

// function findLongestWord(longestemail, user) {
//     if (longestemail === 'undefined') {
//         longestemail = user.email;
//     } else if(user.email.length > longestemail.length) {
//         longestemail = user.email;
//     } return longestemail;
//     // let usersEmailAddressWords = users.email.length();
//     // let longestWords = usersEmailAddressWords.reduce(function(longest, currentWord) {
//     //     if(currentWord.length > longest.length)
//     //         return currentWord;
//     //     else
//     //         return longest;
//     // }, "");
//     // return longestWords.length;
// }
//
// users.reduce(findLongestWord);
// console.log(users.reduce(findLongestWord));
// function findLongestEmail (emails, email) {
//
// }
// const longestEmail = users.reduce(( userIndex, person ) => {
//     if(typeof )
// },0);
//
// console.log(longestEmail);

//todo Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
                            // ACCUMULATOR , CURRENT
const everyone = users.reduce((names, user) => {
    // return names + ', ' + user.name;
    // return names + user.name +', ';
    if (names !== '') {
        names += ', ';
    }
    return names + user.name;
},'');

console.log('Your instructors are: ',everyone);

console.log('Using join instead of reduce:', users.map(user => user.email).join(', '));
console.log('Using join instead of reduce:', users.map(user => user.name).join(', '));
