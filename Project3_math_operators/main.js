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

function subtractions_Fuction() {
    var subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + subtraction;
}

function multiplications_Fuction() {
    var multiplication = 5 * 2;
    document.getElementById("Math1").innerHTML = "5 * 2 = " + multiplication;
}
      function increment() {
        var X = 5;
        X++;
        document.getElementById("Math2").innerHTML = "5 incremented by 1 is: " + X;
    }
    function decrement() {
        var Y = 5.25;
        Y--;
        document.getElementById("Math3").innerHTML = "5.25 decremented by 1 is: " + Y;
    }
  
    function random_number() {
        var R = Math.random() * 100;
        document.getElementById("Math4").innerHTML = "A random number between 0 and 100: " + R;
    }
