/*
This file is dedicated to learning 
JavaScript and has absolutely
nothing to do with COB 204
*/


// Hello World program
/*
console.log("Hello World");
var number = 5;
*/


// Data Types
// undefined, null, boolean, string, symbol, number, and object
/*
var myName = "Jake"; // typical variable declaration
myName = 8;

let ourName = "JMU"; // only visible within scope of where it was defined

const pi = 3.14; // constant, attempt to change will result in error
*/


// Storing Values with Assignment Operator
/*
var a;
var b = 2;
console.log(a);

a = 7;

b = a;

console.log(a);
*/


// Initializing Variables with Assignment Operator 
/*
var a = 9;
*/

// Unitialized Variables
/*
var a;
var b;
var c;

a = a + 1;
b = b + 5;
c = c + " String!";

console.log(a);
console.log(b);
console.log(c);
*/


// Case Sensitivity in Variables -> capitalization matters

// Adding Numbers
/*
var sum = 10 + 10;
console.log(sum);
*/


// Subtracting Numbers
/*
var difference = 45 - 33
console.log(difference);
*/


// Multiplying Numbers
/*
var product = 8 * 0;
console.log(product);
*/


// Dividing Numbers
/*
var quotient = 66 / 0;
var realQuotient = 66 / 2;
console.log(quotient);
console.log(realQuotient);
*/


// Incrementing Numbers
/*
var myVar = 88;

myVar++;
console.log(myVar);
*/


// Decrementing Numbers
/*
var myVar = 11;

myVar--;
console.log(myVar);
*/


// Decimal Numbers -> floating point
/*
var ourDecimal = 5.7;
var myDecimal = 5.009;

console.log(ourDecimal);
console.log(myDecimal);
*/


// Multiplying Decimals
/*
var product = 2.0 * 2.5;
console.log(product);
*/


// Dividing Decimals
/*
var quotient = 4.4 / 2;
console.log(quotient);
*/


// Finding a Remainder
/*
var remainder;
remainder = 11 % 3;
console.log(remainder);
*/


// Compound Assignment with Augmented Addition
/*
var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;

console.log(a);
console.log(b);
console.log(c);
*/


// Compound Assignment with Augmented Subtraction
/*
var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c --;

console.log(a);
console.log(b);
console.log(c);
*/


// Compound Assignment with Augment Multiplication
/*
var a = 5;
var b = 21;
var c = 12.6;

a *= 5;
b *= 12;
c *= 10;

console.log(a);
console.log(b);
console.log(c);
*/


// Compound Assignment with Augmented Division
/*
var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;

console.log(a);
console.log(b);
console.log(c);
*/


// Declare String Variables (21:26)
/*
var firstName = "Alan;
var lastName = "Turing";

var myFirstName = "Jake";
var myLastName = "Willis";

console.log(firstName);
console.log(lastName);
console.log(myFirstName);
console.log(myLastName);
*/


// Escaping Literal Quotes in Strings
/*
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);
*/


// Quoting Strings with Single Quotes -> strings with lots of double quotes can be made using single quotes
/*
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr);
*/


// Escape Sequences in Strings
/**
CODE    OUTPUT
\'      single quote
\"      double quote
\\      backslash
\n      newline
\r      carriage return
\t      tab
\b      backspace
\f      form feed
**/
/*
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);
*/


// Concatenating Strings with Plus Operator
/*
var ourStr = "I come first. " + "I come second.";

var myStr = "This is the start. " + "This is the end.";

console.log(ourStr);
console.log(myStr);
*/


// Concatenating Strings with Plus Equals Operator
/*
var ourStr = "I come first. ";
ourStr += "I come second.";

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence";

console.log(ourStr);
console.log(myStr);
*/


// Constructing Strings with Variables
/*
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

var myName = "Jake";
var myStr = "My name is " + myName + " and bananas taste good!";

console.log(ourStr);
console.log(myStr);
*/


// Appending Variables to Strings
/*
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective;

console.log(ourStr);
console.log(myStr);
*/


// Find Length of String -> .length is property of string 
/*
var firstNameLength = 0;
var firstName = "Ada"

firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;

console.log(lastName);
console.log(lastNameLength);
*/


// Bracket Notation to Find First Character of String -> works like bracket notation for strings in Python, string is array of characters and each can be accessed accordingly
/*
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0];

console.log(firstLetterOfFirstName);
console.log(firstLetterOfLastName);
*/


// String Immutability
/*
var myStr = "Jello World";

// myStr[0] = "H"; -> results in error
myStr = "Hello World";
console.log(myStr);
*/


// Bracket Notation to Find Nth Character in String
/*
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

var lastName = "Lovelace";

var thirdLetterOfLastName = lastName[2];

console.log(secondLetterOfFirstName);
console.log(thirdLetterOfLastName);
*/


