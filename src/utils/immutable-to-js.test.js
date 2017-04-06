import test from 'ava';
import immutableToJS from './immutable-to-js';
import { fromJS } from 'immutable';

const mockState = {
  state: {
    name: 'John',
    sons: [{
      name: 'Lill John',
      age: 12
    }, {
      name: 'Big John',
      age: 34
    }]
  }
};

const mockImmutableState = {
  state: fromJS(mockState.state)
};

test('should ignore JS', t => {
  t.deepEqual(mockState, immutableToJS(mockState));
});

test('should convert immutable to JS', t => {
  t.deepEqual(mockState, immutableToJS(mockImmutableState));
});
