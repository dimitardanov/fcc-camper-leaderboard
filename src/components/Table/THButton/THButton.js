import React from 'react';
import './THButton.css';

const thButton = (props) => {
  let classes = ['button'];
  if (props.active === props.type) {
    classes.push('active');
  }
  return (
    <th
      onClick={props.handler}
      className={classes.join(' ')}
    >{props.children}</th>
  );
}

export default thButton;