// Bracket Notation to Find Last Letter in String
/*
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];

console.log(lastLetterOfFirstName);
console.log(lastLetterOfLastName);
*/


// Bracket Notation to Find Nth-to-Last Character in String
/*
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

console.log(thirdToLastLetterOfFirstName);
console.log(secondToLastLetterOfLastName);
*/


// Word Blanks -> first use of functions
/*
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
*/


// Store Multiple Values with Arrays
/*
var ourArray = ["John", 12];
var myArray = [];

console.log(ourArray);
console.log(myArray);
*/


// Nested Arrays
/*
var ourArray = [["The universe", 42], ["everything", 1010101]];
var myArray = [[], []];

console.log(ourArray);
console.log(myArray);
*/


// Access Array Data with Indexes
/*
var ourArray = [50, 60, 70];
var ourData = ourArray[0];

var myArray = [];
var myData = myArray[0];

console.log(ourData);
console.log(myData)
*/


// Modify Array Data with Indexes
/*
var ourArray = [1, 2, "alpha"];
ourArray[1] = "whatever";

var myArray = [];
myArray[1] = 123;

console.log(ourArray);
console.log(myArray);
*/


// Access Multi-Dimensional Arrays with Indexes (44:51)
/*
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12,], 13, 14]];
var myData = myArray[3][0][1];

console.log(myData);
*/


// Manipulate Arrays with Push
/*
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);

var myArray = [["John", 12], ["cat", 2]];
myArray.push([122, "blah"]);

console.log(ourArray);
console.log(myArray);
*/


// Manipulate Arrays with Pop
/*
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

console.log(ourArray);
console.log(removedFromOurArray);
console.log(myArray);
console.log(removedFromMyArray);
*/


// Manipulate Arrays with Shift
/*
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.shift();

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.shift();

console.log(ourArray);
console.log(removedFromOurArray);
console.log(myArray);
console.log(removedFromMyArray);
*/


// Manipulate Arrays with Unshift @49:48
/*
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("happy");

var myArray = [["john", 23], ["dog", 3]];
myArray.shift();
myArray.unshift("a thing");

console.log(ourArray);
console.log(myArray);
*/


// Shopping List 
/*
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 2]];

console.log(myList);
*/


// Write Reusable Code with Functions
/*
function ourReusableFunction() {
    console.log("Heyya, World");
}

ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();
*/


// Passing Values to Functions with Arguments
/*
function ourFunctionWithArgs(a, b) {
    console.log(a-b);
}

ourFunctionWithArgs(10, 5); // outputs 5

function functionWithArgs(c, d) {
    console.log(c * d);
}

functionWithArgs(10, 5); // outputs 50
*/


// Global Scope and Functions
/*
var myGlobal = 10;
function f1() {
    oopsGlobal = 5; // no var keyword, so oopsGlobal becomes global automatically.
}

function f2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal + "\n";
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
f1();
f2();
*/


// Local Scope and Functions (59:30)
/*
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

// console.log(myVar); -> trying to access local variables outside of their scope will create an error
*/


// Global vs. Local Scope in Functions
/*
var outerWear = "t-shirt";

function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);
*/


// Return a Value from a Function with Return
/*
function minusSeven(num) {

    return num-7;
}

console.log(minusSeven(10));

function timesFive(num) {

    return num*5;
}

console.log(timesFive(5));
*/


// Understanding Undefined Value Returned from a Function
/*
var sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum += 5;
}

console.log(addFive()); // not including a return statement means by default the function will return undefined
*/


// Assignment with a Returned Value
/*
var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);
*/


// Stand in Line (1:05:53) -> Queue Demo
/*
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
*/


// Boolean Values
/*
// boolean = true/false value
function welcomeToBooleans() {
    return false;
}
*/


// Use Conditional Logic with If Statements
/*
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it is true";
    }
    return "No, it is false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(trueOrFalse(true));
*/


// Comparison with Equality Operator (1:11:52)
/*
function testEqual(val) { // -> == means that value is equivalent; === means that value and type are equivalent
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));
*/


// Comparison with the Strict Equality Operator
/*
function testStrict(val) { // -> == means that value is equivalent; === means that value and type are equivalent
    if (val === "10") {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(10));
*/


// Practice Comparing Different Values
/*
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"));
*/


// Comparison with the Inequality Operator
/*
function testNotEqual(val) {
    if (val != 10) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual("10"));
*/


// Comparison with the Strict Inequality Operator
/*
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual("17"));
*/


// Comparisons with the Greater Than Operator
/*
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or under";
}

console.log(testGreaterThan(101));
*/


