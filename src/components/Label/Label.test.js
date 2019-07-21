/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Label from './Label';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Label.js', () => {
  test('it renders without errors', () => {
    render(<Label />);
  });

  test('it displays "Read me"', () => {
    const { getByText } = render(<Label>Read me</Label>);
    getByText('Read me');
  });
});
