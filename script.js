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
  