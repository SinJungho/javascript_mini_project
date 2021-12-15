const slideBox = document.querySelector('.slide__box');
const slideItem = document.querySelectorAll('.slide__item');
const slideNext = document.querySelector('.slide__btn__next');
const slidePrev = document.querySelector('.slide__btn__prev');
const slideDots = document.querySelector('.slide__dots');
const slideLen = slideItem.length;
const slideWidth = 460;
const slideSpeed = 400;

slideBox.style.width = slideWidth * (slideLen) + 'px';

let curIndex = 0;

slideNext.addEventListener('click', function () {
  if (curIndex < slideLen - 1) {
    slideBox.style.transition = slideSpeed + 'ms';
    slideBox.style.transform = 'translate3d(-'+(slideWidth * (curIndex + 1))+'px, 0px, 0px)';  
  } else{
    slideBox.style.transform = 'translate3d(0px, 0px, 0px)';
    curIndex = -1;
  }
  curSlide = slideItem[++curIndex];
});

