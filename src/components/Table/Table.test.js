/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Table from './Table';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Table.js', () => {
  test('it renders without errors', () => {
    render(<Table />);
  });

  test('it displays "Read me"', () => {
    const { getByText } = render(<Table><tbody><tr><td>Read me</td></tr></tbody></Table>);
    getByText('Read me');
  });
});
