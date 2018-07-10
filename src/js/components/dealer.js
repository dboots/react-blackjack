import React from 'react';
import Deck from '../classes/deck';

const Dealer = (props) => (
  <div>
    <h3>The Dealer</h3>
    <div>{props.dealerShow ? props.hand.map((m) => { return <div key={m[2]}>{m[2]}</div>; }) : props.hand[0][2]}</div>
    <strong>{props.dealerShow ? props.value : '??'}</strong>
  </div>
);

export default Dealer;