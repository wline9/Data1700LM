$(document).ready(function() {
// select a element
    let elementJquery = $('.my-class');
    let elementJS = document.querySelector('.my-class');

// change element text content
    $('.my-class').text('Hello World');
    document.querySelector('.my-class').textContent = 'Hello World';

//add a class
    $('.my-class').addClass('active');
    document.querySelector('.my-class').classList.add('active');

// add a event listner
    $('.my-button').on('click', function () {
        alert('Button Clicked');
    });
    document.querySelector('.my-button').addEventListener('click', function () {
        alert('Button Clicked');
    });

    // take data from a form element
    const inputValueJQuery = $("#my-input").val();
    const inputValueJS = document.getElementById("myInput").value;


// gather data from a form
    $('form').on('submit', function (event) {
        event.preventDefault(); // Prevent actual form submission

        const data = $(this).serializeArray();
        console.log(data);
    });

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        console.log(data);
    });


//waiting to execut on the browser haveing finished loading the DOM
    $(document).ready(function () {
        console.log("ready")
    })

    $(function () {
        console.log("Document is ready!");
    });

    document.addEventListener("DOMContentLoaded", function () {
        console.log("ready")
    })


// request from url
// native JS ajax
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582/chapter", true);
    xhr.onload = () => console.log(JSON.parse(xhr.responseText));
    xhr.send();

// jquery ajax
    $.get("https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582/chapter", data => console.log(data));

// fetch
    fetch("https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582/chapter")
        .then(res => res.json()).then(console.log);


});