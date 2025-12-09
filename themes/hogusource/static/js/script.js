

/* ===========================================
   🎮 Filter Tabs (Article / Works)
=========================================== */
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-button, .tab");
  const cards = document.querySelectorAll(".content-card");

  if (!filterButtons.length || !cards.length) return;

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // アクティブ状態の切替
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.category?.toLowerCase() || "all";

      cards.forEach(card => {
        const category = card.dataset.category?.toLowerCase() || "";

        if (filter === "all" || category === filter) {
          card.style.display = "block";
          card.classList.add("fade-in");
          card.classList.remove("fade-out");
        } else {
          card.classList.remove("fade-out");
          setTimeout(() => (card.style.display = "none"), 250);
        }
      });
    });
  });
});

