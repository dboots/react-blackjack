import React from 'react';


const Player  = (props) => (
  <div>
    <h3>The Player</h3>
    <div>{props.hand.map((m) => { return <div key={m[2]}>{m[2]}</div>; })}</div>
    <strong>{props.value}</strong>
  </div>
);

export default Player;