const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navToggle = document.getElementById("nav-toggle");
const alert = document.getElementById("alert");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// REMOVE MENUBAR WHEN ANY LINK IS CLICKED
const navLinks = document.querySelectorAll(".nav-link");
const hideNavList = () => {
  navMenu.classList.remove("show-menu");
};
navLinks.forEach((element) => {
  element.addEventListener("click", hideNavList);
});

// CHANGE HEADER BACKGROUND
const scrollHeader = () => {
  const header = document.getElementById("header");
  if (this.scrollY > 30) {
    header.classList.add("bg-header");
    alert.classList.add("hidden");
  } else {
    header.classList.remove("bg-header");
    alert.classList.remove("hidden");
  }
};

window.addEventListener("scroll", scrollHeader);

// SWIPER FOR BEST SELLER CONTENT
var swiper = new Swiper(".best-seller-content", {
  slidesPerView: 3,
  centeredSlide: true,
  freeMode: true,
  loop: true,
  speed: 1000,
  spaceBetween: 20,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    800: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
  },
});
