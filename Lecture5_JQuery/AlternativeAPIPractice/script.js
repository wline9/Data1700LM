$(document).ready(function () {
    $('#fetch-excuse').on('click', function () {
        $.ajax({
            url: 'https://excuser-three.vercel.app/v1/excuse/',
            method: 'GET',
            success: function (response) {
                console.log(response)
                //TODO: Use JQuery and DOM manipulation to add a list element every time the api is called


            },
            error: function () {
                alert('Something went wrong! Please try again.');
            }
        });
    });
});