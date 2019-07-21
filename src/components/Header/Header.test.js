/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Header.js', () => {
  test('it renders without errors', () => {
    render(<Header />);
  });

  test('it displays "Header Content"', () => {
    const { getByText } = render(<Header>Header Content</Header>);
    getByText('Header Content');
  });
});
