(function() {
    commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(commentForm);
    const payload = new URLSearchParams(formData);
    fetch('https://run.mocky.io/v3/ffd9f436-5b1e-4ca2-b31d-7c81efdad01c', {
    method: 'POST',
    body: payload,
    })
    .then(res => res.json())
    .then(data => console.log(data))
    })
    })();