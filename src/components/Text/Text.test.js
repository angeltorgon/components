/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Text from './Text';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Text.js', () => {
  test('it renders without errors', () => {
    render(<Text />);
  });

  test('it displays "Read me"', () => {
    const { getByText } = render(<Text>Read me</Text>);
    getByText('Read me');
  });
});
