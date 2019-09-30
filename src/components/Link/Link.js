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
  color: ${props => props.color ? props.color : '#5A6ED2'};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
  font-weight: ${props => props.weight ? props.weight : '500'};
  transition: ${props => props.transition ? props.transition : 'all 0.2s ease'};
  
  &:hover {
    color: ${props => props.hoverColor ? props.hoverColor : '#5163BD'};
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
