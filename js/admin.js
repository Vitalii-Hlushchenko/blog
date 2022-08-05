
// GET DATA// 
const articleContainer = document.querySelector('#articles-container');

getProducts();

async function getProducts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const productsArray = await response.json();
	renderProducts(productsArray);

    
}
/**RENDER ARTICLES**/ 
function renderProducts(productsArray) {
  productsArray.forEach(function (item) {
      const productHTML = `<div class="article" id="article${item.id}">
      <p>${item.title}</p>
      <div class="article-admin-item">
        <p class="article-text">${item.body}</p>
        <button class="edit-btn" onclick="location.href='edit article.html'">Edit</button>

        <button onclick="deleteArticle(${item.id})" class="delete-btn">Delete</button>
      </div>
    </div>`;
      articleContainer.insertAdjacentHTML('beforeend', productHTML);
  });
}




/*CREATE ARTICLE*/ 

const form = document.querySelector('#create-form');


(function() {
    form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const payload = new URLSearchParams(formData);
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: payload,
    })
    .then(res => res.json())
    .then(data => console.log(data));
    })
    })();



/*DELETE ARTICLES*/ 

async function deleteArticle(id){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/${id}', {
    method: 'DELETE',
    headers:{
      'Content-Type':'application/json',
    }
  });
  const data = await res.json();
  console.log(data);

  if (data) {
    document.getElementById(`article${id}`).remove();
  }
}

/*EDIT ARTICLE*/ 



(function editArticle(id) {
    form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const payload = new URLSearchParams(formData);
    fetch('https://jsonplaceholder.typicode.com/posts/${id}', {
    method: 'PATCH',
    body: payload,
    
    })
    .then(res => res.json())
    .then(data => console.log(data));
    });
    })();
