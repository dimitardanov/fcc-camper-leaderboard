import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTrophy from '@fortawesome/fontawesome-free-solid/faTrophy'
import './Table.css';
import LoadingRow from './LoadingRow/LoadingRow';
import ErrorRow from './ErrorRow/ErrorRow';
import DataRow from './DataRow/DataRow';

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
    this._fetchLast30();
  }

  last30Handler = () => {
    if (!this.state.last30) {
      this.setState({active: null});
      this._fetchLast30();
    } else {
      this.setState({active: 'last30'});
    }
  }

  allTimeHandler = () => {
    if (!this.state.allTime) {
      this.setState({active: null});
      this._fetchAllTime();
    } else {
      this.setState({active: 'allTime'});
    }
  }

  render() {
    let tableBody = <LoadingRow />;
    if (this.state.error) {
      tableBody = <ErrorRow />;
    } else if (this.state.active) {
      tableBody = this.state[this.state.active].map((row, index) => {
        return (
          <DataRow
            key={index}
            position={index+1}
            avatar={row.img}
            username={row.username}
            alltime={row.alltime}
            recent={row.recent}
            active={this.state.active} />
        );
      });
    }
    return (
      <table>
        <caption>Leaderboard</caption>
        <thead>
          <tr>
            <th rowSpan="2"><FontAwesomeIcon icon={faTrophy} /></th>
            <th rowSpan="2">Camper</th>
            <th colSpan="2">Points Earned</th>
          </tr>
          <tr>
            <th onClick={this.last30Handler} className="button">Last 30 days</th>
            <th onClick={this.allTimeHandler} className="button">All Time</th>
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
