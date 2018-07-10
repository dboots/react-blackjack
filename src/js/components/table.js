import React from 'react';
import Dealer from './dealer';
import Player from './player';
import ActionBar from './action_bar';
import Deck from '../classes/deck';

class Table extends React.Component {
  deck = new Deck();
  hands = [];
  dealerValue = 0;
  playerValue = 0;
  dealerShow = false;
  score = {
    'win': 0,
    'lose': 0,
    'push': 0
  }
  
  message = ' ';
  playing = true;
  
  constructor(props) {
    super(props);
    
    this.restart();
    
    this.state = {
      deck: this.deck.deck,
      dealerShow: this.dealerShow,
    }
  }
  
  render() {
    return(
      <div>
        <ActionBar
        handlerNewGame={this.handlerNewGame}
        handlerHit={this.handlerHit}
        handlerStand={this.handlerStand}
        handlerDeal={this.handlerDeal}
        playing={this.playing}
        />
        
        <Player hand={this.hands[1]} value={this.playerValue} />
        <Dealer hand={this.hands[0]} value={this.dealerValue} dealerShow={this.dealerShow} />
        
        <p>Cards Reamining: {this.state.deck.length} / {((this.state.deck.length / 52) * 100).toFixed(0)}%</p>
        <p>Wins: {this.score.win} / Push: {this.score.push} / Lose: {this.score.lose}</p>
        <h2>{this.message}</h2>
      </div>
    );
  }
  
  
  handlerNewGame = (e) => {
    this.score = {
      'win': 0,
      'lose': 0,
      'push': 0
    };
    
    this.restart();
    this.setState({
      deck: this.deck.deck
    });
  }
  
  handlerHit = (e) => {
    this.hands[1].push(this.deck.deck.pop());
    this.playerValue = this.deck.getHandValue(this.hands[1]);
    
    if (this.playerValue > 21) {
      this.status = 2;
      this.lose();
      this.playing = false;
      this.dealerShow = true;
    }
    
    this.setState({
      deck: this.deck.deck
    });
  };
  
  handlerStand = (e) => {
    let dealerValue = this.dealerValue;
    let playerValue = this.playerValue;
    let dealerHand = this.hands[0];
    
    this.dealerShow = true;
    this.playing = false;
    
    while (dealerValue < 17) {
      dealerHand.push(this.deck.deck.pop());
      dealerValue = this.deck.getHandValue(dealerHand);
      
      this.hands[0] = dealerHand;
      this.dealerValue = dealerValue;
    }
    
    this.setState({
      deck: this.deck.deck,
      dealerShow: true
    });
    
    if (dealerValue > 21) {
      this.win();
    } else {
      if (dealerValue == playerValue) {
        this.push();
      }
      
      if (dealerValue > playerValue) {
        this.lose();
      }
      
      if (dealerValue < playerValue) {
        this.win();
      }
    }
  };
  
  handlerDeal = (e) => {
    let deck = this.deck;
    let deckPercent = ((deck.deck.length / 52) * 100);
    
    this.dealerShow = false;
    this.playing = true;
    
    if (deckPercent < 60) {
      this.restart();
    } else {
      this.deal();
    }
    
    this.setState({
      deck: deck.deck
    });
  }
  
  win = () => {
    this.score.win++;
    this.message = 'You Win';
  }
  
  lose = () => {
    this.score.lose++;
    this.message = 'You Lose';
  }
  
  push = () => {
    this.score.push++;
    this.message = 'Push';
  }
  
  deal = () => {
    this.message = '';
    let deck = this.deck;
    this.hands = deck.deal(2, 2);
    //this.hands[1] = [['Knuckles', 'A'], ['Diamonds', '8'], ['Spades', '1'], ['Knuckles', 'A']]
    this.dealerValue = deck.getHandValue(this.hands[0]);
    this.playerValue = deck.getHandValue(this.hands[1]);
  }
  
  restart = () => {
    this.playing = true;
    this.dealerShow = false;
    this.deck.shuffleDeck();
    this.deal();
  }
}

export default Table;