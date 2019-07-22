/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import List from './List';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('List.js', () => {
  test('it renders without errors', () => {
    render(<List />);
  });

  test('it displays "Read me"', () => {
    const { getByText } = render(<List><li>Item 1</li><li>Item 2</li></List>);
    getByText('Item 1');
  });
});
