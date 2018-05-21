import React, {Component} from 'react';
import './Table.css';
import LoadingRow from './LoadingRow/LoadingRow';
import ErrorRow from './ErrorRow/ErrorRow';

class Table extends Component {
  state = {
    allTime: null,
    last30: null,
    active: null,
    error: false
  }

  _fetchData(url, key, sortKey) {
    if (!this.state[key]) {
      fetch(url)
        .then(resp => {
          if (resp.ok) {
            return resp.json();
          }
          throw new Error('something went wrong');
        })
        .catch(error => {
          console.log(error);
          this.setState({
            error: true
          });
        })
        .then(data => {
          data = data.sort((a, b) => b[sortKey] - a[sortKey]);
          this.setState({
            [key]: data,
            active: key,
            error: false
          });
          console.log(this.state);
        });
    } else {
      this.setState({
        active: key
      });
    }
  }

  _fetchAllTime() {
    this._fetchData(
      'https://fcctop100.herokuapp.com/api/fccusers/top/alltime',
      'allTime',
      'alltime'
    );
  }

  _fetchLast30() {
    this._fetchData(
      'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
      'last30',
      'recent'
    );
  }

  componentDidMount() {
    // this._fetchAllTime();
  }

  render() {
    let tableBody = <LoadingRow />;
    if (this.state.error) {
      tableBody = <ErrorRow />;
    }
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
          {tableBody}
        </tbody>
      </table>
    );
  }
}

export default Table;
