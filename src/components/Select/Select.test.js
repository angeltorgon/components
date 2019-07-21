/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Select from './Select';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Select.js', () => {
  test('it renders without errors', () => {
    render(<Select />);
  });

  test('it displays "Read me"', () => {
    const { getByText } = render(<Select>Read me</Select>);
    getByText('Read me');
  });
});
