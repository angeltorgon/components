/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Video from './Video';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Video.js', () => {
  test('it renders without errors', () => {
    render(<Video />);
  });
});
