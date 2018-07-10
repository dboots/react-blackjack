import React from 'react';
import Table from '../components/table';

class AppContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Blackjack</h1>
        <Table />
      </div>
    )
  }
}

export default AppContainer
