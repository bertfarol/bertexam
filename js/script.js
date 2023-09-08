// Scroll to top
const scrollTopBtn = document.querySelector(".scroll-top");

function addClassToScrollTopBtn() {
  const contactElement = document.querySelector(".contact");
  const contactOffsetTop = contactElement.offsetTop;
  const contactRect = contactElement.getBoundingClientRect();
  const contactScrollHeight = Math.round(
    contactOffsetTop - contactRect.height / 2
  );

  if (window.scrollY >= contactScrollHeight) {
    scrollTopBtn.classList.add("remove-fixed-position");
  } else {
    scrollTopBtn.classList.remove("remove-fixed-position");
  }
}

function updateScrollTopBtn() {
  const scrollText = document.querySelector(".scroll-top .scroll-text");
  const scrollIcon = document.querySelector(".scroll-top .scroll-icon");

  if (window.scrollY > 50) {
    scrollText.innerHTML = "PAGE TOP";
    scrollTopBtn.setAttribute("href", "#top");
    scrollIcon.classList.add("rotate-icon");
  } else {
    scrollText.innerHTML = "SCROLL";
    scrollTopBtn.setAttribute("href", "#about");
    scrollIcon.classList.remove("rotate-icon");
  }
}

// Navbar logo change color
function changeLogoColor() {
  const logo = document.getElementById("main-logo");
  const navMenu = document.querySelector(".nav-menu");

  if (window.scrollY > 50) {
    logo.src = "./images/logo-dark-with-text.png";
    logo.style.maxWidth = "70%";
    navMenu.classList.add("hide-nav-menu");
  } else {
    logo.src = "./images/logo-light-with-text.png";
    logo.style.maxWidth = "100%";
    navMenu.classList.remove("hide-nav-menu");
  }
}

/* scroll event */
document.addEventListener("scroll", (event) => {
  changeLogoColor();
  updateScrollTopBtn();
  addClassToScrollTopBtn();
});

updateScrollTopBtn();

// hero slider image
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 5000);
}

// link underline change icon
const iconElement = document.querySelector(".icon-link");
const iconLinkElement = document.querySelector(".link-underline");

iconLinkElement.addEventListener("mouseenter", () => {
  iconElement.src = "./images/arrow-fill-green.png";
});

iconLinkElement.addEventListener("mouseleave", () => {
  iconElement.src = "./images/arrow-line-circle.png";
});

// accordion
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(function (accordion) {
  accordion.addEventListener("click", function () {
    const columnList = this.querySelector(".column-list");
    if (columnList.style.display === "block") {
      columnList.style.display = "none";
    } else {
      columnList.style.display = "block";
    }
  });
});

// smooth scroll effect
function smoothScroll(targetId, duration) {
  const target = document.querySelector(targetId);
  if (!target) return;
  const startPos = window.pageYOffset;
  const targetPos = target.getBoundingClientRect().top + startPos;
  let startTime = null;

  function scrollStep(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    window.scrollTo(0, startPos + (targetPos - startPos) * progress);
    if (progress < 1) requestAnimationFrame(scrollStep);
  }

  requestAnimationFrame(scrollStep);
  target.focus();
}

document.querySelectorAll('a[href*="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    smoothScroll(link.hash, 500); // (1 second)
  });
});