// Comparison with the Greater Than or Equal To Operator
/*
function testGreaterThanOrEqual(val) {
    if (val >= 20) {
        return "20 or over";
    }
    if (val >= 10) {
        return "10 or over";
    }
    return "Less than 10";
}

console.log(testGreaterThanOrEqual(10));
*/


// Comparison with the Less Than Operator (1:18:12)
/*
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or over";
}
console.log(testLessThan(55));
*/


// Comparison with the Less Than or Equal To Operator
/*
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller or equal to 12";
    }
    if (val <= 24) {
        return "Smaller or equal to 24";
    }
    return "More than 24";
}
console.log(testLessOrEqual(10));
*/


// Comparisons with the Logical AND Operator
/*
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(10));
*/


// Comparisons with the Logical OR Statement
/*
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
console.log(testLogicalOr(15));
*/


// Else Statements (1:21:40)
/*
function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    }
    else {
        result = "5 or smaller";
    }
    return result;
}

console.log(testElse(10));
*/


// Else If Statements
/*
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

console.log(testElseIf(7));
*/


// Logical Order in If Else Statements
/*
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(3));
*/


// Chaining If Else Statements
/*
function testSize(num) {
    if (num < 5) {return "Tiny";}
    else if (num < 10) {return "Small";}
    else if (num < 15) {return "Medium";}
    else if (num < 20) {return "Large";}
    else if (num >= 20) {return "Huge";}
    else {return "Change me";}
}
console.log(testSize(9));
*/


// Golf Code (1:27:50)
/*
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double bogey", "Go home!"];
function golfScore(par, strokes) {
    result = "";
    if (strokes == 1) {
        result = names[0];
    } else if (strokes <= par - 2) {
        result = names[1];
    } else if (strokes == par - 1) {
        result = names[2];
    } else if (strokes == par) {
        result = names[3];
    } else if (strokes == par + 1) {
        result = names[4];
    } else if (strokes == par + 2) {
        result = names[5];
    } else {
        result = names[6];
    }
    return result;
}
console.log(golfScore(5,4));
*/


// Switch Statements
/*
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1: answer = "alpha";
        break;
        case 2: answer = "beta";
        break;
        case 3: answer = "gamma";
        break;
        case 4: answer = "delta";
        break;
    }
    return answer;
}
console.log(caseInSwitch(2));
*/


// Default Option in Switch Statements
/*
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "banana";
            break;
        case "c":
            answer = "carrot";
            break;
        default:
            answer = "food";
    }
    return answer;
}
console.log(switchOfStuff("a"));
*/


// Multiple Identical Options in Switch Statements (1:37:25)
/*
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1: 
        case 2:
        case 3:
            answer = "Low"; // answer is "Low" for cases 1-3
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid"; // answer is "Mid" for cases 4-6
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
console.log(sequentialSizes(2));
console.log(sequentialSizes(3));
console.log(sequentialSizes(4));
*/


// Returning Boolean Values from Functions
/*
function isLess(a, b) {
    return a < b;
}
console.log(isLess(10,15));
*/


// Returning Early Pattern from Functions
/*
function abTest(a, b) {
    if (a < 0 || b < 0) { return undefined;}
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-2, 2));
*/


// Counting Cards
/*
var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }
    var holdBet = "Hold";
    if (count > 0) { holdBet = "Bet"; }
    return count + " " + holdBet;
}

cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4));
*/


// Build JavaScript Objects (1:49:12)
/*
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var myDog = {
    "name": "Millie",
    "legs": 4,
    "tails": 1,
    "friends": ["me"]
};
*/


// Accessing Object Properties with Dot Notation
/*
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(testObj.shoes);
*/


// Accessing Object Properties with Bracket Notation
/*
var testObj = {
    "my entree": "hamburger", // Bracket Notation is required if the property name contains a space
    "my side": "veggies",
    "my drink": "water"
};

var entreeValue = testObj["my entree"];
var drinkValue = testObj["my drink"];
console.log(testObj['my side']);
*/


// Accessing Object Properties with Variables
/*
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player);
*/


// Updating Object Properties
/*
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

var myMoose = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freecodecamp Campers"]
};

myMoose.name = "Happy Coder";
console.log(myMoose.name);
*/


// Add New Properties to an Object
/*
var ourMoose = {
    "name": "Todd",
    "legs": 4,
    "tails": 1,
    "friends": ["mooses"]
};
ourMoose.speak = "Hi";

var myMoose = {
    "name": "Billy-Joe",
    "legs": 4,
    "tails": 1,
    "friends": ["Todd", "Darth Vader"]
};
myMoose["speak"] = "wassaw dude?";
*/


// Delete Properties From an Object (1:55:20)

