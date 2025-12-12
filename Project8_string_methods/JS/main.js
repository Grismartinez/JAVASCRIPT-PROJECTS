function Concatenate_Method() {
    var Part1 = "I am learning ";
    var Part2 = "JavaScript string methods.";
    document.getElementById("Concatenate").innerHTML = Part1.concat(Part2);   
}
function Slice_Method() {
    var Sentence = "I am learning JavaScript!";
    var Section = Sentence.slice(5, 12);
    document.getElementById("Slice").innerHTML = Section;
}
function string_Method() {  
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
// Using toFixed()
let num = 12.34567;

// Format number to 2 decimal places
let fixedNum = num.toFixed(2);

console.log(fixedNum);  // Output: "12.35"
console.log(typeof fixedNum); // Output: string
// Using valueOf()
let num2 = new Number(50);

// Get the primitive value
let primitiveValue = num2.valueOf();

console.log(primitiveValue); // Output: 50
console.log(typeof primitiveValue); // Output: number