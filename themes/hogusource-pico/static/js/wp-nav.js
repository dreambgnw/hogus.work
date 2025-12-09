document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileSubmenuToggles = document.querySelectorAll(".mobile-has-submenu > a");

  // モバイルメニューの開閉
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenuToggle.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });
  }

  // モバイルサブメニューの開閉
  mobileSubmenuToggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      const submenu = toggle.nextElementSibling;
      const icon = toggle.querySelector(".submenu-toggle-icon");
      
      if (submenu) {
        submenu.classList.toggle("hidden");
        submenu.classList.toggle("active");
        if (icon) {
          icon.classList.toggle("active");
        }
      }
    });
  });

  // メニュー外をクリックしたら閉じる
  document.addEventListener("click", (e) => {
    if (mobileMenu && mobileMenuToggle) {
      if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mobileMenu.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
      }
    }
  });

  // ESCキーで閉じる
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu && mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
      if (mobileMenuToggle) {
        mobileMenuToggle.classList.remove("active");
      }
    }
  });
});

