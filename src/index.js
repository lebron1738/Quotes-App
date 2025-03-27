
document.addEventListener("DOMContentLoaded", async function () {
  
  async function fetchQuotes() {
    try {
      const response = await fetch("./server/db.json"); // Path to the db.json file
      const data = await response.json();
      return data.quotes;
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  }

  // Function to display a random quote
  function displayQuote(quotes) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote-text").textContent = `"${randomQuote.text}"`;
    document.getElementById("quote-author").textContent = randomQuote.author;
  }

  // Initialize the quote generator
  async function init() {
    const quotes = await fetchQuotes();
    if (quotes) {
      displayQuote(quotes);

      // Button click event to fetch a new random quote
      document.getElementById("new-quote-btn").addEventListener("click", () => {
        displayQuote(quotes);
      });
    }
  }

  // Start the app once the DOM is fully loaded
  init();
});
