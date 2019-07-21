/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Code from './Code';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Code.js', () => {
  test('it renders without errors', () => {
    render(<Code />);
  });

  test('it displays "Click me"', () => {
    const { getByText } = render(<Code>Click me</Code>);
    getByText('Click me');
  });
});
