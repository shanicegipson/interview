$(document).ready(init);

function init() {
    $('.file-submit').on('click', addFile);
    // getReadFile();
}

//takes in file from upload and gives it path
//need to add code to get to just the file
function addFile () {
    let file = $('.file-uploaded').val();
    console.log(file, 'this is the file');

    postFileToRead(file);
}
//will send file to server
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