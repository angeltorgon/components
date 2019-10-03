import React from 'react';
import Paragraph from './Paragraph';

export default {
  title: 'Paragraph',
};

export const oneliner = () => <Paragraph>This is a one liner.</Paragraph>;

export const lorem_ipsum = () => (
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet, ligula a commodo bibendum, ipsum augue varius lectus, sit amet pellentesque mauris eros nec arcu. Morbi id placerat ante, at gravida orci. Proin ac nibh pulvinar ipsum porta scelerisque. Donec bibendum, mi nec fringilla fringilla, dolor metus scelerisque elit, quis placerat erat tortor lacinia dui.
  </Paragraph>
);
