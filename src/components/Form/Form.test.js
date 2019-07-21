/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Form from './Form';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Form.js', () => {
  test('it renders without errors', () => {
    render(<Form />);
  });

  test('it displays "Read me"', () => {
    const { getByText } = render(<Form>Read me</Form>);
    getByText('Read me');
  });
});
