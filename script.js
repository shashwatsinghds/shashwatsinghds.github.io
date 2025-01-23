document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");
  const links = sideMenu.querySelectorAll("a");
  const sections = document.querySelectorAll(".section");

  // Toggle the side menu
  hamburger.addEventListener("click", () => {
      const isOpen = sideMenu.style.left === "0px";
      sideMenu.style.left = isOpen ? "-250px" : "0px";
  });

  // Smooth scrolling and close menu on link click
  links.forEach(link => {
      link.addEventListener("click", e => {
          e.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);

          sideMenu.style.left = "-250px";
          window.scrollTo({
              top: targetSection.offsetTop,
              behavior: "smooth"
          });
      });
  });

  // Section animation on scroll
  const handleScroll = () => {
      sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75) {
              section.classList.add("active");
          }
      });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger on load
});

document.addEventListener("DOMContentLoaded", () => {
  const sideMenu = document.getElementById("sideMenu");
  const links = sideMenu.querySelectorAll("a");

  links.forEach(link => {
      link.addEventListener("click", e => {
          e.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);

          sideMenu.style.left = "-250px";
          window.scrollTo({
              top: targetSection.offsetTop,
              behavior: "smooth",
          });
      });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  // Add the active class when the section is visible
                  entry.target.classList.add("active");
              } else {
                  // Remove the active class when the section is out of view
                  entry.target.classList.remove("active");
              }
          });
      },
      {
          threshold: 0.2, // Trigger when 20% of the section is visible
      }
  );

  sections.forEach((section) => observer.observe(section));
});

function copyEmail() {
  // Email text to copy
  const email = "shashwatsingh1@arizona.edu";

  // Copy the email to the clipboard
  navigator.clipboard.writeText(email).then(() => {
      // Show the notification
      const notification = document.getElementById("copyNotification");
      notification.style.opacity = "1";

      // Hide the notification after 2 seconds
      setTimeout(() => {
          notification.style.opacity = "0";
      }, 2000);
  }).catch((err) => {
      console.error("Failed to copy email: ", err);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");

  const handleScroll = () => {
      timelineItems.forEach(item => {
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
              item.classList.add("active");
          } else {
              item.classList.remove("active");
          }
      });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger on load
});

document.addEventListener("DOMContentLoaded", () => {
  const navbarLinks = document.querySelectorAll(".navbar a");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach((section) => {
          const sectionTop = section.offsetTop - 100; // Adjust offset as needed
          if (scrollY >= sectionTop) {
              current = section.getAttribute("id");
          }
      });

      navbarLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").includes(current)) {
              link.classList.add("active");
          }
      });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const navbarLinks = document.querySelectorAll(".navbar a");

  // Add smooth scrolling for navbar links
  navbarLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);

          window.scrollTo({
              top: targetSection.offsetTop,
              behavior: "smooth",
          });
      });
  });

  const sections = document.querySelectorAll("section");

  // Highlight the current section in the navbar
  window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach((section) => {
          const sectionTop = section.offsetTop - 100; // Adjust offset for better accuracy
          if (scrollY >= sectionTop) {
              current = section.getAttribute("id");
          }
      });

      navbarLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").includes(current)) {
              link.classList.add("active");
          }
      });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const modals = document.querySelectorAll(".portfolio-modal");
  const closeButtons = document.querySelectorAll(".close-modal");

  portfolioItems.forEach(item => {
      item.addEventListener("click", () => {
          const target = item.getAttribute("data-target");
          document.querySelector(target).style.display = "flex";
      });
  });

  closeButtons.forEach(button => {
      button.addEventListener("click", () => {
          button.closest(".portfolio-modal").style.display = "none";
      });
  });

  modals.forEach(modal => {
      modal.addEventListener("click", (e) => {
          if (e.target === modal) {
              modal.style.display = "none";
          }
      });
  });
});
