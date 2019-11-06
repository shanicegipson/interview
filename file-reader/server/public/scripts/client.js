$(document).ready(function() {
    $("#fileUploadControl").on("change", fileUpload);
});

function fileUpload (event) {
    let fileUploadedPath = event.target.value;
    console.log(fileUploadedPath, 'this is the file that was uploaded');
    let file = fileUploadedPath;
    console.log(file, 'this is the file that was uploaded');
    

    // let fileReader = new FileReader();

    // fileReader.onload = function(event){
    //     let fileContents = event.target.result;
    //     $("#fileDisplay").text(fileContents);
    // }
    // fileReader.readAsText(file);
}
