const backButton = document.querySelector('.back-icon');
const nextButton = document.querySelector('.next-icon');
const imageWrapper = document.querySelector('.image-wrapper');
const body = document.querySelector('body');

const imgUrls = ['img0', 'img1', 'img2', 'img3', 'img4', 'img5'];

let backImage = 0;
let currentImage = 0;
let nextImage = 0;
let animationActive = false;

function flipThroughUrls(offset) {
  currentImage = (currentImage + offset + imgUrls.length) % imgUrls.length;
  nextImage = (currentImage + 1) % imgUrls.length;
  backImage = (currentImage - 1 + imgUrls.length) % imgUrls.length;
}

function addAnimation(direction) {
  animationActive = true;
  imageWrapper.classList.add(`slide-${direction}`);
}

function generateImages() {
  body.addEventListener('animationend', () => {
    imageWrapper.innerHTML = `
    <img class="img" style="background-image: url(img/${imgUrls[backImage]}.jpg);">
    <img class="img" style="background-image: url(img/${imgUrls[currentImage]}.jpg);">
    <img class="img" style="background-image: url(img/${imgUrls[nextImage]}.jpg);">
  `;
  imageWrapper.classList.remove('slide-next');
  imageWrapper.classList.remove('slide-back');
  animationActive = false;
  }); 
}

nextButton.addEventListener('click', () => {
  if(animationActive) return;
  addAnimation('next');
  flipThroughUrls(1);
  generateImages();

});

backButton.addEventListener('click', () => {
  if(animationActive) return;
  addAnimation('back');
  flipThroughUrls(-1);
  generateImages();
});