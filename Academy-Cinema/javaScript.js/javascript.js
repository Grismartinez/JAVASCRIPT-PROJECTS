//Initialize Popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function(element){
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "img class= 'star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element,{
        content: content,
        html: true,
        trigger: 'hover'
    });
})

//Initialize Toast
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList(function(toastEl) {
    return new bootstrap.Toast(toastEl)
})

//Function to display toast with selected options
function displaySelectedMovieOptions(){
    var selectedMovie = document.getElementById("movie-select").value;
    var selectedTime = document.getElementById("time-select").value;
    var selectedFormat = document.getElementById("quantity").value; 
    
    var mesage = "Purchase confirmed for " + movie + " \nTime " + selectedTime + " in " + selectedFormat + " format.";

    //Display message in toast body
 var toastBody = document.getElementById("toast-body");
 toastBody.innerText = message;
 var toast = new bootstrap.Toast(document.getElementById("confirmation-toast"));
 toast.show();
}

function purchaseTickets(){
    displaySelectedMovieOptions();
}

//JQUERY
//Shrinks header size when the document is scrolled down by 80 pixels
$(document).on("scroll"),(function(){
    if($(document).scrollTop()>50){
        //once the 50px requirement has been met, add the 
        // shrink class to the selector to the same HTML elemen
        //that has the nav class

        $("nav").addClass("shrink");
        //Adjust the position of the mobile drop menu
        //to accomodate the new hieht decreased header
        $("div.navbar-collapse").css("margin-top","-6px");

    }else{
        //If the document is scrolled back to the top,
        //the shrink class is removed from the nav element
        //is removed from the HTML element with the nav class


        $("nav").removeClass("shrink");
        //The margin for the drop down menu is reset
        //to its original position
        $("div.navbar-collapse").css("margin-top","0px");
    }

    //Event listener for purchase button
    $("#purchase-button").click(function(){
        purchaseTickets();
    });
})

//Close mobile menu when a link is clicked
$(document).ready(function(){
    //On click when and element contains just the nav-link class and not the dropdown-toggle and then
    //also close when an element with the class .dropdown-item is clicked
    $(".navbar-nav li a").click(function(){
        //Collapse the mobile menu after a link is clicked
        $(".navbar-collapse").collapse("hide");
    }); 
});