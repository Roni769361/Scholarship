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



