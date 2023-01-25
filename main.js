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



document.querySelector('.box1').addEventListener('click', function() {
  document.querySelectorAll('.box1, .box2, .box3, .box4, .box5').forEach(box => {
      box.style.borderColor = "transparent";
      box.style.border = "none";
  });
  this.style.borderColor = "black";
  this.style.border = "2px solid";
  this.style.transition = "none";
  document.querySelector('.ostalo').style.display = 'none';
  document.querySelector('.povrce').style.display = 'none';
  document.querySelector('.or').style.display = 'none';
  document.querySelector('.zac').style.display = 'none';
});

document.querySelector('.box2').addEventListener('click', function() {
  document.querySelectorAll('.box1, .box2, .box3, .box4, .box5').forEach(box => {
      box.style.borderColor = "transparent";
      box.style.border = "none";
  });
  this.style.borderColor = "black";
  this.style.border = "2px solid";
  this.style.transition = "none";
  document.querySelector('.ostalo').style.display = 'block';
  document.querySelector('.povrce').style.display = 'none';
  document.querySelector('.or').style.display = 'none';
  document.querySelector('.zac').style.display = 'none';
});

document.querySelector('.box3').addEventListener('click', function() {
  document.querySelectorAll('.box1, .box2, .box3, .box4, .box5').forEach(box => {
      box.style.borderColor = "transparent";
      box.style.border = "none";
  });
  this.style.borderColor = "black";
  this.style.border = "2px solid";
  this.style.transition = "none";
  document.querySelector('.ostalo').style.display = 'none';
  document.querySelector('.povrce').style.display = 'block';
  document.querySelector('.or').style.display = 'none';
  document.querySelector('.zac').style.display = 'none';
});

document.querySelector('.box4').addEventListener('click', function() {
  document.querySelectorAll('.box1, .box2, .box3, .box4, .box5').forEach(box => {
      box.style.borderColor = "transparent";
      box.style.border = "none";
  });
  this.style.borderColor = "black";
  this.style.border = "2px solid";
  this.style.transition = "none";
  document.querySelector('.ostalo').style.display = 'none';
  document.querySelector('.povrce').style.display = 'none';
  document.querySelector('.or').style.display = 'block';
  document.querySelector('.zac').style.display = 'none';
});

document.querySelector('.box5').addEventListener('click', function() {
  document.querySelectorAll('.box1, .box2, .box3, .box4, .box5').forEach(box => {
      box.style.borderColor = "transparent";
      box.style.border = "none";
  });
  this.style.borderColor = "black";
  this.style.border = "2px solid";
  this.style.transition = "none";
  document.querySelector('.ostalo').style.display = 'none';
  document.querySelector('.povrce').style.display = 'none';
  document.querySelector('.or').style.display = 'none';
  document.querySelector('.zac').style.display = 'block';
});

