/**
 * Dependencies
 */

import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Heading from './Heading';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Heading.js', () => {
  test('it renders without errors', () => {
    render(<Heading />);
  });

  test('it displays "Click me"', () => {
    const { getByText } = render(<Heading>Big Title</Heading>);
    getByText('Big Title');
  });
});
