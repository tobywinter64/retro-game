// This file handles user input for the Dance Dance Revolution style game.
// It exports functions to set up input listeners and check for key presses.

let keys = {};

export function setupInputListeners() {
    window.addEventListener('keydown', (event) => {
        keys[event.key] = true;
    });

    window.addEventListener('keyup', (event) => {
        keys[event.key] = false;
    });
}

export function isKeyPressed(key) {
    return keys[key] === true;
}