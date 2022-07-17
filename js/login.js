const form = document.querySelector('#form');


(function() {
    form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const payload = new URLSearchParams(formData);
    fetch('https://mockend.com/org/repo/users', {
    method: 'POST',
    body: payload,
    })
    .then(res => res.json())
    .then(data => console.log(data))
    })
    })();