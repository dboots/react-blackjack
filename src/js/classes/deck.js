function Deck() {
  this.suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  this.values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  this.deck = [];
  
  this.shuffleDeck = function() {
    this.constructDeck();
    let deck = this.deck;
    
    for (let i = 0; i < 1000; i++) {
      // pick 2 random elements and swap them
      let swapAlpha = Math.floor(Math.random() * (deck.length));
      let swapBeta = Math.floor(Math.random() * (deck.length));
      
      // store alpha value to place in beta position
      let holder = deck[swapAlpha];
      
      // store beta value in alpha position
      deck[swapAlpha] = deck[swapBeta];

      // store alpha value from holder in beta position
      deck[swapBeta] = holder;
    }
    
    return deck;
  }
  
  this.constructDeck = function() {
    this.deck = [];
    this.suits.map((suit) => {
      this.values.map((value) => {
        this.deck.push([suit, value, value + ' of ' + suit]);
      });
    });
  }

  // 0 element is suit, 1 element is value
  this.getHandValue = function(hand, score) {
    var value = 0;

    for (let h in hand) {
      value += this.getCardValue(hand[h], value);
    }

    value = this.calcAces(hand, value);

    return value;
  }

  this.calcAces = function(hand, score) {
    var aces = 0;

    // determine how many aces we are working with
    for (let h in hand) {
      if (hand[h][1] == 'A') {
        aces++;
      }
    }


    // start from the top and add 11 as long as we can
    for (var i = aces; i > 0; i--) {
      if (score > (11-i)) {
        score += 1;
      } else {
        score+= 11;
      }
    }

    return score;
  }

  this.getCardValue = function(card, score) {
    switch (card[1]) {
      case 'A':
        return 0;
      case 'J':
      case 'Q':
      case 'K':
        return 10;
      default:
        return parseInt(card[1]);
    }
  }

  this.deal = function(players, cards) {
    let hands = [];
    for (var j = 0; j < cards; j++) {
      hands[j] = [];
      for (var i = 0; i < players; i++) {
        hands[j][i] = this.deck.pop();
      }
    }

    return hands;
  }

  this.getCardString = function(card) {
    return card[1] + ' of ' + card[0];
  }
}

export default Deck;