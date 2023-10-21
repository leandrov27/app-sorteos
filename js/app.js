const sr = ScrollReveal({
  distance: "65px",
  duration: 1700,
  delay: 450,
  reset: true,
});

sr.reveal(".logo-masthead", { delay: 200, origin: "top" });
sr.reveal(".nav", { delay: 400, origin: "top" });
sr.reveal(".footer-masthead", { delay: 600, origin: "top" });

document.addEventListener("DOMContentLoaded", function () {
  var spinButton = document.getElementById("spinButton");
  var numberDisplay = document.getElementById("numberDisplay");

  spinButton.addEventListener("click", function () {
    startAnimation();
  });

  function startAnimation() {
    var simulaciónServidor = [8 ,4, 9, 6];
    animateNumbers(simulaciónServidor, 0);
  }

  function animateNumbers(targetNumbers, currentIndex) {
    var interval = 150;

    if (currentIndex < targetNumbers.length) {
      var animationInterval = setInterval(function () {
        var randomNumber = Math.floor(Math.random() * 10);
        numberDisplay.textContent = numberDisplay.textContent.substr(0, currentIndex) + randomNumber + numberDisplay.textContent.substr(currentIndex + 1);
        
        if (randomNumber === targetNumbers[currentIndex]) {
          clearInterval(animationInterval);
          animateNumbers(targetNumbers, currentIndex + 1);
        }
      }, interval);
    }
  }
});
