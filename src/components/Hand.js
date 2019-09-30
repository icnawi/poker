export default class Hand {
	constructor() {
		this.strength = 0;
		this.combo = [];
		this.comboTitle = '';

		this.getHandLibrary = () => {
			const handsList = [
				'Royal Flush',
				'Straight Flush',
				'4 of a Kind',
				'Full House',
				'Flush',
				'Straight',
				'Set',
				'2 Pairs',
				'Pair',
				'High Card'
			];
			return handsList;
		};
	}

	getStrength() {
		return this.strength;
	}

	setStrength(value) {
		this.strength = value;
	}

	getCombo() {
		return this.combo;
	}

	setCombo(value) {
		this.combo = value;
		return this.combo;
	}

	getDupesCount(combo, type) {
		let count = {};

		combo.forEach((x) => {
			switch (type) {
				case 'rank': {
					let rank = x.rank;
					count[rank] = (count[rank] || 0) + 1;
					break;
				}
				case 'suit': {
					let suit = x.suit;
					count[suit] = (count[suit] || 0) + 1;
					break;
				}
			}
		});
		return count;
	}

	isFlush() {
		return this.combo.every((card) => card.suit === this.combo[0].suit);
	}

	isStraight() {
		let conseq = 1;
		this.combo = this.combo.map((x) => {
			if (x.weight == 14 && Math.max(...this.combo.map((y) => y.weight < 10))) {
				x.weight = 1;
			}
			return x;
		});
		console.log(this.combo);

		this.combo = this.combo.sort((a, b) => a.weight - b.weight);
		for (var i = 1; i < this.combo.length; i++) {
			let diff = this.combo[i - 1].weight + 1 !== this.combo[i].weight;
			if (!diff) conseq += 1;
		}
		return conseq === 5 ? true : false;
	}

	getTheAce(hand) {
		return hand.some((card) => card.rank === 'A');
	}

	calcHandTotalWeight() {
		return this.combo.reduce((acc, current) => acc + current.weight, 0);
	}

	analyzeHand() {
		let combos = this.getHandLibrary();
		let handDupes = Object.values(this.getDupesCount(this.combo, 'rank')).sort((a, b) => b - a);
		let [ first, ...rest ] = handDupes;

		if (first === 4) {
			this.comboTitle = combos[2];
		} else if (first === 3) {
            
            let isFullHouse = rest[0] === 2;
            
            if (isFullHouse) this.comboTitle = combos[3];
            else this.comboTitle = combos[6];
		} else if (first === 2) {
			let isFullHouse = rest[0] === 3,
				isTwoPairs = Math.max(...rest) === 2;

			if (isFullHouse) {

                this.comboTitle = combos[3];
                
			} else if (isTwoPairs) {
                
                this.comboTitle = combos[7];

			} else {
                
                this.comboTitle = combos[8];

            }
            
		} else if (this.isStraight() && this.isFlush()) {
            
            if (this.getTheAce(this.combo)) {
                return this.calcHandTotalWeight() === 60 
                       ? (this.comboTitle = combos[0]) 
                       : (this.comboTitle = combos[1])
			}
            
            this.comboTitle = combos[1];
        
        }
        
        else if (this.isStraight()) this.comboTitle = combos[5];
        else if (this.isFlush()) this.comboTitle = combos[4];
		else this.comboTitle = combos[9];
		return this.comboTitle;
	}
}
