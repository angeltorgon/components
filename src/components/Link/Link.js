/**
 * Dependencies
 */

import styled from 'styled-components';

/**
 * Define styles
 */

const underlineNone = `
  text-decoration: none;
  
  &:hover {
    text-decoration: none;
  }
`

const underlineHover = `
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

const underlineAlways = `
  text-decoration: underline;
  
  &:hover {
    text-decoration: underline;
  }
`

/**
 * Define component
 */

const Link = styled.a`
  outline: 0;

  color: ${props => props.color ? props.color : '#348FF0'};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
  font-weight: ${props => props.weight ? props.weight : '500'};
  transition: ${props => props.transition ? props.transition : 'all 0.2s ease'};
  
  &:hover {
    color: ${props => props.hoverColor ? props.hoverColor : '#2E80D8'};
  }

  ${props => {
    if (props.underline === 'none') {
      return underlineNone
    } else if (props.underline === 'hover') {
      return underlineHover
    } else if (props.underline === 'always') {
      return underlineAlways
    } else {
      return underlineHover
    }
  }}
`

/**
 * Export component
 */

export default Link;
