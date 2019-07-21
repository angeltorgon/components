/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Section from './Section';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Section.js', () => {
  test('it renders without errors', () => {
    render(<Section />);
  });

  test('it displays "Section Content"', () => {
    const { getByText } = render(<Section>Section Content</Section>);
    getByText('Section Content');
  });
});
