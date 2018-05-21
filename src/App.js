import React, {Component} from 'react';
import './App.css';
import Table from './components/Table/Table';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>FreeCodeCamp Leaderboard</h1>
        <Table />
      </React.Fragment>
    );
  }
}

export default App;
