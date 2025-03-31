window.addEventListener('scroll', () => {
   console.log(window.scrollY);  
      if (window.scrollY > 50) {
         header.classList.add('scrolled');
   } else {
         header.classList.remove('scrolled');
   }
});