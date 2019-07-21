/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Pre from './Pre';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Pre.js', () => {
  test('it renders without errors', () => {
    render(<Pre />);
  });

  test('it displays "Click me"', () => {
    const { getByText } = render(<Pre>Click me</Pre>);
    getByText('Click me');
  });
});
