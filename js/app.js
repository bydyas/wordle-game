import { dictionary } from './dictionary.js';

const cellList = document.querySelectorAll('.cell');
const btnReset = document.querySelector('#reset');
const btnCheck= document.querySelector('#check');

let isWin = false;
let randomWord = generateRandomWord();
let fisrtCell = 0;
let lastCell = 5;

btnCheck.onclick = checkWord;
btnReset.onclick = resetRound;

function generateRandomWord() {
    return dictionary[Math.floor(Math.random() * (dictionary.length + 1))];
}

function getWord() {
    let word = '';
    for (let i = fisrtCell; i < lastCell; i++) {
        word += cellList[i].value;
    }
    return word;
}

function resetCells() {
    for (let i = fisrtCell; i < lastCell; i++) {
        cellList[i].value = '';
    }
}

function colorLetters(word) {
    const indexOfNull = -1;

    for (let i = 0; i < randomWord.length; i++) {
        cellList[fisrtCell + i].classList.add('grey-spot');
        cellList[fisrtCell + i].readOnly = true;
        
        if (randomWord.indexOf(word[i]) !== indexOfNull) {
            cellList[fisrtCell + i].classList.add('another-spot');
        } 

        if (randomWord[i] === word[i]) {
            cellList[fisrtCell + i].classList.add('correct-spot');
        } 
    }
    
    return;
}

function checkGuessedWord(word) {
    colorLetters(word);
    
    if (word === randomWord) {
        isWin = true;
        alert('Congratulations! You won.');
        btnCheck.disabled = true;
    } 
}

function checkWord() {
    const word = getWord();
    const hasWord = dictionary.filter(item => item === word);

    if (!hasWord[0]) {
        alert('Not in word list');
        resetCells();
    } else {
        checkGuessedWord(word);
        incrementCellsIndexes();
    }
}
function resetRound() {
    const initLastCell = 5;
    
    cellList.forEach(cell => {
        cell.value = '';
        cell.className = 'cell';
        cell.readOnly = false;
    });

    isWin = false;
    randomWord = generateRandomWord();
    fisrtCell = 0;
    lastCell = initLastCell;
    btnCheck.disabled = false;
}

function incrementCellsIndexes() {
    const incrementNumber = 5;
    fisrtCell += incrementNumber;
    lastCell += incrementNumber;

    if (lastCell > cellList.length && !isWin) {
        gameOver();
    }
}

function gameOver() {
    alert('GAME OVER');
    btnCheck.disabled = true;
}
