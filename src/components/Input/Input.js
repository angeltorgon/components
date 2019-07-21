/**
 * Dependencies
 */

import React from 'react';

/**
 * Define component
 */

function Input(props) {
  return (
    <input id={props.id} type={props.type} name={props.name} value={props.value}></input>
  )
};

/**
 * Export component
 */

export default Input;
