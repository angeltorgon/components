/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Column from './Column';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Column.js', () => {
  test('it renders without errors', () => {
    render(<Column />);
  });
});
