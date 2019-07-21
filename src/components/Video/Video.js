/**
 * Dependencies
 */

import React from 'react';

/**
 * Define component
 */

function Video(props) {
  return (
    <video src={props.src}>{props.children}</video>
  )
};

/**
 * Export component
 */

export default Video;
