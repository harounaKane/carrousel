let images = [
    {path: "images/1.jpg", title: "1 Image avec pleine de peinture"},
    {path: "images/2.jpg", title: "2 Pont au dessus de la seine"},
    {path: "images/3.jpg", title: "3 Un musé quelque part"},
    {path: "images/4.jpg", title: "4 Vue panoramique sur des building"},
    {path: "images/5.jpg", title: "5 Dubai by night"},
    {path: "images/6.jpg", title: "6 La tour Effeil"}
];

let menu = document.getElementById("toolbar-toggle");
let toolbar =  document.querySelector(".toolbar");
// let toolbar =  document.getElementsByClassName("toolbar")[0];
let sliderPrevious = document.getElementById("slider-previous");
let sliderToggle = document.getElementById("slider-toggle");
let sliderNext = document.getElementById("slider-next");
let sliderRandom= document.getElementById("slider-random");
let icon = document.querySelector("#slider-toggle i");

let img = document.querySelector("#slider img");
let title = document.querySelector("#slider figcaption");

sliderPrevious.addEventListener("click", previous);
sliderToggle.addEventListener("click", play);
sliderNext.addEventListener("click", next);
sliderRandom.addEventListener("click", random);

// position image dans le tableau 'images'
let index = 0;
let timerPlay = null;
let timerRandom = null;

refresh();

menu.addEventListener("click", () => {
    barreOutil();
});

function previous(){
    // index = (index - 1) % images.length;
   index--; // index = index - 1   // index -= 1
   if( index < 0 ){
    index = images.length - 1;
   }

    refresh();
}

function play(){

    if( timerRandom !== null ){
        icon.classList.add("fa-play");
        icon.classList.remove("fa-pause");
        clearInterval(timerRandom);
        timerRandom = null;

        return;
    }


    icon.classList.toggle("fa-play");
    icon.classList.toggle("fa-pause");

    if( timerPlay == null ){        
        timerPlay = setInterval(next, 1000);
    }else{
        clearInterval(timerPlay);
        timerPlay = null;
    }
}

function random(){
    
    if( timerPlay !== null ){
        clearInterval(timerPlay);
        timerPlay = null;
    }else{
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
    }
    
    if( timerRandom == null ){
        timerRandom = setInterval( () => {
            
            const CURRENT_POS = index;
            
            do{
                index = Math.floor( Math.random() * images.length );
            }while( CURRENT_POS == index ); 
            
            refresh();
        }, 1000);
    }
}

function next(){
    index = (index + 1) % images.length;
    refresh();
}

function barreOutil(){
    toolbar.classList.toggle("d-none");
}

function refresh(){
    img.src = images[index].path;
    title.innerHTML = images[index].title;
}


document.addEventListener("keyup", (e) => {
    switch( e.key ){
        case "ArrowLeft":
            previous();
            break;

        case "ArrowRight":
            next();
            break;

        case " ":
            play();
            break;
    }
    
});