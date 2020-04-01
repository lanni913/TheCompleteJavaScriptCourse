/*****************************
 * Variables and data types
 */
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _years = 3;
*/

/**************************************
 * Variable mutation and type coercion
 */
/*
var firstName = 'John';
var age = 28;

// Type Coercion - Auto changes data type to create single string
console.log(firstName + ' ' + age);

// Type Coercion - Auto changes data type to create single string Boolean to String
var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old' + job + '. Is Married? ' + isMarried);

//Variable Mutation - Change Value of Variable
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is Married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/************************************
 * Basic Operators
 */
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 18);

//Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//Type of Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/
/*******************************
 * Operator Precedence
 */
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge)

// Grouping Operators
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = (3 + 5) * 4 - 6;
console.log(x);

x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More Operators

x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x); */

// Coding Challenge 1

//Setting Variables for Height and Weight for Mark and John
/*
var markWeight = 120; // kg
var johnWeight = 110;
var markHeight = 1.80; // meters
var johnHeight = 1.70;

// Calculating BMI
var markBMI = markWeight / (markHeight * 2);
var johnBMI = johnWeight / (johnHeight * 2);
var isMarkBMI = markBMI > johnBMI;

console.log('Is Marks BMI higher than Johns?' + ' ' + isMarkBMI); */

/* var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var markWeight = 120; // kg
var johnWeight = 110;
var markHeight = 1.80; // meters
var johnHeight = 1.70;

// Calculating BMI
var markBMI = markWeight / (markHeight * 2);
var johnBMI = johnWeight / (johnHeight * 2);
var isMarkBMI = markBMI > johnBMI;

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('Johns\'s BMI is higher than Marks\'s');

} */

//console.log('Is Marks BMI higher than Johns?' + ' ' + isMarkBMI);

/**************************************
 *  Boolean Logic
 */
/*
var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.')
} else if (age >= 13 && age < 20) { //Between 13 and 20
    console.log(firstName + ' is a teenager.');
} else if (age > 20 && age < 30) {
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is a man.');
} */

// Ternary Operators and Conditional Code
/*
var firstName = 'John';
var age = 16;
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink); */

/* (if (age >= 18) {
    var drink = 'beer';
 }  else {
        var drink = 'juice';
    }
    ) This is the same as code as the Ternary Code above, but using if else */

// Switch Statement
/* var job = 'cop';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code. ');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon. ');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites. ');
        break;
    default:
        console.log(firstName + ' does something else. ');
}

age = 31
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age > 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man');
} */

/******************************************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values
/*
var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
} */

/* *******************************************
 * Coding Challenge 2
 */
/*
var teamJohn = ('John\'s team');
var teamMike = ('Mike\'s team');
var teamMary = ('Mary\'s team');

var avgJohn = ((89 + 120 + 103) / 3);
var avgMike = ((116 + 94 + 123) / 3);
var avgMary = ((97 + 134 + 105) / 3);
console.log(avgJohn, avgMike, avgMary);

switch (true) {
    case (avgJohn > avgMike && avgJohn > avgMary):
        console.log(teamJohn + ' average of ' + avgJohn + ' points per game is more than ' + teamMike + ' and ' + teamMary);
        break;
    case (avgMike > avgJohn && avgMike > avgMary):
        console.log(teamMike + ' average of ' + avgMike + ' points per game is more than ' + teamJohn + ' and ' + teamMary);
        break;
    case (avgMary > avgJohn && avgMary > avgMike):
        console.log(teamMary + ' average of ' + avgMary + ' points per game is more than ' + teamJohn + ' and ' + teamMike);
        break;
    default:
        console.log('All three teams average ' + avgJohn + ' points per game.')
} */

/**************************************
 * Functions
 */
/*
function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1974);
var ageMike = calculateAge(1969);
var ageJane = calculateAge(1942);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired')
    }
}

yearsUntilRetirement(1974, 'John');
yearsUntilRetirement(1969, 'Mike');
yearsUntilRetirement(1942, 'Jane'); */

/********************************************
 * Function Statements and Expressions
 */


// Function Declaration - Expects Immediate Results
//function whatDoYouDo(job, firstName) {}


//Function Expression - Does not expect Immediate Values
/*
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Mike'));
console.log(whatDoYouDo('designer', 'Jane')); */

/********************************************
 * Arrays
 */

/*
// Initialize New Array 
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

//Mutate array data
names[1] = 'Jill';
names[names.length] = 'Mary';
console.log(names);

// Different Data Types

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue'); //adds item to end of array
john.unshift('Mr.'); //adds item to beginning of array
console.log(john);

john.pop(); //removes the last item from the array
john.shift(); //removes the first item in the array
console.log(john);
console.log(john.indexOf(23));

var designer = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer'
console.log(designer); */

// Coding Challenge 3
/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}
var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
];
var finalValues = [bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2],
];
console.log(tips);
console.log(finalValues); */

// Objects and Properties
/*
// Object Literals
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: '1990',
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
var x = 'birthYear';
console.log(john['lastName']);
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// Object Syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane); */

/************************************
 * Object and Methods
 */
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: '1974',
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2020 - this.birthYear; // this = current object i.e. john
    }
};

john.calcAge();
console.log(john); */

// Coding Challenge 4
/*
var john = {
    fullName: 'John Smith',
    mass: 90, //kg
    height: 1.6, //m
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Jones',
    mass: 90, //kg
    height: 1.7, //m
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + '\'s BMI is ' + john.bmi)
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + '\'s BMI is ' + mark.bmi)
} else {
    console.log(john.fullName + ' and ' + mark.fullName + ' both have a BMI of ' + john.bmi + '.')
}*/

/***********************************
 * Loops And Iterations
 */
// For Loop
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
} */
// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
//....
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 false, exit the loop! 
/*
var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While Loop
//var john = ['John', 'Smith', 1990, 'designer', false];
var i = 0;
while (i < john.length) {
    console.log(john[i]); 
    i++;
}*/

// Continue and Break Statements
/*var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}*/

// Looping Backwards
/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = john.length - 1; i >= 0; i--) {
    //if (typeof john[i] !== 'string') break;
    console.log(john[i]);
} */

// Code Challenge 5

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            // Add results to corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;

        }
    }
}
john.calcTips();
console.log(john);