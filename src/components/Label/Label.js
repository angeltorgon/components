/**
 * Dependencies
 */

import React from 'react';

/**
 * Define component
 */

function Label(props) {
  return (
    <label for={props.for}>{props.children}</label>
  )
};

/**
 * Export component
 */

export default Label;
