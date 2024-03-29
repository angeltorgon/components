/**
 * Dependencies
 */

import styled from 'styled-components';

/**
 * Define component
 */

const Text = styled.span`
  font-family: ${props => props.fontFamily ? props.fontFamily : 'inherit'};
  line-height: ${props => props.lineHeight ? props.lineHeight : 'inherit'};
  letter-spacing: ${props => props.letterSpacing ? props.letterSpacing : 'inherit'};
  font-weight: ${props => props.weight ? props.weight : 'inherit'};
  font-size: ${props => props.size ? props.size : 'inherit'};
  color: ${props => props.color ? props.color : 'inherit'};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'inherit'};
`

/**
 * Export component
 */

export default Text;
