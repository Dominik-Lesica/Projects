const backButton = document.querySelector('.back-icon');
const nextButton = document.querySelector('.next-icon');
const imageWrapper = document.querySelector('.image-wrapper');
const body = document.querySelector('body');

const imgUrls = ['img0', 'img1', 'img2', 'img3', 'img4'];

let backImage = 0;
let currentImage = 0;
let nextImage = 0;


function flipThroughUrls(direction) {
  if(direction === 'back'){
    currentImage--;
  } else if(direction === 'next'){
    currentImage++;
  }

  if(currentImage > imgUrls.length - 1){
    currentImage = 0;
  } else if(currentImage < 0){
    currentImage = imgUrls.length - 1;
  }

  backImage = currentImage - 1;
  if(backImage < 0){
    backImage = imgUrls.length - 1;
  }

  nextImage = currentImage + 1;
  if(nextImage > imgUrls.length - 1){
    nextImage = 0;
  }
}

function addAnimation(direction) {
  document.querySelectorAll('.img').forEach((image) => {
    image.classList.add(`slide-${direction}`);
  });
}

function generateImages() {
  body.addEventListener('animationend', () => {
    imageWrapper.innerHTML = `
    <img class="img ${imgUrls[backImage]}">
    <img class="img ${imgUrls[currentImage]}">
    <img class="img ${imgUrls[nextImage]}">
  `;
  }); 
}


nextButton.addEventListener('click', () => {
  addAnimation('next');
  flipThroughUrls('next');
  generateImages();
});
backButton.addEventListener('click', () => {
  addAnimation('back');
  flipThroughUrls('back');
  generateImages();
});




