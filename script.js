let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let navbar = document.querySelector(".header .navbar");
let searchForm = document.querySelector(".search-form");
const scrollBtn = document.querySelector("#scrollupBtn");
let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

document.addEventListener("contextmenu", (event) => event.preventDefault());

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  navbar.classList.remove("active");
};

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};

document.querySelector("#nav-close").onclick = () => {
  navbar.classList.remove("active");
};

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.add("active");
};

document.querySelector("#close-search").onclick = () => {
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};
scrollBtn.onclick = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
$(document).ready(function () {
  $(window).scroll(function () {
    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
});

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + "px";
  cursor1.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
};

document.querySelectorAll("a").forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  };

  links.onmouseleave = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };
});

var typed = new Typed(".typing-text", {
  strings: [
    "web developer",
    "software developer",
    "web application developer",
    "Android app developer",
  ],
  typeSpeed: 200,
  loop: true,
});

// owl carousel script
$(document).ready(function () {
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
