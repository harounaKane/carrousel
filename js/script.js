
let menu = document.getElementById("toolbar-toggle");
let toolbar =  document.getElementsByClassName("toolbar")[0];
let sliderPrevious = document.getElementById("slider-previous");
let sliderToggle = document.getElementById("slider-toggle");
let sliderNext = document.getElementById("slider-next");
let sliderRandom= document.getElementById("slider-random");

sliderPrevious.addEventListener("click", previous);
sliderToggle.addEventListener("click", play);
sliderNext.addEventListener("click", next);
sliderRandom.addEventListener("click", random);


menu.addEventListener("click", () => {
    barreOutil();
});

function previous(){
    console.log("previous");
}

function play(){
    console.log("play");
}

function next(){
    console.log("next");
}

function random(){
    console.log("random");
}

function barreOutil(){
    toolbar.classList.toggle("d-none");
}

