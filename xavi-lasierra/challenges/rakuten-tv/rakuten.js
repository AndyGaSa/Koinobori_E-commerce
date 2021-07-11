let index = 0;
const numberOfSlides = 6;
const carouselContainer = document.querySelector(".scrollable__list");
const carouselItemWidth = carouselContainer.scrollWidth / numberOfSlides;

let nextButton = document.getElementById('next-button');
nextButton.addEventListener("click", function(){
    next();
});

let backButton = document.getElementById('back-button');
backButton.addEventListener("click", function(){
    back();
});

function next(){
    if(index===5) return;
    carouselContainer.scrollBy(carouselItemWidth, 0);
    index++;
    if(index==1)
        backButton.style.visibility= "visible";
    else if(index===4)
        nextButton.style.visibility= "hidden";
}

function back() {
    if(index===0) return;
    carouselContainer.scrollBy(-carouselItemWidth, 0);
    index--;
    if(index===0)
        backButton.style.visibility= "hidden";
    else if(index===3)
        nextButton.style.visibility = "visible";
}