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
  let clickedSection = null;
  let clickTime = 0;

  // Add smooth scrolling for navbar links
  navbarLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);
          
          // Store which section was clicked and when
          clickedSection = targetId;
          clickTime = Date.now();
          
          // Update active class immediately for better user feedback
          navbarLinks.forEach(l => l.classList.remove("active"));
          link.classList.add("active");

          window.scrollTo({
              top: targetSection.offsetTop,
              behavior: "smooth",
          });
      });
  });

  // Highlight the current section in the navbar
  window.addEventListener("scroll", () => {
      // If a section was clicked recently (within last 1.5 seconds), prioritize it
      if (clickedSection && Date.now() - clickTime < 1500) {
          return; // Skip the rest of the function to keep the clicked link active
      }
      
      let current = "";
      
      // Check if we're at the bottom of the page
      const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 100;
      
      if (isAtBottom) {
          // If we're at the bottom of the page, highlight the Downloads link
          current = "downloads";
      } else {
          // Otherwise, determine the current section based on scroll position
          sections.forEach((section) => {
              const sectionTop = section.offsetTop - 100;
              const sectionBottom = sectionTop + section.offsetHeight;
              
              // Check if we're within this section's boundaries
              if (scrollY >= sectionTop && scrollY < sectionBottom) {
                  current = section.getAttribute("id");
              }
          });
      }

      // Only update if we found a valid section
      if (current) {
          navbarLinks.forEach((link) => {
              link.classList.remove("active");
              if (link.getAttribute("href").includes(current)) {
                  link.classList.add("active");
              }
          });
      }
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
