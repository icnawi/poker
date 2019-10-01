import Deck from './components/Deck.js';


export default class Game {
    constructor() {
        this.deck = {};
        this.init();

        const deckElem = document.querySelector('.back');
        $(deckElem).on('click', this.handleShowHand.bind(this))
    }

    init() {
        this.deck = new Deck();
        return this.deck;
    }

    displayHand() {
        let ul = $('.randomized-hand-drop');
        if (!ul.children().length > 0) {
            let currentHand = this.deck.deal();            
            this.appendNodes(currentHand);
            this.deck.hand.analyzeHand();
            this.setHistory(this.deck.hand.comboTitle);
            console.log('The deck state', this.deck.cards.length);
        } else {
            this.removeNodes();
            this.deck.checkDeckRepeat();
        }
        

    }

    handleShowHand() {
        this.displayHand();
    }

    handleHideHand() {
        this.hideHand()
    }

    appendNodes(hand) {
        for (let h of hand) {
            let ul = document.querySelector('.randomized-hand-drop'),
                li = document.createElement('li');
            
            li.className = h.getCardClassName();
            ul.appendChild(li)
        }
    }

    removeNodes() {
        let ul = document.querySelector('.randomized-hand-drop');
        while(ul.hasChildNodes()) {
            ul.removeChild(ul.lastChild);
        }
    }

    setHistory(handName) {
        let ul = document.querySelector('.hands-list');
        let li = document.createElement('li');

        li.className = 'hand-title';
        li.textContent = handName;
        if (ul.children.length >= 6) ul.style.overflowY = "scroll"
        ul.appendChild(li)
    } 
    
}