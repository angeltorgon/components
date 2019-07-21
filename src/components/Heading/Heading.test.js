/**
 * Dependencies
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Heading from './Heading';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Assertions
 */

describe('Heading.js', () => {
  test('it renders without errors', () => {
    render(<Heading />);
  });

  test('it renders h2 by default', () => {
    const { container } = render(<Heading>H2</Heading>);

    const h1_tags = container.getElementsByTagName('h1');
    expect(h1_tags.length).toBe(0);
    const h2_tags = container.getElementsByTagName('h2');
    expect(h2_tags.length).toBe(1);
  });

  test('it displays "Big Title"', () => {
    const { getByText } = render(<Heading>Big Title</Heading>);
    getByText('Big Title');
  });

  test('it displays types h1,h2,h3,h4,h5,h6', () => {
    const { container } = render(
      <div>
        <Heading type="h1">H1</Heading>
        <Heading type="h2">H2</Heading>
        <Heading type="h3">H3</Heading>
        <Heading type="h4">H4</Heading>
        <Heading type="h5">H5</Heading>
        <Heading type="h6">H6</Heading>
      </div>
    );

    const h1_tags = container.getElementsByTagName('h1');
    expect(h1_tags.length).toBe(1);
    expect(h1_tags[0].textContent).toBe('H1');
    const h2_tags = container.getElementsByTagName('h2');
    expect(h2_tags.length).toBe(1);
    expect(h2_tags[0].textContent).toBe('H2');
    const h3_tags = container.getElementsByTagName('h3');
    expect(h3_tags.length).toBe(1);
    expect(h3_tags[0].textContent).toBe('H3');
    const h4_tags = container.getElementsByTagName('h4');
    expect(h4_tags.length).toBe(1);
    expect(h4_tags[0].textContent).toBe('H4');
    const h5_tags = container.getElementsByTagName('h5');
    expect(h5_tags.length).toBe(1);
    expect(h5_tags[0].textContent).toBe('H5');
    const h6_tags = container.getElementsByTagName('h6');
    expect(h6_tags.length).toBe(1);
    expect(h6_tags[0].textContent).toBe('H6');
  });
});
