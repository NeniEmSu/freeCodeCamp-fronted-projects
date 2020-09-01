const quoteIndex = Math.floor(Math.random() * quotes.length - 1)
new Vue({
    el: '#app',
    data: {
        name: 'Bob Ross',
        quotes,
        currentQuote: quotes[quoteIndex]
    },
    methods: {
        newQuote: function () {
            this.currentQuote = quotes[Math.floor(Math.random() * quotes.length - 1)]
        }
    }
})