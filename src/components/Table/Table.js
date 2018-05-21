import React, {Component} from 'react';
import './Table.css';

class Table extends Component {
  state = {
    allTime: [],
    last30: []
  }


  render() {
    return (
      <table>
        <caption>Leaderboard</caption>
        <thead>
          <tr>
            <th rowSpan="2">Position</th>
            <th rowSpan="2">Camper</th>
            <th colSpan="2">Points Earned</th>
          </tr>
          <tr>
            <th>Last 30 days</th>
            <th>All Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Camper</td>
            <td>12</td>
            <td>123</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
