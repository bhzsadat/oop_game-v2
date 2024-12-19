/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }


    // Display phrase 
    addPhraseToDisplay() {
        const ul = document.querySelector('#phrase ul');
        let ph = this.phrase.split('');
        ph.forEach(char => {
            let li = document.createElement('li');
            if (char === ' ') {
                li.className = 'space';
            } else {
                li.className = `hide letter ${char}`;
            }
            li.textContent = char;
            ul.appendChild(li);
        });
    }


    // Check if character is in phrase
    checkLetter(char) {
        return this.phrase.includes(char);
    }


    // Display character on the board
    showMatchedLetter(char) {
        const ph = document.querySelectorAll('#phrase ul li');
        ph.forEach(li => {
            if (li.textContent === char) {
                li.className = `show letter ${char}`;
            }
        });
    }
}