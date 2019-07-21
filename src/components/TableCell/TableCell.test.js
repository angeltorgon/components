/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TableCell from './TableCell';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('TableCell.js', () => {
  test('it displays "Read me"', () => {
    const { getByText } = render(<table><tbody><tr><TableCell>Read me</TableCell></tr></tbody></table>);
    getByText('Read me');
  });
});
