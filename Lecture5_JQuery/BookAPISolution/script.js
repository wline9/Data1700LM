$(document).ready(function () {
    $('#fetch-chapter').on('click', function () {
        $.ajax({
            url: 'https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582/chapter',
            method: 'GET',
            success: function (response) {
                console.log(response)
                console.log(response.docs[0].chapterName)
                content = $("#chapter-display ul");
                for (let i = 0; i<response.docs.length; i++){
                    content.append(`<li>${response.docs[i].chapterName}</li>`)
                }

                // response.docs.forEach(doc => {
                //     content.append(`<li>${doc.chapterName}</li>`)
                // });

                // $.each(response.docs, function(index, doc) {
                //     content.append(`<li>${doc.chapterName}</li>`);
                // });
            },
            error: function () {
                alert('Something went wrong! Please try again.');
            }
        });
    });
});