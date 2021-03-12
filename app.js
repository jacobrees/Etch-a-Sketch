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
