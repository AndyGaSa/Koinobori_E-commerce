let index = 0;
const numberOfSlides = 6;
const carouselContainer = document.querySelector(".scrollable__list");
const carouselItemWidth = carouselContainer.scrollWidth / numberOfSlides;

let indexV = 0;
const numberOfSlidesV = 19;
const carouselContainerV = document.querySelector(".scrollable__list-vertical");
const carouselItemWidthV = carouselContainerV.scrollWidth / numberOfSlidesV;

let nextButton = document.getElementById('next-button');
nextButton.addEventListener("click", function(){
    next();
});

let backButton = document.getElementById('back-button');
backButton.addEventListener("click", function(){
    back();
});

let nextButtonV = document.getElementById('next-button-vertical');
nextButtonV.addEventListener("click", function(){
    nextVertical();
});

let backButtonV = document.getElementById('back-button-vertical');
backButtonV.addEventListener("click", function(){
    backVertical();
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

function nextVertical(){
    if(indexV===19) return;

    if(document.querySelector(".header-container").backgroundColor === "black"){
        carouselContainerV.scrollBy(carouselItemWidthV*2, 0);
        indexV += 2;
    }
    else{
        console.log("ee");
        carouselContainerV.scrollBy(carouselItemWidthV*7, 0);
        indexV += 7;
    }
    if(indexV>0)
        backButtonV.style.visibility= "visible";
    else if(indexV>=18)
        nextButtonV.style.visibility= "hidden";
}

function backVertical() {
    if(indexV===0) return;
    if(document.querySelector(".header-container").backgroundColor === "black"){
        carouselContainerV.scrollBy(-carouselItemWidthV*2, 0);
        indexV += 2;
    }
    else{
        carouselContainerV.scrollBy(-carouselItemWidthV*7, 0);
        indexV += 7;
    }
    if(indexV<=0)
        backButtonV.style.visibility= "hidden";
    else if(indexV>=18)
        nextButtonV.style.visibility = "visible";
}