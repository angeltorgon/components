/**
 * Dependencies
 */

import React from 'react';
import styled from 'styled-components';

/**
 * Define styles
 */

const Component = styled.h2`
  font-weight: ${props => props.weight ? props.weight : '400'};
  margin: ${props => props.margin ? props.margin : '0'};

  font-family: ${props => props.fontFamily ? props.fontFamily : ''};
  line-height: ${props => props.lineHeight ? props.lineHeight : ''};
  letter-spacing: ${props => props.letterSpacing ? props.letterSpacing : ''};
  text-align: ${props => props.align ? props.align : ''};
  color: ${props => props.color ? props.color : ''};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : ''};
`
  
const ComponentH1 = styled(Component)`
  font-size: ${props => props.size ? props.size : '4.5rem'};
`
const ComponentH2 = styled(Component)`
  font-size: ${props => props.size ? props.size : '3rem'};
`
const ComponentH3 = styled(Component)`
  font-size: ${props => props.size ? props.size : '2.3rem'};
`
const ComponentH4 = styled(Component)`
  font-size: ${props => props.size ? props.size : '1.8rem'};
`
const ComponentH5 = styled(Component)`
  font-size: ${props => props.size ? props.size : '1.5rem'};
`
const ComponentH6 = styled(Component)`
  font-size: ${props => props.size ? props.size : '1.25rem'};
`

/**
 * Define component
 */

function Heading(props) {
  switch (props.type) {
    case 'h1':
      return (
        <ComponentH1 as="h1" {...props}>{props.children}</ComponentH1>
      )
    case 'h2':
      return (
        <ComponentH2 as="h2" {...props}>{props.children}</ComponentH2>
      )
    case 'h3':
      return (
        <ComponentH3 as="h3" {...props}>{props.children}</ComponentH3>
      )
    case 'h4':
      return (
        <ComponentH4 as="h4" {...props}>{props.children}</ComponentH4>
      )
    case 'h5':
      return (
        <ComponentH5 as="h5" {...props}>{props.children}</ComponentH5>
      )
    case 'h6':
      return (
        <ComponentH6 as="h6" {...props}>{props.children}</ComponentH6>
      )
    default:
      return (
        <ComponentH2 as="h2" {...props}>{props.children}</ComponentH2>
      )
  }
};

/**
 * Export component
 */

export default Heading;
