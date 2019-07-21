/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Small from './Small';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Small.js', () => {
  test('it renders without errors', () => {
    render(<Small />);
  });

  test('it displays "Click me"', () => {
    const { getByText } = render(<Small>Click me</Small>);
    getByText('Click me');
  });
});
