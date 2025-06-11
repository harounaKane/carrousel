
let menu = document.getElementById("toolbar-toggle");
let toolbar =  document.getElementsByClassName("toolbar")[0];
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

let images = [
    {path: "images/1.jpg", title: "Image avec pleine de peinture"},
    {path: "images/2.jpg", title: "Pont au dessus de la seine"},
    {path: "images/3.jpg", title: "Un musé quelque part"},
    {path: "images/4.jpg", title: "Vue panoramique sur des building"},
    {path: "images/5.jpg", title: "Dubai by night"},
    {path: "images/6.jpg", title: "La tour Effeil"}
];



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
    img.src = images[3].path;
    title.innerHTML = images[3].title;
}

function random(){
    console.log("random");
}

function barreOutil(){
    toolbar.classList.toggle("d-none");
}

