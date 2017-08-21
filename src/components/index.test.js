import test from 'ava';
import React from 'react';
import render from 'react-test-renderer';

import Button from './Button';
import Welcome from './Welcome';

test('Button snapshot', t => {
  const tree = render.create(<Button title="aoeu" click={() => {}} />).toJSON();
  t.snapshot(tree);
});

test('Welcome snapshot', t => {
  const tree = render.create(<Welcome count={5} />).toJSON();
  t.snapshot(tree);
});
