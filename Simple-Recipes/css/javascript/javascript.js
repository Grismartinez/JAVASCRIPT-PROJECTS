//RECIPE POP UP MODAL SECTION

//Sets up the button and modal elements
var btns = document.querySelectorAll(".recipeButton");

//Definesn all the modals for each recipe button
var modals = document.querySelectorAll(".recipe-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0]; 
// When the user clicks on the button, open the modal
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick(function(event) {
        modal[i] = document.querySelector(event.target.getAttribute("href"));
        modal[i].style.display = "block";
    }); 
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < span.length; i++) 
    closeBtn[i].onclick = function() {
for (var index in modals) {
            (modals[index].style) 
            modals[index].style.display = "none";
            }
        }
  //EMAIL VALIDATION

  document.getElementById("contactForm").addEventListener("submit", function(event) {
    //Overides the default brwser refresh when the sibmit
    //button is pressed
    event.preventDefault();
    //Variables tp validate that each field is filled out
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone-number");
    const message = document.getElementById("message");
   
    //Email pattern checks for all symbols that would be needed
    //for an email address such as the @ and . and the text
    //that would come before, between, and after.
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    //Use this variable to display messages if fields are filled
    //out or thak you message
    const valMsg = document.getElementById("validation-message");

    if (!firstName.value || !lastName.value || !phone.value || !message) {
      valMsg.innerHTML = '<p style="color: red;">Please fill out all fields.</p>';
    }else if (!emailRegex.test(email.value)) {
      //Checks if there is a valid email
      valMsg.innerHTML = '<p style="color: red;">Please enter a valid email address.</p>';  
    }else
        //if all fields are filled out correctly display thank you
        valMsg.innerHTML = '<p style="color: red;">Thank you for your message!</p>';
      {

      }
      const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
        subscribe: document.getElementById("subscribe")
      }

   
  });