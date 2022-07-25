const form = document.querySelector('#create-form');


(function() {
    form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const payload = new URLSearchParams(formData);
    fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: payload,
    })
    .then(res => res.json())
    .then(data => console.log(data))
    })
    })();