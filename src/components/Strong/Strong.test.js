/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Strong from './Strong';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Strong.js', () => {
  test('it renders without errors', () => {
    render(<Strong />);
  });

  test('it displays "Read me"', () => {
    const { getByText } = render(<Strong>Read me</Strong>);
    getByText('Read me');
  });
});
