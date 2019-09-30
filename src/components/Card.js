export default class Card {
    constructor(suit, rank, weight) {
        this.suit = suit;
        this.rank = rank;
        this.weight = weight;

        this._className = this.generateShortCardCode(this.suit, this.rank);
    }

    getSuit() {
        return this.suit;
    }

    setSuit(suit) {
        this.suit = suit;
        return this.suit;
    }

    getRank() {
        return this.rank;
    }

    setRank(rank) {
        this.rank = rank;
        return this.rank;
    }

    generateShortCardCode(suit, rank) {
        return `${suit.toLowerCase().slice(0, 1)}_${rank}`
    }

    getCardClassName() {
        return this._className
    }
}