let etchBoard = document.querySelector('.etch-board');
const boardSize = 16 * 16;
let etchDiv = '';

for (let i = 0; i < boardSize; i += 1) {
  etchDiv += '<div class="etch-square"></div>';
}
etchBoard.innerHTML = etchDiv;

let etchSquare = document.querySelectorAll('.etch-square');
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

const rgbBtn = document.querySelector('.rgb-btn');

function randomColor() {
  const r = Math.floor((Math.random() * 250));
  const g = Math.floor((Math.random() * 250));
  const b = Math.floor((Math.random() * 250));

  return `rgb(${r}, ${g}, ${b})`;
}

rgbBtn.addEventListener('click', () => {
  etchSquare.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = randomColor();
    });
  });
});

const boardSelect = document.querySelector('.board-size');

boardSelect.addEventListener('change', (e) => {
  etchBoard = document.querySelector('.etch-board');
  etchBoard.innerHTML = '';
  etchDiv = '';
  const newBoardSize = e.target.value * e.target.value;
  const newSquareSize = `${550 / e.target.value - 2}px`;
  for (let i = 0; i < newBoardSize; i += 1) {
    etchDiv += '<div class="etch-square"></div>';
  }
  etchBoard.innerHTML = etchDiv;
  etchSquare = document.querySelectorAll('.etch-square');
  etchSquare.forEach((square) => {
    square.style.width = newSquareSize;
    square.style.height = newSquareSize;
  });
  etchSquare.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black';
    });
  });
});