$(document).ready(function () {
    $("#uploadForm").on("change", fileUpload);
});

function fileUpload() {
    let files =event.target.files
    console.log(files, 'this is the file?');
    let filename =files[0].name
    console.log(filename, 'this is the filename?');
    let file = filename
    console.log(file, 'file to be sent');

    $.ajax({
        type:'POST',
        url: '/api/read',
        data: file
    }).then((response) => {
        console.log(response);
        getData();
    });
}

