/**
 * Dependencies
 */

import { configure } from '@storybook/react';

/**
 * Load stories
 */

configure([
  require.context('../src/components', true, /\.stories\.js$/),
  require.context('../stories', true, /\.stories\.js$/),
], module);
