// Typing Animation

const words = ["with AI", "with Coding", "with Cloud", "with Innovation"];

let wordIndex = 0;
let charIndex = 0;

const typingText = document.getElementById("typing");

function typeEffect(){

    if(charIndex < words[wordIndex].length){

        typingText.textContent += words[wordIndex][charIndex];
        charIndex++;

        setTimeout(typeEffect,100);

    }
    else{

        setTimeout(eraseEffect,1500);
    }
}

function eraseEffect(){

    if(charIndex > 0){

        typingText.textContent = words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }
    else{

        wordIndex++;

        if(wordIndex >= words.length){
            wordIndex = 0;
        }

        setTimeout(typeEffect,300);
    }
}

typeEffect();


// Dark Light Mode

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");

});