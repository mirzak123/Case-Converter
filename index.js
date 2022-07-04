let upperCaseButton = document.getElementById('upper-case');
let lowerCaseButton = document.getElementById('lower-case');
let properCaseButton = document.getElementById('proper-case');
let sentenceCaseButton = document.getElementById('sentence-case');
let saveTextFileButton = document.getElementById('save-text-file');
let textArea = document.querySelector('textarea');

upperCaseButton.addEventListener('click', function() {
    let text = textArea.value;
    textArea.value = text.toUpperCase();
})

lowerCaseButton.addEventListener('click', function() {
    let text = textArea.value;
    textArea.value = text.toLowerCase();
})

properCaseButton.addEventListener('click', function() {
    let text = textArea.value;
    textArea.value = text.split(' ').map(word => word[0].toUpperCase() +
        word.substring(1).toLowerCase()).join(' ');
})

sentenceCaseButton.addEventListener('click', function() {
    let text = textArea.value;
    textArea.value = text.split('. ').map(word => word[0].toUpperCase() +
        word.substring(1).toLowerCase()).join('. ');
})

saveTextFileButton.addEventListener('click', function() {
    download('text.txt', textArea.value);
});


function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}