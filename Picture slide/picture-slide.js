const backButton = document.querySelector('.back-icon');
const nextButton = document.querySelector('.next-icon');
const imageWrapper = document.querySelector('.image-wrapper');
const imgs = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
let imgCount = 1;

function nextImage() {
  if (imgCount === 5) {
    imgCount = 1;
    console.log(imgCount);
  } else {
    imgCount++;
    console.log(imgCount);
  }
  
  const NextImage = imgs[imgCount-1];
  imageWrapper.innerHTML = `<img src="img/${NextImage}" class="img">`;
}

function lastImage() {
  if(imgCount === 1) {
    imgCount = 5;
    console.log(imgCount)
  } else {
    imgCount--;
    console.log(imgCount)
  }
  const lastImage = imgs[imgCount-1]
  imageWrapper.innerHTML = `<img src="img/${lastImage}" class="img">`
  
}

nextButton.addEventListener('click', nextImage);
backButton.addEventListener('click', lastImage);