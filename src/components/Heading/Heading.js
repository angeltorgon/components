/**
 * Dependencies
 */

import React from 'react';
import styled from 'styled-components';

/**
 * Define styles
 */

const Component = styled.h2`
  font-family: ${props => props.fontFamily ? props.fontFamily : 'inherit'};
  line-height: ${props => props.lineHeight ? props.lineHeight : 'inherit'};
  letter-spacing: ${props => props.letterSpacing ? props.letterSpacing : 'inherit'};
  text-align: ${props => props.align ? props.align : 'inherit'};
  font-weight: ${props => props.weight ? props.weight : 'inherit'};
  font-size: ${props => props.size ? props.size : 'inherit'};
  color: ${props => props.color ? props.color : 'inherit'};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'inherit'};
`

/**
 * Define component
 */

function Heading(props) {
  switch (props.type) {
    case 'h1':
      return (
        <Component as="h1" {...props}>{props.children}</Component>
      )
    case 'h2':
      return (
        <Component as="h2" {...props}>{props.children}</Component>
      )
    case 'h3':
      return (
        <Component as="h3" {...props}>{props.children}</Component>
      )
    case 'h4':
      return (
        <Component as="h4" {...props}>{props.children}</Component>
      )
    case 'h5':
      return (
        <Component as="h5" {...props}>{props.children}</Component>
      )
    case 'h6':
      return (
        <Component as="h6" {...props}>{props.children}</Component>
      )
    default:
      return (
        <Component as="h2" {...props}>{props.children}</Component>
      )
  }
};

/**
 * Export component
 */

export default Heading;
