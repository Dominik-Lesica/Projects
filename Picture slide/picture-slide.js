const backButton = document.querySelector('.back-icon');
const nextButton = document.querySelector('.next-icon');
const imageWrapper = document.querySelector('.image-wrapper');
const indexes = [0, 1, 2, 3, 4];
let imgCount = 1;

function nextImage() {
  imgCount++;
  imageWrapper.innerHTML = `<img src="img/img${imgCount}.jpg" class="img">`
  if(imgCount === 5) {
    imgCount = 0;
  }
}

function lastImage() {
  imgCount--;
  if(imgCount === 0) {
    imgCount = 5;
  }
  imageWrapper.innerHTML = `<img src="img/img${imgCount}.jpg" class="img">`
  
}

nextButton.addEventListener('click', nextImage);
backButton.addEventListener('click', lastImage);