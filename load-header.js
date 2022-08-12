fetch('header.html').then(function (response) {
    return response.text();
}).then(function (html) {
    document.getElementById("header").innerHTML = html;
}).catch(function (err) {
    console.warn('Something went wrong.', err);
});