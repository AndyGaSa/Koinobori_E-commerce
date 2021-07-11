let index = 0;
const speed = 5;
const numberOfSlides = 5;
const carouselContainer = document.querySelector(".scrollable__list");
const carouselItemWidth = carouselContainer.scrollWidth / numberOfSlides;
setInterval(() => {
  carouselContainer.scrollBy(carouselItemWidth, 0);
  timeoutId = setTimeout(() => {
    index = index % numberOfSlides;
    let childToMove = carouselContainer.querySelectorAll(`.scrollable__item`)[
      index
    ];
    childToMove.style.order =
      childToMove.style.order && childToMove.style.order === 0
        ? 1
        : +childToMove.style.order + 1;
    index++;
    clearTimeout(timeoutId);
  }, 1000);
}, speed * 1000);