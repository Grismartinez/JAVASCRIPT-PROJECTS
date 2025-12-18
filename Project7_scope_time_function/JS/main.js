
// Global variable
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}  
// Global variable 
function Add_numbers_2() {
    document.write(X + 100);
}  
// Date function
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }  
} 
// Age function
function Age_Function() {
    Age = document.getElementById("age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    } else {
        Vote = "You are not old enough to vote.";
    }
    document.getElementById("How_old_are_you").innerHTML = Vote;
}
/* FUNCTION WITH AN INTENTIONAL ERROR */
        function buggyFunction() {
            let value = 20;

// Intentional error: wrong variable name
        console.log(valeu);
}
/*Time function section*/
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 && Time > 0) {
        Reply = "It is morning time!";
    }   
    else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;

    console.log(Reply); 
    
}