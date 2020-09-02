const quoteText = document.querySelector('#text')
const authorText = document.querySelector('#author')
const newQuoteBtn = document.querySelector('#new-quote')
const tweetQuoteBtn = document.querySelector('#tweet-quote')
let currentQuote

fetch('https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))

const getRandomQuote = () => {
    return quotes[Math.floor((Math.random() * quotes.length - 1) + 1)];
}

currentQuote = getRandomQuote()
quoteText.innerHTML = currentQuote.quoteText
authorText.innerHTML = currentQuote.quoteAuthor
tweetQuoteBtn.setAttribute('href', `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${currentQuote.quoteText}%20\n${currentQuote.quoteAuthor}`)

newQuoteBtn.onclick = () => {
    currentQuote = getRandomQuote()
    quoteText.innerHTML = currentQuote.quoteText
    authorText.innerHTML = currentQuote.quoteAuthor
    tweetQuoteBtn.setAttribute('href', `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${currentQuote.quoteText}%20\n${currentQuote.quoteAuthor}`)
}