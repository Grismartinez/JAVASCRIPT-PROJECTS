// WHILE LOOP
function Loop_Function() {
    let text = "";
    let i = 1;

    while (i <= 10) {
        text += "Number " + i + "<br>";
        i++;
    }

    document.getElementById("Loop").innerHTML = text;
}

// FOR LOOP WITH ARRAY
function for_Loop() {
    let instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin"];
    let content = "";

    for (let i = 0; i < instruments.length; i++) {
        content += instruments[i] + "<br>";
    }

    document.getElementById("List_of_Instruments").innerHTML = content;
}

// ARRAY FUNCTION
function array_Function() {
    let colors = [];
    colors[0] = "Red";
    colors[1] = "Blue";
    colors[2] = "Green";
    colors[3] = "Yellow";

    document.getElementById("Array").innerHTML =
        "My favorite color is " + colors[2] + ".";
}

// CONST FUNCTION
function constant_function() {
    const Phone = {type: "iPhone", brand: "Apple", color: "Black"};

    Phone.color = "Gold";
    Phone.price = "$999";

    document.getElementById("Constant").innerHTML =
        "The " + Phone.type + " is " + Phone.color + " and costs " + Phone.price + ".";
}

// LET FUNCTION
function let_function() {
    let x = 10;

    {
        let x = 20;
    }

    document.getElementById("Let").innerHTML =
        "The value of x is " + x + ".";
}

// OBJECT WITH LET & CONST
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2023,
    description: function () {
        return "The car is a " + this.year + " " + this.make + " " + this.model + ".";
    }
};

document.getElementById("Car-Object").innerHTML = car.description();