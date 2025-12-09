

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".center-menu");
  const closeBtn = document.querySelector(".menu-close");

  if (!menuToggle || !menu) return;

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });



  menu.addEventListener("click", (e) => {
    if (e.target === menu) {
      menu.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      menu.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });
});

