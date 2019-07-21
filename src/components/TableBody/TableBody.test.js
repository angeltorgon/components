/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TableBody from './TableBody';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('TableBody.js', () => {
  test('it displays "Read me"', () => {
    const { getByText } = render(<table><TableBody><tr><td>Read me</td></tr></TableBody></table>);
    getByText('Read me');
  });
});
