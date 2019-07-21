/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Image from './Image';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Image.js', () => {
  test('it renders without errors', () => {
    render(<Image />);
  });
});
