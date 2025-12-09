document.addEventListener("DOMContentLoaded", () => {
  // ===== ハンバーガーメニュー =====
  const menuBtn = document.querySelector(".menu-button");
  const closeBtn = document.querySelector(".close-button");
  const mobileNav = document.querySelector(".mobile-nav");
  const header = document.querySelector(".header");

  if (menuBtn && closeBtn && mobileNav && header) {
    menuBtn.addEventListener("click", () => {
      mobileNav.classList.add("active");
      closeBtn.classList.add("visible");
      header.classList.add("hidden");
    });
    closeBtn.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      closeBtn.classList.remove("visible");
      header.classList.remove("hidden");
    });
    mobileNav.addEventListener("click", (e) => {
      if (e.target === mobileNav) {
        mobileNav.classList.remove("active");
        closeBtn.classList.remove("visible");
        header.classList.remove("hidden");
      }
    });
  }

  // ===== Article category filter =====
  const articleTabs = document.querySelectorAll(".tab");
  const articleItems = document.querySelectorAll(".article-item");
  if (articleTabs.length) {
    articleTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        articleTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        const cat = tab.dataset.category;
        articleItems.forEach(item => {
          item.style.display = (cat === "all" || item.dataset.category === cat) ? "flex" : "none";
        });
      });
    });
  }

});