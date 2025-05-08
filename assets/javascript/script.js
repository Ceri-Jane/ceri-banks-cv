console.log("script.js loaded");  // Helps debug

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // 1. Back to Top Button
  const backToTopBtn = document.createElement("button");
  backToTopBtn.id = "backToTopBtn";
  backToTopBtn.innerHTML = "↑";
  document.body.appendChild(backToTopBtn);

  Object.assign(backToTopBtn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 15px",
    fontSize: "20px",
    backgroundColor: "#23b887",
    color: "white",
    border: "none",
    borderRadius: "50%",
    display: "none",
    zIndex: 1000,
    cursor: "pointer"
  });

  window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 2. Theme Toggle
  const themeToggle = document.createElement("button");
  themeToggle.id = "themeToggle";
  themeToggle.innerHTML = "🌓";
  document.body.appendChild(themeToggle);

  Object.assign(themeToggle.style, {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    padding: "10px 15px",
    fontSize: "20px",
    backgroundColor: "#fff",
    border: "2px solid #23b887",
    borderRadius: "50%",
    cursor: "pointer",
    zIndex: 1000,
  });

  const toggleTheme = () => {
    const dark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  themeToggle.addEventListener("click", toggleTheme);

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }

  // 3. Navbar shrink on scroll
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-shrink");
    } else {
      navbar.classList.remove("navbar-shrink");
    }
  });

  // 4. Hover effect on cards
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
      card.style.transition = "transform 0.3s ease";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });

  // 5. Pulse effect on contact icons
  const contactIcons = document.querySelectorAll(".contact-me");
  contactIcons.forEach(icon => {
    icon.addEventListener("mouseenter", () => {
      icon.classList.add("fa-beat");
    });
    icon.addEventListener("mouseleave", () => {
      icon.classList.remove("fa-beat");
    });
  });
});