// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");



function getUserValue(event) {

    a = event.key
    event.preventDefault();
    console.log(HREF_LINK);
    console.log(INPUT_CHECKBOX);
    if(a ==='a'){
        console.log('apertou a tecla A');
        console.log(INPUT_TEXT);
    }
}

INPUT_TEXT.addEventListener('keypress', getUserValue)
INPUT_CHECKBOX.addEventListener('click', getUserValue)
HREF_LINK.addEventListener('click', getUserValue)