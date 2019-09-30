/**
 * Dependencies
 */

import React from 'react';
import styled from 'styled-components';

/**
 * Define helpers
 */

function fillIn(arg) {
  if (arg === 'horizontal') {
    return 'width: 100%;'
  } else if (arg === 'vertical') {
    return 'height: 100%;'
  } else {
    return 'width: 100%; height: 100%;'
  }
}

function setBorderRadius(props) {
  if (props.pill) {
    return 'border-radius: 36px;'
  } else if (props.square) {
    return 'border-radius: 0px;'
  } else if (props.borderRadius) {
    return `border-radius: ${props.borderRadius};`
  } else {
    return 'border-radius: 3px;'
  }
}

function setSize(props) {
  if (props.large) {
    return `padding: .5rem 1rem; font-size: 1.25rem; line-height: 1.5;`
  } else if (props.small) {
    return `padding: 3px 8px; font-size: .8rem; line-height: 1.5;`
  }
}

/**
 * Define styles
 */

const Component = styled.button`
  box-sizing: border-box;
  border: 0;
  outline: 0;
  text-align: center;
  vertical-align: middle;

  font-family: ${props => props.fontFamily ? props.fontFamily : '-apple-system, "Roboto", "Ubuntu", "Helvetica", "Arial", sans-serif'};
  font-weight: ${props => props.weight ? props.weight : '500'};
  cursor: ${props => props.cursor ? props.cursor : 'pointer'};
  padding: ${props => props.padding ? props.padding : '9px 18px'};
  ${props => props.fill ? fillIn(props.fill) : ''}
  ${props => setBorderRadius(props)}
  ${props => setSize(props)}

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(52,143,240,.25);
  }
`

const ButtonPrimary = styled(Component)`
  color: #FFF;
  background-color: #348FF0;
  border-color: #348FF0;
  
  &:hover {
    text-decoration: none;
    background-color: #2E80D8;
    border-color: #2E80D8;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(52,143,240,.5);
  }
`

const ButtonSecondary = styled(Component)`
  color: #1D2124;
  background-color: #E3E3E3;
  border-color: #E3E3E3;
  
  &:hover {
    text-decoration: none;
    background-color: #CCCCCC;
    border-color: #CCCCCC;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(227,227,227,.5);
  }
`

const ButtonSuccess = styled(Component)`
  color: #FFF;
  background-color: #3DAF57;
  border-color: #3DAF57;
  
  &:hover {
    text-decoration: none;
    background-color: #369D4E;
    border-color: #369D4E;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(61,175,87,.5);
  }
`

const ButtonWarning = styled(Component)`
  color: #1D2124;
  background-color: #F0D534;
  border-color: #F0D534;
  
  &:hover {
    text-decoration: none;
    background-color: #D8BF2E;
    border-color: #D8BF2E;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(240,213,52,.5);
  }
`

const ButtonDanger = styled(Component)`
  color: #FFF;
  background-color: #F03434;
  border-color: #F03434;
  
  &:hover {
    text-decoration: none;
    background-color: #D82E2E;
    border-color: #D82E2E;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(240,52,52,.5);
  }
`

/**
 * Define component
 */

function Button(props) {
  switch (props.type) {
    case 'primary':
      return <ButtonPrimary {...props}>{props.children}</ButtonPrimary>
    case 'secondary':
      return <ButtonSecondary {...props}>{props.children}</ButtonSecondary>
    case 'success':
      return <ButtonSuccess {...props}>{props.children}</ButtonSuccess>
    case 'warning':
      return <ButtonWarning {...props}>{props.children}</ButtonWarning>
    case 'danger':
      return <ButtonDanger {...props}>{props.children}</ButtonDanger>
    default:
      return <ButtonPrimary {...props}>{props.children}</ButtonPrimary>
  }
}

/**
 * Export component
 */

export default Button;
