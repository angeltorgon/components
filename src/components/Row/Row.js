/**
 * Dependencies
 */

import styled from 'styled-components';

/**
 * Define component
 */

const Row = styled.div`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  flex-wrap: ${props => props.wrap ? props.wrap : 'wrap'};
`

/**
 * Export component
 */

export default Row;
