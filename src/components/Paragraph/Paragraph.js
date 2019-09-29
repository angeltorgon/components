/**
 * Dependencies
 */

import styled from 'styled-components';

/**
 * Define component
 */

const Paragraph = styled.p`
  font-family: ${props => props.fontFamily ? props.fontFamily : '-apple-system, "Roboto", "Ubuntu", "Helvetica", "Arial", sans-serif'};

  ${props => props.lineHeight ? `line-height: ${props.lineHeight};` : ''}
  ${props => props.letterSpacing ? `letter-spacing: ${props.letterSpacing};` : ''}
  ${props => props.align ? `text-align: ${props.align};` : ''}
  ${props => props.weight ? `font-weight: ${props.weight};` : ''}
  ${props => props.size ? `font-size: ${props.size};` : ''}
  ${props => props.color ? `color: ${props.color};` : ''}
  ${props => props.backgroundColor ? `background-color: ${props.backgroundColor};` : ''}
  `

/**
 * Export component
 */

export default Paragraph;
