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

  test('it displays "Click me"', () => {
    const { getByText } = render(<Paragraph>Click me</Paragraph>);
    getByText('Click me');
  });
});
