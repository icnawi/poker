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
		// const weights = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

		for (let i = 0; i < suits.length; i++) {
			for (let j = 0; j < ranks.length; j++) {
				this.cards.push(new Card(suits[i], ranks[j][0], ranks[j][1]));
			}
		}

		// // High Card
		// this.cards.push(
		// 	new Card(suits[0], ranks[0][0], ranks[0][1]),
		// 	new Card(suits[2], ranks[4][0], ranks[4][1]),
		// 	new Card(suits[1], ranks[2][0], ranks[2][1]),
		// 	new Card(suits[3], ranks[5][0], ranks[5][1]),
		// 	new Card(suits[0], ranks[12][0], ranks[12][1])
		// );

		// // Pair
		// this.cards.push(
		// 	new Card(suits[0], ranks[4][0], ranks[4][1]),
		// 	new Card(suits[2], ranks[4][0], ranks[4][1]),
		// 	new Card(suits[1], ranks[2][0], ranks[2][1]),
		// 	new Card(suits[3], ranks[5][0], ranks[5][1]),
		// 	new Card(suits[0], ranks[12][0], ranks[12][1])
		// );
		// // 2 Pairs
		// this.cards.push(
		// 	new Card(suits[0], ranks[4][0], ranks[4][1]),
		// 	new Card(suits[2], ranks[4][0], ranks[4][1]),
		// 	new Card(suits[1], ranks[5][0], ranks[5][1]),
		// 	new Card(suits[3], ranks[5][0], ranks[5][1]),
		// 	new Card(suits[0], ranks[12][0], ranks[12][1])
		// );
		// // Set
		// this.cards.push(
		// 	new Card(suits[0], ranks[4][0], ranks[4][1]),
		// 	new Card(suits[2], ranks[4][0], ranks[4][1]),
		// 	new Card(suits[1], ranks[4][0], ranks[4][1]),
		// 	new Card(suits[3], ranks[5][0], ranks[5][1]),
		// 	new Card(suits[0], ranks[12][0], ranks[12][1])
		// );
		// // Straight simple
		// this.cards.push(
		// 	new Card(suits[0], ranks[4][0], ranks[4][1]),
		// 	new Card(suits[2], ranks[5][0], ranks[5][1]),
		// 	new Card(suits[1], ranks[6][0], ranks[6][1]),
		// 	new Card(suits[3], ranks[7][0], ranks[7][1]),
		// 	new Card(suits[0], ranks[8][0], ranks[8][1])
		// );
		// // Straight Ace high
		// this.cards.push(
		// 	new Card(suits[0], ranks[8][0], ranks[8][1]),
		// 	new Card(suits[2], ranks[9][0], ranks[9][1]),
		// 	new Card(suits[1], ranks[10][0], ranks[10][1]),
		// 	new Card(suits[3], ranks[11][0], ranks[11][1]),
		// 	new Card(suits[0], ranks[12][0], ranks[12][1])
		// );
		// // Straight Ace low
		// this.cards.push(
		// 	new Card(suits[0], ranks[0][0], ranks[0][1]),
		// 	new Card(suits[2], ranks[1][0], ranks[1][1]),
		// 	new Card(suits[1], ranks[2][0], ranks[2][1]),
		// 	new Card(suits[3], ranks[3][0], ranks[3][1]),
		// 	new Card(suits[0], ranks[12][0], ranks[12][1])
		// );
		// // Full House
		// this.cards.push(
		// 	new Card(suits[0], ranks[2][0], ranks[2][1]),
		// 	new Card(suits[2], ranks[2][0], ranks[2][1]),
		// 	new Card(suits[3], ranks[2][0], ranks[2][1]),
		// 	new Card(suits[1], ranks[5][0], ranks[5][1]),
		// 	new Card(suits[0], ranks[5][0], ranks[5][1])
		// );
		// // 4 of a Kind
		// this.cards.push(
		// 	new Card(suits[2], ranks[4][0], ranks[4][1]),
		// 	new Card(suits[3], ranks[4][0], ranks[4][1]),
		// 	new Card(suits[0], ranks[4][0], ranks[4][1]),
		// 	new Card(suits[0], ranks[5][0], ranks[5][1]),
		// 	new Card(suits[1], ranks[4][0], ranks[4][1])
		// );
		// // Straight Flush simple
		// this.cards.push(
		// 	new Card(suits[1], ranks[4][0], ranks[4][1]),
		// 	new Card(suits[1], ranks[5][0], ranks[5][1]),
		// 	new Card(suits[1], ranks[6][0], ranks[6][1]),
		// 	new Card(suits[1], ranks[7][0], ranks[7][1]),
		// 	new Card(suits[1], ranks[8][0], ranks[8][1])
		// );
		// // Straight Flush Ace low -> flush error
		// this.cards.push(
		// 	new Card(suits[1], ranks[0][0], ranks[0][1]),
		// 	new Card(suits[1], ranks[1][0], ranks[1][1]),
		// 	new Card(suits[1], ranks[2][0], ranks[2][1]),
		// 	new Card(suits[1], ranks[3][0], ranks[3][1]),
		// 	new Card(suits[1], ranks[12][0], ranks[12][1])
		// );
		// Royal Flush
		// this.cards.push(
		// 	new Card(suits[3], ranks[8][0], ranks[8][1]),
		// 	new Card(suits[3], ranks[9][0], ranks[9][1]),
		// 	new Card(suits[3], ranks[10][0], ranks[10][1]),
		// 	new Card(suits[3], ranks[11][0], ranks[11][1]),
		// 	new Card(suits[3], ranks[12][0], ranks[12][1])
		// );

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
