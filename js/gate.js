function checkAnswer() {
  var input = document.getElementById("answer").value.toLowerCase().trim();
  var result = document.getElementById("result");

  if (input.indexOf("auth") !== -1) {
    result.textContent = "Correct. Welcome.";
    result.style.color = "#4ade80";
    localStorage.setItem("puzzleSolved", "true");
    setTimeout(function () {
      window.location.href = "home.html";
    }, 1200);
  } else {
    result.textContent = "Not quite. Think about what silently guards access.";
    result.style.color = "#f87171";
  }
}

// Allow pressing Enter to submit
document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("answer");
  if (input) {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") checkAnswer();
    });
  }
});