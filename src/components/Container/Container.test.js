/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Container from './Container';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Container.js', () => {
  test('it renders without errors', () => {
    render(<Container />);
  });
});
