/**
 * Dependencies
 */

import React from 'react';

/**
 * Define component
 */

function Image(props) {
  return (
    <img src={props.src}>{props.children}</img>
  )
};

/**
 * Export component
 */

export default Image;
