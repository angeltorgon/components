/**
 * Dependencies
 */

import React from 'react';
import styled from 'styled-components';

/**
 * Define helpers
 */

function setBorderRadius(props) {
  if (props.pill) {
    return 'border-radius: 36px;'
  } else if (props.square) {
    return 'border-radius: 0px;'
  } else if (props.borderRadius) {
    return `border-radius: ${props.borderRadius};`
  } else {
    return 'border-radius: 3px;'
  }
}

function setBorder(props) {
  if (props.valid) {
    return 'border: 1px solid #3DAF57;'
  } else if (props.invalid) {
    return 'border: 1px solid #F03434;'
  } else {
    return 'border: 1px solid #D2D8DD;'
  }
}

function setBoxShadow(props) {
  if (props.valid) {
    return 'box-shadow: 0 0 0 0.2rem rgba(61,175,87,.25);'
  } else if (props.invalid) {
    return 'box-shadow: 0 0 0 0.2rem rgba(240,52,52,.25);'
  } else {
    return 'box-shadow: 0 0 0 0.2rem rgba(52,143,240,.25);'
  }
}

/**
 * Define styles
 */

const Component = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  border: 0;
  outline: 0;
  font-size: 1rem;
  padding: .5rem .75rem;
  
  font-weight: ${props => props.weight ? props.weight : '400'};
  transition: ${props => props.transition ? props.transition : 'all 0.2s ease'};
  ${props => setBorderRadius(props)}
  ${props => setBorder(props)}
  
  &:focus {
    ${props => setBoxShadow(props)}
  }
`

/**
 * Define component
 */

function Input(props) {
  return <Component type="text" {...props}>{props.children}</Component>
}

/**
 * Export component
 */

export default Input;
