const boxElements = document.querySelectorAll('.box');
const winMessage = document.querySelector('.win-message');
const resetButton = document.querySelector('.reset-button');
const body = document.querySelector('body');
const winingsymbol = document.querySelector('.wining-symbol');
let icon;
let crossBoxes = [];
let circleBoxes = [];
const winCombinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
let playingsymbol = 'cross';
let gameOver=false;

function putSymbol(index) {
  const activatedBox = boxElements[index];

  if (playingsymbol==='cross') {
    crossBoxes.push(index);
    activatedBox.classList.add("cross-box");
    activatedBox.innerHTML='<img src="icons/cross.png" class="play-icon">';
    playingsymbol = 'circle';
    body.style.backgroundColor = 'rgb(158, 158, 209)';
   
  } else if (playingsymbol==='circle') {
    circleBoxes.push(index);
    activatedBox.classList.add("circle-box");
    activatedBox.innerHTML='<img src="icons/circle.png" class="play-icon">';
    playingsymbol = 'cross';
    body.style.backgroundColor = 'rgb(255, 148, 148)';
  }
}


function checkWin(){

  let crossWinCounter = 0;
  let circleWinCounter = 0;

  for(let i = 0; i < winCombinations.length; i++) {
    const winCombination = winCombinations[i];

    for(let j = 0; j<winCombination.length;j++) {

      if(crossBoxes.includes(winCombination[j])) {
        crossWinCounter++;
      }

      if(circleBoxes.includes(winCombination[j])) {
        circleWinCounter++;
      }
    }
    if (crossWinCounter!==3) {
      crossWinCounter = 0;
    } else{
      break;
    }
    
    if(circleWinCounter!==3) {
      circleWinCounter = 0;
    } else{
      break;
    }
  }

  if (crossWinCounter===3 || circleWinCounter===3) {
    displayWin();
  } else if (crossBoxes.length + circleBoxes.length===9) {
    displayDraw();
  }
}


function displayWin() {
  if (playingsymbol==='circle') {
    winMessage.textContent = 'Cross won';
    winingsymbol.innerHTML='<img src="icons/cross.png" class="play-icon">'
  } else if (playingsymbol==='cross') {
    winingsymbol.innerHTML='<img src="icons/circle.png" class="play-icon">'
    winMessage.textContent = 'Circle won';
  }
  gameOver=true;
}

function displayDraw() {
  winMessage.textContent= 'a draw';
  gameOver=true;
}

function reset() {
  crossBoxes = [];
  circleBoxes = [];

  playingsymbol='cross';

  boxElements.forEach((box, index) => {
    box.classList.remove('cross-box');
    box.classList.remove('circle-box');

    box.innerHTML = '';

    function eventHandler () {
      if(gameOver || box.classList.contains('cross-box') || box.classList.contains('circle-box')) {
        box.removeEventListener('click', eventHandler);
      } else {
        putSymbol(index);
        checkWin();
      }
    };
    box.addEventListener('click', eventHandler);
  })
  gameOver=false;
  winMessage.textContent = '';
  body.style.backgroundColor = 'rgb(255, 148, 148)';
  winingsymbol.innerHTML='';
}


resetButton.addEventListener('click', reset);

boxElements.forEach((box,index) => {
  function eventHandler () {
    if(gameOver || box.classList.contains('cross-box') || box.classList.contains('circle-box')) {
      box.removeEventListener('click', eventHandler);
    } else {
      putSymbol(index);
      checkWin();
    }
  };
  box.addEventListener('click', eventHandler);
});