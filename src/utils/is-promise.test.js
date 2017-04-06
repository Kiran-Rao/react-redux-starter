import test from 'ava';
import isPromise from './is-promise';

const wrap = (promise) => ({ promise });

test('should return true if Promise provided', t => {
  const promise = new Promise((resolve) => resolve(false));
  t.true(isPromise(wrap(promise)));
});

test('should return false if not a promise', t => {
  const badPayload1 = { hello: 'world' };
  const badPayload2 = ['hello', 'world'];
  const badPayload3 = 'hello world';

  t.false(isPromise(wrap(badPayload1)));
  t.false(isPromise(wrap(badPayload2)));
  t.false(isPromise(wrap(badPayload3)));
});
