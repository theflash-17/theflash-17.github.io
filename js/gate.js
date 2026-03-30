function checkAnswer() {
  const input = document.getElementById("answer").value.toLowerCase();
  const result = document.getElementById("result");

  if (input.includes("auth")) {
    result.textContent = "Correct. Welcome.";
    result.style.color = "lime";
    localStorage.setItem("puzzleSolved", "true");
    setTimeout(() => window.location.href = "home.html", 1200);
  } else {
    result.textContent = "Not quite. Try again.";
    result.style.color = "tomato";
  }
}