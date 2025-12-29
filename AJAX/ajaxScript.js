function getMsg() {
    //STEP 1: Setup the XML HTTP Request Object

    let ajaxRequest = new XMLHttpRequest();
}
//Get input value of name to display to user after
//request has been made
let inputVal = document.getElementById("name").value;

//Function to display uder input value once request
//has been received
ajaxRequest.onreadystatechange = function() {
    document.getElementById("tkuMsg").innerHTML ="Thank you, " + 
    inputVal + ", for your request!";
}
//STEP 2: Create and open the request
//Request from the server
ajaxRequest.open("GET", "response.html", true);
//STEP 3: Send the request
//Send the request to the server
//No data to send with a GET request

ajaxRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML =
        ajaxRequest.responseText;
    }
}
//STEP 4: Send the request
ajaxRequest.send();