
document.addEventListener("DOMContentLoaded", async function () {
  
  async function fetchQuotes() {
    try {
      const response = await fetch("./server/db.json"); 
      const data = await response.json();
      return data.quotes;
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  }

 
  function displayQuote(quotes) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote-text").textContent = `"${randomQuote.text}"`;
    document.getElementById("quote-author").textContent = randomQuote.author;
  }

 
  async function init() {
    const quotes = await fetchQuotes();
    if (quotes) {
      displayQuote(quotes);

      
      document.getElementById("new-quote-btn").addEventListener("click", () => {
        displayQuote(quotes);
      });
    }
  }

  
  init();
});
