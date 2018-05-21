import React from 'react';
import './DataRow.css';

const dataRow = (props) => {
  return (
    <tr>
      <td>{props.position}</td>
      <td>{props.username}</td>
      <td>{props.recent}</td>
      <td>{props.alltime}</td>
    </tr>
  );
};

export default dataRow;
