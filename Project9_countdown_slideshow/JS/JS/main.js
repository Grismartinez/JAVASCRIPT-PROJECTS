// Countdown Timer and Slideshow Function
function countdown() {
    var seconds = document.getElementById("seconds").value;
    var timer = document.getElementById("timer");
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
    // Slideshow part
    var images = [
        "https://www.example.com/image1.jpg",
        "https://www.example.com/image2.jpg",
        "https://www.example.com/image3.jpg"
    ];
    // Initialize index for slideshow
    var index = 0;  
    function changeImage() {
        document.getElementById("slideshow").src = images[index];
        index++;
        if (index >= images.length) {
            index = 0;
        }
        setTimeout(changeImage, 2000);
    }
    changeImage();
}