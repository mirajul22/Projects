const Quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.querySelector(".btn");

const API_URL = "https://api.quotable.io/random";

const getQuote = async () => {
  const data = await fetch(API_URL);
  const response = await data.json();
  console.log(response);

  Quote.innerHTML = response.content;
  author.innerHTML = response.author;
};
getQuote();

button.addEventListener("click", () => {
  getQuote();
});

const Twitter = () => {
  window.open((href = "https://twitter.com/intent/tweet?text=Hello%20world"));
};
