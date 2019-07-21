/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TableHead from './TableHead';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('TableHead.js', () => {
  test('it displays "Read me"', () => {
    const { getByText } = render(<table><TableHead><tr><th>Read me</th></tr></TableHead></table>);
    getByText('Read me');
  });
});
