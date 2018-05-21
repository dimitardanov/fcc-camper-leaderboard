import React from 'react';
import './ErrorRow.css';

const errorRow = (props) => {
  return (
    <tr>
      <td colSpan="4" className="warning">Something went wrong.</td>
    </tr>
  );
};

export default errorRow;
