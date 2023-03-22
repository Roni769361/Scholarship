const toggleButton = document.getElementById("toggleButton");
const hiddenParagraph = document.querySelector(".hidden");

toggleButton.addEventListener("click", () => {
  if (hiddenParagraph.style.display === "none") {
    hiddenParagraph.style.display = "block";
    toggleButton.innerText = "Read Less";
  } else {
    hiddenParagraph.style.display = "none";
    toggleButton.innerText = "Read More";
  }
});

function toggleRegistration() {
    var regSection = document.getElementById("reg");
    if (regSection.style.display === "none") {
        regSection.style.display = "block";
    } else {
        regSection.style.display = "none";
    }
}

var button = document.getElementById("button");
button.classList.add("animated");

// countdowntime

var countdownElement = document.getElementById('countdown');

function updateCountdown() {
  var targetDate = new Date("2023-03-23T00:00:00+06:00"); // Change the target date here
  var currentDate = new Date();
  var remainingTime = targetDate - currentDate;
  
  if (remainingTime < 0) {
    countdownElement.innerHTML = "Countdown is over!";
    return;
  }
  
  var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
  countdownElement.innerHTML = "Time left: <br> " + days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}

updateCountdown(); // Update countdown on page load
setInterval(updateCountdown, 1000); // Update countdown every second


