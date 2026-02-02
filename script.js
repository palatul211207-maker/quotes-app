const quotes = [
    "Success comes to those who work hard.",
    "Never give up.",
    "Believe in yourself.",
    "Dream big and stay focused.",
    "Hard work always pays off."
];

function newQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[random];
}

newQuote();
