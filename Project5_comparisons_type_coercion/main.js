
// Display a number so large that it becomes Infinity
function showInfinity() {
    let hugeNumber = 1e309;   // Larger than JavaScript's maximum number
    document.getElementById("posInf").textContent = "Positive Infinity: " + hugeNumber;
}

// Display a number so negative that it becomes -Infinity
function showNegativeInfinity() {
    let tinyNumber = -1e309;  // Smaller (more negative) than the minimum number
    document.getElementById("negInf").textContent = "Negative Infinity: " + tinyNumber;
    document.getElementById("posInf").textContent = "Positive Infinity: " + hugeNumber;
}
// Function to demonstrate Boolean logic
function showBooleanResults() {
    let a = 10;
    let b = 5;

    // Using greater-than operator (TRUE)
    let isGreater = a > b;  // true

    // Using less-than operator (FALSE)
    let isLess = a < b;     // false

    // Display results in HTML
    document.getElementById("trueResult").textContent =
        "Is 10 greater than 5? " + isGreater;

    document.getElementById("falseResult").textContent =
        "Is 10 less than 5? " + isLess;
}

function comparisons(a, b) {
    return a == b;
}
// Call the functions to display results
showInfinity();
showNegativeInfinity();
showBooleanResults();

// Perform a math operation using console.log()

// Define two numbers
let num1 = 12;
let num2 = 8;

// Perform a math operation (example: multiplication)
let result = num1 * num2;

// Output the result to the console
console.log("The result of " + num1 + " × " + num2 + " is: " + result);

// Using == to compare values

let x = 10;
let y = "10";
let z = 15;

// This will return true because == compares values, not types
let isEqual = (x == y);   // true

// This will return false because 10 is not equal to 15
let isNotEqual = (x == z); // false

// Display results in the console
function showEquality() {
   document.getElementById("equalResult").innerHTML =
   "The equality operator (10 == '10') returns: " + isEqual;
}
function showInequality() {
   document.getElementById("notEqualResult").innerHTML =
   "The equality operator (10 == 15) returns: " + isNotEqual;
}

// === compares both VALUE and DATA TYPE

// 1. TRUE → Same value AND same data type
let trueResult = (10 === 10);  // true


// 2. FALSE → Different data type AND different value
let falseResult1 = ("20" === 30); // false (string vs number AND 20 ≠ 30)


// 3. FALSE → Different data type BUT same value
let falseResult2 = (10 === "10"); // false (number vs string)


// 4. FALSE → Same data type BUT different value
let falseResult3 = (50 === 100); // false (both numbers but not equal)


// Display results in console
function showStrictEquality() {
   document.getElementById("trueResult").innerHTML =
   "The strict equality operator (10 === 10) returns: " + trueResult;
}   
function showFalseStrictEquality2() {
   document.getElementById("falseResult").innerHTML =
   "The strict equality operator (\"20\" === 30) returns: " + falseResult1;
}

// AND Operator (&&)
// Returns true ONLY when both conditions are true
let andTrue = (10 > 5 && 8 < 20);     // true && true → true
let andFalse = (10 > 5 && 8 > 20);    // true && false → false

function showLogicResults() {
   document.getElementById("andResult").innerHTML =
   "The AND operator applied to (10 > 5 && 8 < 20) is: " + andTrue + "<br>" +
   "The AND operator applied to (10 > 5 && 8 > 20) is: " + andFalse;
}


//NOT Operator
// Returns false ONLY 
function showNotResults() {
   document.getElementById("notResult").innerHTML =
   "The NOT operator applied to (10 > 5) is: " + !(10 > 5) + "<br>" +
   "The NOT operator applied to (5 > 10) is: " + !(5 > 10);
}