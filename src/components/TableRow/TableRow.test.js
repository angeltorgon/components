/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TableRow from './TableRow';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('TableRow.js', () => {
  test('it displays "Read me"', () => {
    const { getByText } = render(<table><tbody><TableRow><td>Read me</td></TableRow></tbody></table>);
    getByText('Read me');
  });
});
