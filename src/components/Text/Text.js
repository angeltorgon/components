/**
 * Dependencies
 */

import styled from 'styled-components';

/**
 * Define component
 */

const Text = styled.span`
  ${props => props.weight ? `font-weight: ${props.weight};` : 'font-weight: normal;'}
`

/**
 * Export component
 */

export default Text;
