// Défilement fluide vers les sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Menu burger pour mobile
const burger = document.createElement("div");
burger.classList.add("burger");
burger.innerHTML = "☰";
document.querySelector("header").prepend(burger);

const nav = document.querySelector("nav");
burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Animation au scroll
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));
