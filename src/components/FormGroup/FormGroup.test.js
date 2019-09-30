/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FormGroup from './FormGroup';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('FormGroup.js', () => {
  test('it renders without errors', () => {
    render(<FormGroup />);
  });
});
