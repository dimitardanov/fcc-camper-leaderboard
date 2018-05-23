import React from 'react';
import './DataRow.css';

const dataRow = (props) => {
  return (
    <tr className="data-row">
      <td>{props.position}</td>
      <td className="camper">
        <a href={'https://www.freecodecamp.org/' + props.username}>
          <img
            className="avatar"
            src={props.avatar}
            alt={"avatar of free code camp user: " + props.username}
          />{props.username}
        </a>
      </td>
      <td className="score">{props.recent}</td>
      <td className="score">{props.alltime}</td>
    </tr>
  );
};

export default dataRow;
