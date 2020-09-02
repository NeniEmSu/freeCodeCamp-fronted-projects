const quoteText = document.querySelector('#text')
const authorText = document.querySelector('#author')
const newQuoteBtn = document.querySelector('#new-quote')
const tweetQuoteBtn = document.querySelector('#tweet-quote')
let currentQuote

const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length - 1)];
}

currentQuote = getRandomQuote()

quoteText.innerHTML = currentQuote.quoteText
authorText.innerHTML = currentQuote.quoteAuthor