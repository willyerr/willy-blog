// script.js

document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo a");
  const navLinks = document.querySelectorAll("nav a");
  const fadeElements = document.querySelectorAll(".fade-in");

  // Smooth page transition on logo click
  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = logo.getAttribute("href");
      }, 300);
    });
  }

  // Animate nav links on load
  navLinks.forEach((link, i) => {
    link.style.opacity = 0;
    link.style.transform = "translateY(-10px)";
    setTimeout(() => {
      link.style.transition = "all 0.6s ease";
      link.style.opacity = 1;
      link.style.transform = "translateY(0)";
    }, 200 + i * 150);
  });

  // Scroll reveal animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  fadeElements.forEach((el) => {
    observer.observe(el);
  });
});
