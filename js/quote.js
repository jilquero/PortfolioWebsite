const api = "https://api.quotable.io/random";

function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      $("#quote__quote").html(`"${data.content}"`);
      $("#quote__author").html(`- ${data.author}`);
    });
}

$(".page__quote").click(getQuote);
getQuote();
