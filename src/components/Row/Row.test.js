/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Row from './Row';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Row.js', () => {
  test('it renders without errors', () => {
    render(<Row />);
  });
});
