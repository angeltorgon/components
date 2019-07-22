/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Nav from './Nav';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Nav.js', () => {
  test('it renders without errors', () => {
    render(<Nav />);
  });

  test('it displays "Home"', () => {
    const { getByText } = render(
      <Nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </Nav>
    );
    getByText('Home');
  });
});
