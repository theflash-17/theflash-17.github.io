// js/theme.js
document.addEventListener("click", e => {
  if (e.target.id === "theme-toggle") {
    document.body.classList.toggle("dark");
  }
});