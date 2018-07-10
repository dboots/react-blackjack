import React from 'react';

class ActionBar extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (<div>
      <button onClick={this.props.handlerNewGame}>New Game</button>
      <button disabled={!this.props.playing} onClick={this.props.handlerHit}>Hit</button>
      <button disabled={!this.props.playing} onClick={this.props.handlerStand}>Stand</button>
      <button disabled={this.props.playing} onClick={this.props.handlerDeal}>Deal</button>
      </div>
    );
  }
}

export default ActionBar;