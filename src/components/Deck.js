import Card from './Card.js';
import Hand from './Hand.js';

export default class Deck {
	constructor() {
		this.cards = [];
		this.copyDeck = [];
		this.hand = new Hand();
		this.reset();
		this.shuffle();
	}

	reset() {
		this.cards = [];

		const suits = [ 'Hearts', 'Spades', 'Clubs', 'Diamonds' ];
		const ranks = [
			[ '2', 2 ],
			[ '3', 3 ],
			[ '4', 4 ],
			[ '5', 5 ],
			[ '6', 6 ],
			[ '7', 7 ],
			[ '8', 8 ],
			[ '9', 9 ],
			[ '10', 10 ],
			[ 'J', 11 ],
			[ 'Q', 12 ],
			[ 'K', 13 ],
			[ 'A', 14 ]
		];

		for (let i = 0; i < suits.length; i++) {
			for (let j = 0; j < ranks.length; j++) {
				this.cards.push(new Card(suits[i], ranks[j][0], ranks[j][1]));
			}
		}

		this.copyDeck = this.cards;
	}

	shuffle() {
		const { cards } = this;
		let m = cards.length,
			i;

		while (m) {
			i = Math.floor(Math.random() * m--);
			[ cards[m], cards[i] ] = [ cards[i], cards[m] ];
		}

		return this;
	}

	deal() {
		this.hand.setCombo(this.cards.slice(0, 5));
		this.cards = this.cards.slice(5);
		return this.hand.combo;
	}

	checkDeckRepeat() {
		let shuffled = false;
		if (this.cards.length < 5) {
			alert('shuffling');
			this.reset();
			this.shuffle();
			shuffled = true;
			if (shuffled) {
				alert('The deck is shuffled');
			}
		}
	}
}
