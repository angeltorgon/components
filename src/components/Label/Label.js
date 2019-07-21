/**
 * Dependencies
 */

import React from 'react';

/**
 * Define component
 */

function Label(props) {
  return (
    <label htmlFor={props.for}>{props.children}</label>
  )
};

/**
 * Export component
 */

export default Label;
