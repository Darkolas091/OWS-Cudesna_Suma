    // Swiper
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', function() {
      document.querySelectorAll('.box').forEach(box => {
          box.style.borderColor = "transparent";
          box.style.border = "none";
      });
      this.style.borderColor = "black";
      this.style.border = "2px solid";
      this.style.transition = "none";
  });
});