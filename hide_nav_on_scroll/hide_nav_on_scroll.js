let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");
let ticking = false;
window.addEventListener("scroll", () => {
   if (!ticking) {
      window.requestAnimationFrame(() => {
      if (window.scrollY > lastScrollY) {
         navbar.style.top = "-10vh";
      } else {
         navbar.style.top = "0";
      }
      lastScrollY = window.scrollY;
      ticking = false;
   });

      ticking = true;
   }
});
