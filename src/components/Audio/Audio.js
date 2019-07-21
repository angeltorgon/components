/**
 * Dependencies
 */

import React from 'react';

/**
 * Define component
 */

function Audio(props) {
  return (
    <audio src={props.src}>{props.children}</audio>
  )
};

/**
 * Export component
 */

export default Audio;
