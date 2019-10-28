$(document).ready(init);

function init() {
    $('.file-submit').on('click', addFile);
    // getReadFile();
}

function addFile () {
    let file = $('.file-uploaded')[0].files[0];
    console.log(file, 'this is the file');

    postFileToRead(file);
}

function postFileToRead(file) {
    console.log(file, 'File being sent to server');
    console.log(typeof file);
    $.ajax({
        type: 'POST',
        url: `api/read`,
        data: {path: file}
    }).then((response) => {
        // getReadFile();
    })
}