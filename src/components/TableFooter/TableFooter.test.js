/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TableFooter from './TableFooter';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('TableFooter.js', () => {
  test('it displays "Read me"', () => {
    const { getByText } = render(<table><TableFooter><tr><td>Read me</td></tr></TableFooter></table>);
    getByText('Read me');
  });
});
