/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from './Button';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Button.js', () => {
  test('it renders without errors', () => {
    render(<Button />);
  });

  test('it displays "Click me"', () => {
    const { getByText } = render(<Button>Click me</Button>);
    getByText('Click me');
  });
});
