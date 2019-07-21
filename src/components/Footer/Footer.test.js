/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Footer from './Footer';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Footer.js', () => {
  test('it renders without errors', () => {
    render(<Footer />);
  });

  test('it displays "Footer Content"', () => {
    const { getByText } = render(<Footer>Footer Content</Footer>);
    getByText('Footer Content');
  });
});
