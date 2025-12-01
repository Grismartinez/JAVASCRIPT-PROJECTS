function rideFunction() {
    var height = document.getElementById("height").value;
    var canRide = (height >= 52) ? "You are tall enough to ride." : "You are not tall enough to ride.";
    document.getElementById("ride").innerHTML = canRide;
}
function Vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.vehicle_color + "-colored " + Erik.vehicle_model +
    " manufactured in " + Erik.vehicle_year;
}
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9; 
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
function nestedFunction() {
    document.getElementById("Nested_Function").innerHTML = nest();
    function nest() {
        var num = 5;
        function addNum() {num += 3;}
        addNum();
        return num;
    }
}