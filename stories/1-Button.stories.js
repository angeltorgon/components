import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../src/index';

export default {
  title: 'Button',
};

export const text = () => <Button onClick={action('clicked')}>Click Me</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
