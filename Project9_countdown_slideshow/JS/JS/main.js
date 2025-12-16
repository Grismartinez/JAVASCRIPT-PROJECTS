// Countdown Timer and Slideshow Function

// Slideshow state and initial display
let slideIndex = 1;
showSlides(slideIndex);

function countdown() {
    let seconds = parseInt(document.getElementById("seconds").value, 10) || 0;
    function tick() {
        seconds--;
        document.getElementById("timer").innerHTML = seconds;
        
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            document.getElementById("timer").innerHTML = "Time's up!";
        }
    }
    tick();
}

// NEXT / previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Dot controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return;

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }
}