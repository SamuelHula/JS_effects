let lastScrollY = window.scrollY;
const navbar = document.querySelector('.nav_bar');
window.addEventListener('scroll', () => {
   const currentScrollY = window.scrollY;
   if (currentScrollY > lastScrollY) {
      if (currentScrollY > 100) {
         navbar.classList.add('nav-hidden');
      }
   } else {
      navbar.classList.remove('nav-hidden');
   }
   if (currentScrollY === 0) {
      navbar.classList.remove('nav-hidden');
   }
   lastScrollY = currentScrollY;
});