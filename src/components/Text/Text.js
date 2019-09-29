/**
 * Dependencies
 */

import styled from 'styled-components';

/**
 * Define component
 */

const Text = styled.span`
  ${props => props.weight ? `font-weight: ${props.weight};` : 'font-weight: normal;'}
  ${props => props.size ? `font-size: ${props.size};` : 'font-size: medium;'}
`

/**
 * Export component
 */

export default Text;
