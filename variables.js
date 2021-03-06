// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
//  * Store a future year in a variable.
//  * Calculate your 2 possible ages for that year based on the stored values.
//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

// const birthyear = 1994;
// const futureyear = 2021;

// const age = futureyear - birthyear;
// console.log('I will be either ' + age + ' or ' + (age - 1));


// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
//  * Store a maximum age in a constant variable.
//  * Store an estimated snack amount per day (as a number).
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

 //const age = 26;
 //const maxage = 100;
 //const snackPerday = 4;
 //const snacktotal = (snackPerday * 365) * (maxage - age);
 //console.log('you will need ' + snacktotal + ' to last until the age of ' + maxage)

// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

// const radius = 5;
// const circumference = 3.14 * 5^2
// const circumferenceresult = 31.4
// console.log("The circumference is " + circumferenceresult)
// const area = 3.14 * 5*5
// const areaofcircle = 78.5
// console.log("The area is " + areaofcircle)


// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
//  * Now store a fahrenheit temperature into a variable.
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."

// const celsius = 20;
// const celsiusInF = (celsius*9)/5 + 32;
// console.log(celsius + `C is ` + celsiusInF + `F`);
// const fT = 68;
// const fahrenheitInC = (fT - 32)*5/9;
// console.log(fT + `F is ` + fahrenheitInC + `F`);


// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
//  * Store Bob's grade on a test to a variable
//  * Store Cam's grade on a test to a variable
//  * Find the average grade of all students
//  * Store Dee's grade on a test to a variable
//  * Find the average grade of all students
//  * Print out if Dee's grade is higher than the class average

//const aGrade = 80;
//const bGrade = 95;
//const cGrade = 76;
//let avgGrade = (aGrade + bGrade + cGrade)/3;
//const dGrade = 95;
//const allStuAvg = (aGrade + bGrade + cGrade + dGrade)/4;
//console.log(dGrade + ` is higher than the class average ` + allStuAvg)


// ## Problem Six

// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
// * a = 123
// * Output:
// * 3

// Hint:
// Use the remainder % operator.

//const a = 123;
//const b = 30;
//const remainder = a % b;
//console.log('remainder =  ' + remainder)

// ## Problem Seven

// Alice's Age
// * x years from now Alice will be y times older than her brother Bob. Bob is 12 years old. How old is Alice?
// * Example 1
// * Input: 
// * x = 3
// * y = 2
// * bob = 12
// * Expected values: 
// * alice = 27
// 
// * Example 2
// * Input: 
// * x = 1
// * y = 3
// * bob = 12
// * Expected values: 
// * alice = 38

// * Hint:
// * alice + x = y * (bob + x)
// * Solve for alice

//const x = 3
//const y = 2
//const bob = 12
//const alice = y * (bob + x)
//console.log('alice is older than bob by ' + alice + ' years')

// ## Problem Eight

// * Cat and Dog Percentages
// * An animal daycare consists of `numberOfCats` cats and `numberOfDogs` dogs.
// * Print the percentage of dogs in the daycare followed by the percentage of cats in the class. The percentage should be printed rounded down to the nearest integer. For example 33.333333333333 will be printed as 33.
// * Example 
// * Input
// * numberOfCats = 20  
// * numberOfDogs = 60
// * Output:
// * 25% of the daycare animals are cats
// * 75% of the daycare animals are dogs

//const numberOfCats = 20;
//const numberOfDogs = 60;
//const totalAnimals = 80;
//const percentageOfCats = ((20/(numberOfCats + numberOfDogs))*100);
//const percentageOfDogs = ((60/(numberOfDogs + numberOfCats))*100);
//console.log(percentageOfCats +`%` + ' are cats ' + percentageOfDogs + `%` + ' are dogs'); 




// ## Problem Nine

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.  
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.

// function leapYear(input) {
//     let year = input;
//     let answer;
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//         answer = "Leap Year!";
//     } else {
//         answer = "Not a leap year!";
//     }
//     console.log(answer);
// }
 
// leapYear(2000);



// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
//     ```js
    // let num1 = 2
    // let num2 = 5
    // let num3 = num1 * num2
    // console.log(num3) // 10
//     

// b. 
//     ```js
    // let str = 'jel' 
    // str += 'lo'
    // console.log(str) //jello
//     ```

// c. 
//     ```js
    // let string =  'My favorite number is ';
    // let number = 42
    // let sentence = string + number
    // console.log(typeof(sentence)) //string
//     ```


