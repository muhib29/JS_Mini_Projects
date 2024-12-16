const access_Key =  "WCKGmFCF6wKY7fiaEANXPQNGIVnlJJYp8zlMQgmd4yQ";
const searchForm = document.getElementById("searchForm");
const searchBox = document.getElementById("searchBox");
const searchresult = document.querySelector(".searchresult");
const showmorebtn = document.getElementById("showmorebtn");
const  nextBtn = document.getElementById("nextBtn");

let searchQuery = ""; 
let page = 1;

async function searchImg() {
    searchQuery =searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchQuery}&client_id=${access_Key}&per_page=12`;
    const res = await fetch(url)
    const data = await res.json();
    // console.log(data)
    if(page === 1){
        searchresult.innerHTML = "";
    }
    const results = data.results;
    console.log(results)
    results.map((result) =>{    
        const img = document.createElement("img");
        img.src = result.urls.small;
        const  imagelink =  document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.appendChild(img);
        searchresult.appendChild(imagelink);
        searchresult.removeAttribute('id')
    })
    showmorebtn.style.display = "block";
    nextBtn.style.display = "block";
}

showmorebtn.addEventListener("click" , ()=>{
    page++;
    searchImg();
})

nextBtn.addEventListener("click" , ()=>{
    page++;
    searchresult.innerHTML = "";
    searchImg();
})
searchForm.addEventListener("submit" , (e)=>{
    e.preventDefault();
    page= 1;
    searchImg();
})