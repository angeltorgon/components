/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Paragraph from './Paragraph';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Paragraph.js', () => {
  test('it renders without errors', () => {
    render(<Paragraph />);
  });

  test('it displays "Read me"', () => {
    const { getByText } = render(<Paragraph>Read me</Paragraph>);
    getByText('Read me');
  });
});
