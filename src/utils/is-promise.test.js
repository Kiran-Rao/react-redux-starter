import test from 'ava';
import isPromise from './is-promise';

const wrap = (promise) => ({ promise });

test('should return true if Promise provided', t => {
  const promise = new Promise((resolve) => resolve(false));
  t.truthy(isPromise(wrap(promise)));
});

test('should return false if not a promise', t => {
  const badPayload1 = { hello: 'world' };
  const badPayload2 = ['hello', 'world'];
  const badPayload3 = 'hello world';

  t.falsy(isPromise(wrap(badPayload1)));
  t.falsy(isPromise(wrap(badPayload2)));
  t.falsy(isPromise(wrap(badPayload3)));
});
