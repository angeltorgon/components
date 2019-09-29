/**
 * Dependencies
 */

import styled from 'styled-components';

/**
 * Define component
 */

const Text = styled.span`
  ${props => props.fontFamily ? `font-family: ${props.fontFamily};` : 'font-family: inherit;'}
  ${props => props.weight ? `font-weight: ${props.weight};` : 'font-weight: normal;'}
  ${props => props.size ? `font-size: ${props.size};` : 'font-size: medium;'}
  ${props => props.color ? `color: ${props.color};` : 'color: inherit;'}
`

/**
 * Export component
 */

export default Text;
