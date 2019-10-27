$(document).ready(init);

function init() {
    $('.file-submit').on('click', addFile);
    // getReadFile();
}

function addFile () {
    let file = $('.file-uploaded').val()
    console.log(file, 'this is the file');

    postFileToRead(file);
}

function postFileToRead(file) {
    console.log(file, 'File being sent to server');
    $.ajax({
        type: 'POST',
        url: `api/read`,
        data: file
    }).then((response) => {
        // getReadFile();
    })
}