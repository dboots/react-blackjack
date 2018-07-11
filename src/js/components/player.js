import React from 'react';

const Player  = (props) => {
  const cards = props.hand.map((card) => {
    var suit = '';
    var rank = card[1];
    
    if (!isNaN(card[0])) {
      suit = '&' + card[0] + ';';
    }

    if (isNaN(rank)) {
      rank = rank.toLowerCase();
    }

    return(
      <div key={[card[0], '-', card[1]]} className={'card rank-' + rank + ' ' + card[0]}>
        <span className="rank">{card[1]}</span>
        <span className="suit">{suit}</span>
      </div>
    );
  });
  
  return(
    <div>
    <h3>The Player</h3>
    <div className="playingCards">{cards}</div>
    <strong>{props.value}</strong>
    </div>
  );
}

export default Player;