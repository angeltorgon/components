/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TableHeadCell from './TableHeadCell';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('TableHeadCell.js', () => {
  test('it displays "Read me"', () => {
    const { getByText } = render(<table><thead><tr><TableHeadCell>Read me</TableHeadCell></tr></thead></table>);
    getByText('Read me');
  });
});
