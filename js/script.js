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

let img = document.querySelector("#slider img");
let title = document.querySelector("#slider figcaption");

sliderPrevious.addEventListener("click", previous);
sliderToggle.addEventListener("click", play);
sliderNext.addEventListener("click", next);
sliderRandom.addEventListener("click", random);

// position image dans le tableau 'images'
let index = 0;
let timer = null;

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
    
    sliderToggle.firstChild.classList.toggle("fa-play")
    sliderToggle.firstChild.classList.toggle("fa-pause");

    if( timer == null ){
        timer = setInterval(next, 2000);
    }else{
        clearInterval(timer);
        timer = null;
    }
}

function next(){
    index = (index + 1) % images.length;
    refresh();
}

function random(){

    setInterval( () => {

        const CURRENT_POS = index;

        do{
            index = Math.floor( Math.random() * images.length );
        }while( CURRENT_POS == index ); 

        refresh()
    }, 1000);
}

function barreOutil(){
    toolbar.classList.toggle("d-none");
}

function refresh(){
    img.src = images[index].path;
    title.innerHTML = images[index].title;
}