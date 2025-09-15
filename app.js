document.addEventListener("DOMContentLoaded", () => {
  const screens = document.querySelectorAll(".screen");
  const navLinks = document.querySelectorAll(".nav-link");

  window.showScreen = function(id) {
    screens.forEach(screen => screen.style.display = "none");
    document.getElementById(id).style.display = "block";
  };

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const target = link.getAttribute("data-target");
      showScreen(target);
    });
  });

  showScreen("login");
});

