// Scroll section

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a"); // Select navigation links

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(id)) {
          link.classList.add("active");
        }
      });
    }
  });

  let header = document.querySelector("header");
  // Sticky header
  header.classList.toggle("sticky", window.scrollY > 100);
};
