document.addEventListener("DOMContentLoaded", () => {
  const menuTextToggle = document.querySelector(".menu-text-toggle");
  const menu = document.querySelector("#center-menu");
  const menuText = document.querySelector(".menu-text");

  if (!menuTextToggle || !menu) return;

  const toggleMenu = () => {
    menu.classList.toggle("active");
    menuTextToggle.classList.toggle("active");
    
    if (menuText) {
      if (menu.classList.contains("active")) {
        menuText.textContent = "✕";
        menuText.style.fontSize = "22px";
        menuText.style.fontWeight = "bold";
      } else {
        menuText.textContent = "☰";
        menuText.style.fontSize = "15px";
        menuText.style.fontWeight = "600";
      }
    }
  };

  menuTextToggle.addEventListener("click", toggleMenu);

  menu.addEventListener("click", (e) => {
    if (e.target === menu) {
      menu.classList.remove("active");
      menuTextToggle.classList.remove("active");
      if (menuText) {
        menuText.textContent = "☰";
        menuText.style.fontSize = "15px";
        menuText.style.fontWeight = "600";
      }
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      menu.classList.remove("active");
      menuTextToggle.classList.remove("active");
      if (menuText) {
        menuText.textContent = "☰";
        menuText.style.fontSize = "15px";
        menuText.style.fontWeight = "600";
      }
    }
  });
});

