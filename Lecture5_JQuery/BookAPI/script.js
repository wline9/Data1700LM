$(document).ready(function () {
    $('#fetch-chapter').on('click', function () {
        $.ajax({
            url: 'https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582/chapter',
            method: 'GET',
            success: function (response) {
                console.log(response)
                console.log(response.docs[0].chapterName)
                //TODO: Use JQuery and DOM manipulation to add a list of all the chapters to #chapter-display

            },
            error: function () {
                alert('Something went wrong! Please try again.');
            }
        });
    });
});