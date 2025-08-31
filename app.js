document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".navbar .navlist");

  hamburger.addEventListener("click", () => {
    navList.classList.toggle("active"); // show/hide nav links
  });
});
