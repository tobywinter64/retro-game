// This file contains the main game logic for the Dance Dance Revolution style game.

let canvas;
let ctx;
let notes = [];
let gameRunning = false;

function startGame() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    gameRunning = true;
    requestAnimationFrame(gameLoop);
}

function gameLoop() {
    if (gameRunning) {
        updateGame();
        renderNotes();
        requestAnimationFrame(gameLoop);
    }
}

function updateGame() {
    // Update the position of notes and check for collisions
    for (let i = notes.length - 1; i >= 0; i--) {
        notes[i].y += notes[i].speed;
        if (notes[i].y > canvas.height) {
            notes.splice(i, 1); // Remove notes that have gone off screen
        }
    }
}

function renderNotes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    notes.forEach(note => {
        ctx.drawImage(note.image, note.x, note.y);
    });
}

function addNote(note) {
    notes.push(note);
}

export { startGame, updateGame, renderNotes, addNote };