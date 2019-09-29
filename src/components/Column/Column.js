/**
 * Dependencies
 */

import styled from 'styled-components';

/**
 * Define helpers
 */

function calc_width(n) {
  if (n) {
    n = Math.round((n / 12) * 10e7) / 10e5
    if (n < 0) n = 0
    if (n > 100) n = 100
    return `${n}%`
  } else {
    return '100%'
  }
}

function calc_spacing(n = 0) {
  return `padding: ${n * 4}px;`
}

/**
 * Define component
 */

const Column = styled.div`
  box-sizing: border-box;

  flex-grow: ${props => props.grow ? props.grow : 0};
  flex-shrink: ${props => props.shrink ? props.shrink : 0};
  flex-basis: ${props => calc_width(props.width)};
  align-self: ${props => props.alignSelf ? props.alignSelf : 'auto'};
  ${props => props.order ? `order: ${props.order};` : ''};
  ${props => calc_spacing(props.spacing)}
`

/**
 * Export component
 */

export default Column;
