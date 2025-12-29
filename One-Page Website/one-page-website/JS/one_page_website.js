// Wait until the page is fully loaded
window.onload = function () {
    console.log("Traveling website loaded successfully!");
};

/* Highlight images when clicked */
let images = document.querySelectorAll("img");

images.forEach(function (img) {
    img.addEventListener("click", function () {
        alert("You clicked an image!");
    });
});

/* Simple navigation message */
let navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Navigating to: " + link.textContent);
    });
});

/* Footer interaction */
let footer = document.querySelector("footer");

footer.addEventListener("mouseenter", function () {
    footer.style.backgroundColor = "#f0f0f0";
});

footer.addEventListener("mouseleave", function () {
    footer.style.backgroundColor = "";
});


/* LIGHTBOX FUNCTIONALITY */
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");
let closeBtn = document.querySelector(".close");

// Open lightbox when image is clicked
images.forEach(function (img) {
    img.addEventListener("click", function () {
        lightbox.style.display = "block";
        lightboxImg.src = this.src;
    });
});

// Close lightbox when X is clicked
closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
});

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", function (e) {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});