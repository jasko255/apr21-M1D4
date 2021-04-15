/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

// let area = function(num1, num2){
//     return num1 * num2
// }
// console.log(area(11, 12));

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, 
but if the two values are the same then it should return their sum multiplied by 3.
*/
let crazySum = function(n1, n2){
    if (n1 === n2){
    return (n1 + n2) * 3
    } else {
        return n1 + n2
    }
}
console.log(crazySum(2,8));

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

let crazyDiff = function(n) {
    if(n <= 19) {
        return 19 - n
    }else {
        return (n - 19) * 3
    }

}

console.log(crazyDiff(31));

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

let boundary = function(n) {
    if ( n >= 20 && n <= 100) {
        return true
    } else if ( n === 400) {
        return true
    } else {
        return 'what else'
    }

}
console.log(boundary(20));
/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string,
if the given string already begins with "Strive", then it should just return the original string.
*/


// let strivify = function(a) {
//     // let addWord = 'Strive'
//     if (a[0].indexOf('Strive') === addWord) {
//         return  a
//     } else {
//         return addWord + a
//     }
// }

// console.log(strivify('Strive'));
/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

let check3and7 = function(b) {
    // let reminder = b % 3
    if((b % 3) === 0 && b >= 0 ) {
        return 'It is a multiple of 3'
    } else if ((b % 7) === 0 && b >= 0 ){
        return 'It is a multiple of 7'
    }else {
        return 'not a multiple of 3 nor 7'
    }

}
console.log(check3and7(35));

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

let reverseString = function(str1) {
let spl = str1.split('')
let rev = spl.reverse('')
let joi = rev.join('')
    return joi
    
}
console.log(reverseString('Strive'));

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

let upperFirst = function(capStr){
    return capStr.toUm
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

let cutString = function (stinCut){
    let strLeng = stinCut.length - 1
    return stinCut.slice(1, strLeng)
}

console.log(cutString('Kondziarz'));

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
let giveMeRandom = function(n9){
    let myRan = Math.floor(Math.random() * 10)
    let ranArra = []
    for (let i = 0; i > n9; i++) {
       ranArra.push(i)
    }

    return ranArra
}
console.log(giveMeRandom(9));

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/