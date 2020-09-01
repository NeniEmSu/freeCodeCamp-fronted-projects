new Vue({
  el: "#app",
  data: {
    quotes: [],
    currentQuote: {},
    loading: false,
    animatingIn: false,
    animatingOut: false
  },
  mounted() {
    this.getQuotes();
  },
  methods: {
    getRandomQuote: function () {
      this.currentQuote = this.quotes[
        Math.floor(Math.random() * this.quotes.length - 1)
      ];
    },
    getQuotes: function () {
      this.loading = true;
      axios
        .get(
          "https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json"
        )
        .then((response) => {
          this.quotes = response.data;
          this.getRandomQuote()
        })
        .catch((error) => {
          console.log(error);
        });
      this.loading = false;
    }
  }
});
