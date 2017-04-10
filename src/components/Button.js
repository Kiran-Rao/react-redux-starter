import React from 'react';

const Button = (props) => (
  <button onClick={props.click}>{props.title}</button>
);

export default Button;
