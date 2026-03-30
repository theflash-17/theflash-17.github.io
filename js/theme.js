(function () {
  // Restore saved theme on every page load
  var saved = localStorage.getItem("theme");
  if (saved) {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(saved);
  }

  // Toggle on button click
  var btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.addEventListener("click", function () {
      var isDark = document.body.classList.contains("dark");
      document.body.classList.toggle("dark", !isDark);
      document.body.classList.toggle("light", isDark);
      localStorage.setItem("theme", isDark ? "light" : "dark");
    });
  }
})();