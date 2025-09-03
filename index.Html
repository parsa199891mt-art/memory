const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const gameScreen = document.getElementById('game-screen');
const container = document.getElementById('puzzle-container');
const shuffleBtn = document.getElementById('shuffle');
const message = document.getElementById('message');
const size = 3;
let pieces = [];
let firstClick = null;

// شروع بازی
startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    createPuzzle();
});

// ایجاد قطعات پازل
function createPuzzle() {
    container.innerHTML = '';
    pieces = [];
    let count = 1;
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const piece = document.createElement('div');
            piece.classList.add('piece');
            piece.textContent = count++;
            piece.dataset.pos = piece.textContent;
            container.appendChild(piece);
            pieces.push(piece);

            piece.addEventListener('click', () => {
                if (!firstClick) {
                    firstClick = piece;
                    piece.classList.add('active');
                } else if (firstClick === piece) {
                    firstClick.classList.remove('active');
                    firstClick = null;
                } else {
                    swapPieces(firstClick, piece);
                    firstClick.classList.remove('active');
                    firstClick = null;
                    checkWin();
                }
            });
        }
    }
}

// جابه‌جایی دو قطعه
function swapPieces(a, b) {
    const tempText = a.textContent;
    a.textContent = b.textContent;
    b.textContent = tempText;

    const tempPos = a.dataset.pos;
    a.dataset.pos = b.dataset.pos;
    b.dataset.pos = tempPos;
}

// شافل کردن پازل
function shuffle() {
    for (let i = 0; i < pieces.length; i++) {
        const j = Math.floor(Math.random() * pieces.length);
        swapPieces(pieces[i], pieces[j]);
    }
    message.textContent = '';
}

shuffleBtn.addEventListener('click', shuffle);

// بررسی برنده شدن
function checkWin() {
    let win = true;
    for (let i = 0; i < pieces.length; i++) {
        if (parseInt(pieces[i].textContent) !== i + 1) {
            win = false;
            break;
        }
    }
    if (win) {
        message.textContent = '🎉 تبریک! پازل کامل شد!';
        container.style.backgroundColor = '#d4edda';
    }
}
