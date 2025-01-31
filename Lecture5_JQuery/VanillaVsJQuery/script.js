$(document).ready(function() {
    $("selector").action()
    // select an element
    //jQuery
    let elementJquery = $('.my-class');
    //Native JS
    let elementJS = document.querySelector('.my-class');

    // change element text content
    //jQuery
    $('.my-class').text('Hello World');
    //Native JS
    document.querySelector('.my-class').textContent = 'Hello World';

    //add a class
    //jQuery
    $('.my-class').addClass('active');
    //Native JS
    document.querySelector('.my-class').classList.add('active');

    // add a event listner
    //jQuery
    $('.my-button').on('click', function () {
        alert('Button Clicked');
    });
    //Native JS
    document.querySelector('.my-button').addEventListener('click', function () {
        alert('Button Clicked');
    });

    // take data from a form element
    //jQuery
    const inputValueJQuery = $("#my-input").val();
    //Native JS
    const inputValueJS = document.getElementById("myInput").value;

    // gather data from a form
    //jQuery
    $('form').on('submit', function (event) {
        event.preventDefault(); // Prevent actual form submission

        const data = $(this).serializeArray();
        console.log(data);
    });
    //Native JS
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        console.log(data);
    });

    //waiting to execut on the browser haveing finished loading the DOM
    //jQuery
    $(document).ready(function () {
        console.log("ready")
    })
    //jQuery even simpler
    $(function () {
        console.log("Document is ready!");
    });
    //Native JS
    document.addEventListener("DOMContentLoaded", function () {
        console.log("ready")
    })


    // request from url
    // jQuery ajax
    $.get("https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582/chapter", data => console.log(data));

    // native JS ajax
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582/chapter", true);
    xhr.onload = () => console.log(JSON.parse(xhr.responseText));
    xhr.send();

    // fetch
    fetch("https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582/chapter")
        .then(res => res.json()).then(console.log);

});