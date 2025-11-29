document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 1024) {
    const menu = document.querySelector(".hamburger");
    const menuClose = document.querySelector(".close-menu");

    menu.addEventListener("click", function () {
      const menu = document.querySelector(".hamburger");
      const mobileMenu = document.querySelector(".mobile-menu");

      if (menu.classList.contains("inactive")) {
        menu.classList.add("active");
        menu.classList.remove("inactive");

        mobileMenu.classList.add("active");
        mobileMenu.classList.remove("inactive");
      }
    });

    menuClose.addEventListener("click", function () {
      const menu = document.querySelector(".hamburger");
      const mobileMenu = document.querySelector(".mobile-menu");
      console.log("y2s");

      if (menu.classList.contains("active")) {
        console.log("ys");
        menu.classList.add("inactive");
        menu.classList.remove("active");

        mobileMenu.classList.add("inactive");
        mobileMenu.classList.remove("active");
      }
    });
  }
});
