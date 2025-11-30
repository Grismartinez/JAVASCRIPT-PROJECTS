// This function performs subtraction and displays the result
function subtractNumbers() {

    // Define two numbers
    let num1 = 5;
    let num2 = 2;

    // Subtract num2 from num1
    let difference = num1 - num2;

    // Display the result inside the HTML element with id="result"
    document.getElementById("result").textContent = 
        "The result of " + num1 + " - " + num2 + " is: " + difference;
}