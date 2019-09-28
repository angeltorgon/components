/**
 * Dependencies
 */

import styled from 'styled-components';

/**
 * Define helpers
 */

function calc_width(n) {
  if (n) {
    n = Math.round((size / 12) * 10e7) / 10e5
    if (n < 0) n = 0
    if (n > 100) n = 100
    return `${n}%`
  } else {
    return '100%'
  }
}

function calc_spacing(n) {
  if (n <= 0) return
  return `padding: ${n * 4}px;`
}

/**
 * Define component
 */

const Column = styled.div`
  flex: 0 0 ${props => calc_width(props.width)};
  max-width: ${props => calc_width(props.width)};
  ${props => calc_spacing(props.spacing)}
`

/**
 * Export component
 */

export default Column;
