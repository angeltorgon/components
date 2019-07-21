/**
 * Dependencies
 */

import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Link from './Link';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Link.js', () => {
  test('it renders without errors', () => {
    render(<Link />);
  });

  test('it displays "Click me"', () => {
    const { getByText } = render(<Link>Click me</Link>);
    getByText('Click me');
  });
});
