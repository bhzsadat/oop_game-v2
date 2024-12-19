/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Add event listeners, enabling user interaction for the start button and onscreen keyboard buttons
let game;
const button = document.querySelector('#btn__reset');
button.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', e => {
        game.handleInteraction(e.target);
    });
});