import test from 'ava';
import React from 'react';
import render from 'react-test-renderer';

import App from './app';

test('snapshot', t => {
  const tree = render.create(<App />).toJSON();
  t.snapshot(tree);
});
