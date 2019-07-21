/**
 * Dependencies
 */

import React from 'react';

/**
 * Define component
 */

function Link(props) {
  const href_value = props.to || '#'

  return (
    <a href={href_value}>{props.children}</a>
  )
};

/**
 * Export component
 */

export default Link;
