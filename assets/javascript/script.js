document.addEventListener("DOMContentLoaded", () => {
  console.log("script.js is running");

  // 1. Typing Effect (only on index.html)
  if (document.title.includes("Home")) {
    const header = document.getElementById("header");
    const text = "Ceri Jane Banks CV";
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        header.innerHTML = text.slice(0, i + 1);
        i++;
        setTimeout(typeWriter, 70);
      }
    };
    typeWriter();
  }

  // 2. Scroll Reveal Animations
  const revealElements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  revealElements.forEach((el) => observer.observe(el));

  // 3. Back to Top Button
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
    cursor: "pointer",
  });

  window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 4. Theme Toggle
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

  // 5. Navbar Shrink
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("navbar-shrink", window.scrollY > 50);
  });

  // 6. Card Hover
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
      card.style.transition = "transform 0.3s ease";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });

  // 7. Icon Pulse on Hover
  document.querySelectorAll(".contact-me").forEach((icon) => {
    icon.addEventListener("mouseenter", () => icon.classList.add("fa-beat"));
    icon.addEventListener("mouseleave", () => icon.classList.remove("fa-beat"));
  });



  Object.assign(hireBtn.style, {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    padding: "12px 18px",
    backgroundColor: "#23b887",
    color: "white",
    border: "none",
    borderRadius: "30px",
    zIndex: 1000,
    cursor: "pointer",
    fontWeight: "bold",
  });

  hireBtn.addEventListener("click", () => {
    const contactSection = document.getElementById("repos") || document.querySelector("footer");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Contact section not found.");
    }
  });

  // 9. CV Modal
  document.querySelectorAll("a[href$='.pdf']").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const modal = document.getElementById("cvModal");
      const downloadBtn = modal.querySelector("#confirmDownload");
      modal.style.display = "flex";
      downloadBtn.onclick = () => {
        modal.style.display = "none";
        window.open(this.href, "_blank");
      };
    });
  });

  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("cvModal").style.display = "none";
  });
});