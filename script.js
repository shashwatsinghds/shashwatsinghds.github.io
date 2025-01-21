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

