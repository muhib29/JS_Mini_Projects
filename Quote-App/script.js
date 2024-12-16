const api_url = "https://api.api-ninjas.com/v1/quotes"; // Example category
const api_key = "P7lofJv9mvy57DI5qLC0rw==6Cz2LFHfKI1SM4e2"; // Replace with your actual API key
const quote = document.querySelector(".Quote");
const author = document.querySelector("span");
const nextButton = document.querySelector(".btn");

let quotes = [];
let currentIndex = 0;

async function getQuotes(url) {
  let response = await fetch(api_url, { 
    headers: { "X-Api-Key": api_key },
  });
  let data = await response.json();
 
data.forEach((quoteObj) => {
    console.log(quoteObj.quote)
    quote.innerHTML = quoteObj.quote
    author.innerHTML = quoteObj.author
});
nextButton.addEventListener("click" , function(e){
    getQuotes(api_url)
});
}

getQuotes(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=Hello%20world" + quote.innerHTML + "by---" + author.innerHTML, "Tweet Window" , "width=600 , height=300");
}