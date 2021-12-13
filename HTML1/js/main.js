$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items:1,
    })
})


let editor;
ClassicEditor
.create( document.querySelector( '#editor' ),{
    toolbar: [ 'heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote','link' ],
} ).then(newEditor=>{
    editor = newEditor;
})

.catch( error => {
    console.error( error );
} );

document.getElementById('registrationForm').onsubmit = function(e){
    let editorInput = document.getElementById('editor');

    console.log(editorInput.value)
    e.preventDefault();
    document.querySelector('.text').innerHTML = editor.getData();
}

