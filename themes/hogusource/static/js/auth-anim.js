document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".author-wrapper");

  wrappers.forEach(wrapper => {
    wrapper.addEventListener("click", () => {
      wrapper.classList.toggle("tapped");
    });
  });
});
