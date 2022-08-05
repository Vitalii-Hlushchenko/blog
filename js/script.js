
const articleContainer1 = document.querySelector('#article-container');

getArticles1();

async function getArticles1() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=2');
    const articlesArray = await response.json();
	renderArticles1(articlesArray);

    
}



function renderArticles1(articlesArray) {
    articlesArray.forEach(function (item) {
        const productHTML = `<div class="article">
        <div class="article-text">
            <h2  class="article-title" >${item.title}</h2>
            <p  class="article-description" >${item.body} </p>
            <div class="article-item">
                <p  class="publication-date" >May 20th 2020</p>
                <a href="#">Read more</a>
            </div>
        </div>
        <div class="article-img">
            <img src="img/image 1.jpg">
        </div>
    </div>`;
        articleContainer1.insertAdjacentHTML('beforeend', productHTML);
    });
    
}


const articleContainer2 = document.querySelector('#second-article-container');

getArticles2();

async function getArticles2() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
    const articlesArray = await response.json();
	renderArticles2(articlesArray);

    
}



function renderArticles2(articlesArray) {
    articlesArray.forEach(function (item) {
        const productHTML = `<div class="article article--second">
        <div class="article-img">
          <img src="img/image 2.jpg" />
        </div>
        <div class="article-text second--article-text">
          <h2 id="title" class="article-title second--article-title">
          ${item.title}
          </h2>
          <p id="desc" class="article-description">
            ${item.body}
          </p>
          <div class="article-item">
            <p id="datePub" class="publication-date">May 20th 2020</p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>`;
        articleContainer2.insertAdjacentHTML('beforeend', productHTML);
    });
    
}



const articleContainer3 = document.querySelector('#section-third-article');

getArticles3();

async function getArticles3() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=1');
    const articlesArray = await response.json();
	renderArticles3(articlesArray);

    
}



function renderArticles3(articlesArray) {
    articlesArray.forEach(function (item) {
        const productHTML = `<div class="article article--third">
        
        <div class="article-text third--article-text">
          <h2 id="title" class="article-title third--article-title">${item.title}</h2>
          <p id="desc" class="article-description">
            ${item.body}
          </p>
          <div class="article-item">
            <p id="datePub" class="publication-date">May 20th 2020</p>
            <a href="#">Read more</a>
          </div>
        </div>
        <div class="article-img">
          <img src="img/image 7.png" />
        </div>
      </div>`;
        articleContainer3.insertAdjacentHTML('beforeend', productHTML);
    });
    
}