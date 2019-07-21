/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Audio from './Audio';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Audio.js', () => {
  test('it renders without errors', () => {
    render(<Audio />);
  });
});
