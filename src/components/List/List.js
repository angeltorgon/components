/**
 * Dependencies
 */

import React from 'react';

/**
 * Define component
 */

function List(props) {
  if (props.ordered) {
    return (
      <ol>{props.children}</ol>
    )
  } else {
    return (
      <ul>{props.children}</ul>
    )
  }
};

/**
 * Export component
 */

export default List;
