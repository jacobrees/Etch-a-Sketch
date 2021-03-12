const etchBoard = document.querySelector('.etch-board');
const boardSize = 16 * 16;
let etchDiv = '';

for (let i = 0; i < boardSize; i += 1) {
  etchDiv += '<div class="etch-square"></div>';
}
etchBoard.innerHTML = etchDiv;

const etchSquare = document.querySelectorAll('.etch-square');
etchSquare.forEach((square) => {
  square.style.width = `${550 / 16 - 2}px`;
  square.style.height = `${550 / 16 - 2}px`;
});

etchSquare.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'black';
  });
});

const resetBtn = document.querySelector('.reset-btn');

resetBtn.addEventListener('click', () => {
  etchSquare.forEach((square) => {
    square.style.backgroundColor = 'white';
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black';
    });
  });
});

const penBtn = document.querySelector('.pen-btn');

penBtn.addEventListener('click', () => {
  etchSquare.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black';
    });
  });
});

const eraserBtn = document.querySelector('.eraser-btn');

eraserBtn.addEventListener('click', () => {
  etchSquare.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'white';
    });
  });
});