const player_one = 'O';
const player_two = 'X';

const checkWinner = (board, player) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      board[a].getAttribute('data-value') === player &&
      board[b].getAttribute('data-value') === player &&
      board[c].getAttribute('data-value') === player
    ) {
      return true;
    }
  }
  return false;
};

const checkDraw = board => {
  for (let i = 0; i < board.length; i++) {
    if (board[i].getAttribute('data-value') === null) {
      return false;
    }
  }
  return true;
};

const clearBoard = board => {
  document.getElementById('player').innerHTML = 'Player 1';
  board.forEach(cell => {
    cell.removeAttribute('data-value');
    cell.innerHTML = '';
    cell.classList.remove('input');
  });
};

document.addEventListener('DOMContentLoaded', function () {
  let col = document.querySelectorAll('.col');
  col.forEach(item => {
    item.addEventListener('click', function () {
      let player = document.getElementById('player');
      if (player.innerHTML === 'Player 1') {
        if (item.getAttribute('data-value') === null) {
          player.innerHTML = 'Player 2';
          item.append(player_one);
          item.setAttribute('data-value', player_one);
          item.classList.add('input');
        }
        if (checkWinner(col, player_one)) {
          alert('Player One Wins!');
          clearBoard(col);
        }
        if (checkDraw(col)) {
          alert('Draw!');
          clearBoard(col);
        }
      } else {
        if (item.getAttribute('data-value') === null) {
          player.innerHTML = 'Player 1';
          item.append(player_two);
          item.setAttribute('data-value', player_two);
          item.classList.add('input');
        }
        if (checkWinner(col, player_two)) {
          alert('Player Two Wins!');
          clearBoard(col);
        }
        if (checkDraw(col)) {
          alert('Draw!');
          clearBoard(col);
        }
      }
    });
  });
});
