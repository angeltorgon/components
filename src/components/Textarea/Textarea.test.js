/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Textarea from './Textarea';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Textarea.js', () => {
  test('it renders without errors', () => {
    render(<Textarea />);
  });

  test('it displays "Read me"', () => {
    const { getByText } = render(<Textarea>Read me</Textarea>);
    getByText('Read me');
  });
});
