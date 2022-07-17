
const articleContainer = document.querySelector('#article-container');

getProducts();

async function getProducts() {
    const response = await fetch('https://mockend.com/org/repo/products');
    const productsArray = await response.json();
	renderProducts(productsArray);

    
}



function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `<div class="article">
        <div class="article-text">
            <h2  class="article-title" >${item.title}</h2>
            <p  class="article-description" >${item.desc} </p>
            <div class="article-item">
                <p  class="publication-date" >${item.datePub}</p>
                <a href="#">Read more</a>
            </div>
        </div>
        <div class="article-img">
            <img src="img/image 1.jpg">
        </div>
    </div>`;
        articleContainer.insertAdjacentHTML('beforeend', productHTML);
    });
    
}

