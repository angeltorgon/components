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

    const inputs = container.getElementsByTagName('input');
    expect(inputs.length).toBe(1);
    expect(inputs[0].name).toBe('username');
    expect(inputs[0].value).toBe('wurde');
  });
});
