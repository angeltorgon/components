/**
 * Dependencies
 */

import styled from 'styled-components';

/**
 * Define component
 */

const Text = styled.span`
  ${props => props.fontFamily ? `font-family: ${props.fontFamily};` : 'font-family: inherit;'}
  ${props => props.lineHeight ? `line-height: ${props.lineHeight};` : 'line-height: inherit;'}
  ${props => props.letterSpacing ? `letter-spacing: ${props.letterSpacing};` : 'letter-spacing: inherit;'}
  ${props => props.weight ? `font-weight: ${props.weight};` : 'font-weight: inherit;'}
  ${props => props.size ? `font-size: ${props.size};` : 'font-size: inherit;'}
  ${props => props.color ? `color: ${props.color};` : 'color: inherit;'}
`

/**
 * Export component
 */

export default Text;
