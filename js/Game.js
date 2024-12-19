/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('This is a camel that sleeps at every door'),
            new Phrase('they have salty eyes'),
            new Phrase('They count the chicks at the end of fall'),
            new Phrase('One day at a time'),
            new Phrase('Happy new year')
        ];
        this.activePhrase = null;
    }
    

     // Begins game by selecting a random phrase and displaying empty boxes and keyboard
     startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }


    // Get random phrase from phrases property
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }


    // Handles user interaction with the keyboard
    handleInteraction(button) {
        button.disabled = true;
        if (!this.activePhrase.checkLetter(button.textContent)) {
            button.className = 'key wrong';
            this.removeLife();
        } else {
            button.className = 'key chosen';
            this.activePhrase.showMatchedLetter(button.textContent);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        }
    }


     // Removes a life from the scoreboard
     removeLife() {
        const hearts = document.querySelectorAll('.tries img');
        hearts[this.missed].src = 'images/lostHeart.png';
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }


    // Checks if won
    checkForWin() {
        const ph = document.querySelectorAll('#phrase ul li');
        const allShown = [...ph].every(li => li.classList.contains('show') || li.classList.contains('space'));
        return allShown;
    }


    // Displays win/lose message
    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay');
        const message = document.querySelector('#game-over-message');
        overlay.style.display = 'flex';
        if (gameWon) {
            message.textContent = 'Yay You won!';
            overlay.className = 'win';
        } else {
            message.textContent = 'Oops you lost. Try again!';
            overlay.className = 'lose';
        }
        this.resetGame();
    }


    // Resets the game
    resetGame() {
        const ul = document.querySelector('#phrase ul');
        const ph = document.querySelectorAll('#phrase ul li');
        ph.forEach(li => ul.removeChild(li));
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            key.className = 'key';
            key.disabled = false;
        });
        const hearts = document.querySelectorAll('.tries img');
        hearts.forEach(heart => heart.src = 'images/liveHeart.png');
        this.missed = 0;
    }
}