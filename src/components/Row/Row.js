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
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
  align-items: ${props => props.alignItems ? props.alignItems : 'stretch'};
`

/**
 * Export component
 */

export default Row;
