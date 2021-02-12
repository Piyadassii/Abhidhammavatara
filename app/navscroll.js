const header = document.querySelector(".content-choice");
const mainNav = document.querySelector(".navbar");
const section = document.querySelector("section");

const mainNavOptions = {};
const mainNavObserver = new IntersectionObserver(function (
  entries,
  mainNavObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("fixed-bar");
      section.classList.add("shifted-down");
    } else {
      header.classList.remove("fixed-bar");
      section.classList.remove("shifted-down");
    }
  });
},
mainNavOptions);

mainNavObserver.observe(mainNav);
