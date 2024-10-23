document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    // Check if dark mode preference is saved
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      applyDarkMode();
      themeIcon.src = 'icons/light-mode.png'; // Set dark mode icon
    }
  
    // Add event listener to toggle button
    toggleButton.addEventListener('click', () => {
      if (document.body.classList.contains('dark-mode')) {
        removeDarkMode();
        themeIcon.src = 'icons/dark-mode.png'; // Set light mode icon
        localStorage.setItem('theme', 'light');
      } else {
        applyDarkMode();
        themeIcon.src = 'icons/light-mode.png'; // Set dark mode icon
        localStorage.setItem('theme', 'dark');
      }
    });
  
    // Function to apply dark mode
    function applyDarkMode() {
      document.body.classList.add('dark-mode');
      document.querySelector('header').classList.add('dark-mode');
      document.querySelector('nav').classList.add('dark-mode');
      document.querySelector('footer').classList.add('dark-mode');
      document.querySelectorAll('a').forEach(link => link.classList.add('dark-mode'));
      document.querySelectorAll('button').forEach(button => button.classList.add('dark-mode'));
      document.querySelectorAll('.container').forEach(container => container.classList.add('dark-mode'));
    }
  
    // Function to remove dark mode
    function removeDarkMode() {
      document.body.classList.remove('dark-mode');
      document.querySelector('header').classList.remove('dark-mode');
      document.querySelector('nav').classList.remove('dark-mode');
      document.querySelector('footer').classList.remove('dark-mode');
      document.querySelectorAll('a').forEach(link => link.classList.remove('dark-mode'));
      document.querySelectorAll('button').forEach(button => button.classList.remove('dark-mode'));
      document.querySelectorAll('.container').forEach(container => container.classList.remove('dark-mode'));
    }
  
    // Fun Fact JS
    document.getElementById("funFactBtn").addEventListener("click", function() {
      const funFacts = [
        "Data science is the sexiest job of the 21st century!",
        "Machine learning algorithms can learn from data without explicit programming!",
        "Did you know? The term 'Artificial Intelligence' was coined in 1956!",
        "Python is one of the most popular languages for data science.",
        "Data is the new oil, but it must be refined to be valuable!"
      ];
  
      const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
      document.getElementById("funFact").innerText = randomFact;
    });
  });
  