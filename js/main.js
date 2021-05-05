console.log("This is project 3 which uses news API");

//heading
let heading = document.getElementById("heading");

// calling getNews function
getNews();

function getNews() {
    let API = "https://gnews.io/api/v4/search?q=example&token=485a163f2ec8333343a8d5b6a6fc08b0&lang=en";
    fetch(API).then(response => response.json())
        .then(data => {
            let myobj = data;
            console.log(myobj)
            let articles = myobj.articles;
            console.log(articles);
            let news = document.getElementById("news");
            let str = '';
            articles.forEach((element, index) => {
                str += `
                <div class="blog-card">
                    <div class="meta">
                        <div class="photo"
                            style="background-image: url(${element.image})">
                        </div>
                        <ul class="details">
                            <li class="author"><a href="${element.source.url}">${element.source.name}</a></li>
                            <li class="date">${element.publishedAt}</li>
                        </ul>
                    </div>
                    <div class="description">
                        <h1>${element.title}</h1>
                        <h2><strong>Source : </strong><i>${element.source.name}</i></h2>
                        <p>${element.description}</p>
                        <p class="read-more">
                            <a href="${element.url}" target="_blank">Read More</a>
                        </p>
                    </div>
                </div>
                `
            });
            news.innerHTML = str;

            let cards = document.querySelectorAll('.blog-card');
            cards.forEach((item, index) => {
                if(index % 2 != 0){
                    item.classList.add("alt");
                    console.log("done")
                }
            });
        })
}


