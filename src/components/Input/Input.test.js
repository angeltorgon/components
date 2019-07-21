/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Input from './Input';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Input.js', () => {
  test('it renders without errors', () => {
    render(<Input />);
  });

  test('it displays "Read me"', () => {
    const { container } = render(<Input id="input-username" type="text" name="username" value="wurde"></Input>);
    const input = container.getElementById('input-username');
    expect(input).toBeTruthy();
    expect(input.name).toBe('username');
    expect(input.value).toBe('wurde');
  });
});
