/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages = [23, 13, 31];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

let [john, mary, joe] = ages
console.log(john, mary, joe)

// Destructuring objects

let jobs = {
    mike : "carpenter",
    tom : "plumber",
    harry : "developer",
};
// old style of doing

// let mike =jobs['mike'] 
// let tom = jobs['tom']
// let harry = jobs['harry']

let {mike, tom, harry} = jobs
console.log(mike, tom, harry)


// Destructuring subsets

let languages = ['english', 'french', 'spanish', 'chineese']
let [johnNative, johnSecondary] = languages
console.log(johnNative, johnSecondary)

let [, shahidNative, ,  shahidSecondary] = languages
console.log(shahidNative, shahidSecondary)

let languages2 = {
    firstlanguage: 'english',
    secondlanguage: 'french',
    thirdlanguage : 'german',
    fourthlanguage : 'japanese',
};

let {firstlanguage, fourthlanguage} = languages2
console.log(firstlanguage, fourthlanguage);

// Using rest parameter syntax

fruits = ['apple', 'organge', 'banana', 'peach', 'cherry'];
let [favourite, secondFav, ...others] = fruits
console.log(favourite)
console.log(secondFav)
console.log(others)

let favouriteFoods = {
    brian : 'pizza',
    anna : 'pasta',
    sarah : 'nodule',
    shahid : 'rice'
}

let {brian, anna, ...rest} = favouriteFoods;
console.log(brian)
console.log(anna)
console.log(rest)

