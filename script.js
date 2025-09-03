const gameBoard = document.getElementById('game-board');
const movesCounter = document.getElementById('moves');
const timerDisplay = document.getElementById('timer');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart');

let cards = [];
let flippedCards = [];
let moves = 0;
let timer = 0;
let interval = null;

// اعداد کارت‌ها (8 جفت)
const cardValues = [1,2,3,4,5,6,7,8];

function startGame() {
    gameBoard.innerHTML = '';
    cards = [];
    flippedCards = [];
    moves = 0;
    movesCounter.textContent = `حرکت‌ها: ${moves}`;
    timer = 0;
    timerDisplay.textContent = `زمان: 0s`;
    message.textContent = '';
    clearInterval(interval);
    interval = setInterval(() => {
        timer++;
        timerDisplay.textContent = `زمان: ${timer}s`;
    }, 1000);

    // دو بار هر کارت برای جفت
    let deck = [...cardValues, ...cardValues];
    deck.sort(() => Math.random() - 0.5);

    deck.forEach(value => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<div class="front">?</div><div class="back">${value}</div>`;
        card.dataset.value = value;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
        cards.push(card);
    });
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            moves++;
            movesCounter.textContent = `حرکت‌ها: ${moves}`;
            checkMatch();
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.value === card2.dataset.value) {
        flippedCards = [];
        checkWin();
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

function checkWin() {
    if (cards.every(card => card.classList.contains('flipped'))) {
        message.textContent = `🎉 تبریک! پازل کامل شد در ${moves} حرکت و ${timer} ثانیه!`;
        clearInterval(interval);
    }
}

restartBtn.addEventListener('click', startGame);

// شروع بازی اولیه
startGame();
