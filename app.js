const texts = ['hey cutie :) , whats ya name...?'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';


(function type(){
    
    if (count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.introText').textContent = letter;
   
    setTimeout(type, 400);

}());