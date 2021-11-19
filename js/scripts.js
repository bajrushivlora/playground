var text= document.querySelector(".welcome_text");
var button = document.querySelector(".welcome_button");
var buttonText = document.querySelector(".welcome_button_text");

function showText() {
    text.style.opacity = "1";
}

function showButtonText() {
    buttonText.style.opacity = "1";
}

setTimeout(showText, 16000);
setTimeout(showButtonText, 18000);
