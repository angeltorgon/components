/**
 * Dependencies
 */

import styled from 'styled-components';

/**
 * Define component
 */

const Row = styled.div`
  display: ${props => props.display ? props.display : 'flex'};
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  flex-wrap: ${props => props.wrap ? props.wrap : 'nowrap'};
`

/**
 * Export component
 */

export default Row;
