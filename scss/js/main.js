//select DOM ITems
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//set Inintial state of menu
var showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
     menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
     menuBtn.classList.remove("close"); 
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}

/*  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
  if (currentScrollPos > 20) {
    // I am using 'display' instead of 'top':
    document.getElementById("nav-scroll").style.display = "none";
  } else {
    document.getElementById("nav-scroll").style.display = "initial";
  }
}  */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > prevScrollpos) {
    document.getElementById("navbar").style.display = 'none';
  } else {
    document.getElementById("navbar").style.display = "initial";
  }
  prevScrollpos = currentScrollPos;
}  



/* ///////////////////////// */
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}